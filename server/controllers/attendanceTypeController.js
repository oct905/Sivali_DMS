const { AttendanceType } = require('../models')

class AttendanceTypeController {
    static async get(req, res, next) {
        try {
            const CompanyId = req.loginInfo.id;
            const attendanceTypes = await AttendanceType.findAll({
                where: { CompanyId }
            });
            res.status(200).json(attendanceTypes);
        } catch (error) {
            next(error);
        }
    }

    static async getById(req, res, next) {
        try {
            const { id } = req.params;
            const attendanceType = await AttendanceType.findByPk(id);
            if (!attendanceType) throw { status: 404, message: "Data Not Found" };

            const CompanyId = req.loginInfo.id;
            if (attendanceType.CompanyId !== CompanyId) throw { status: 403, message: "This record belongs to another company." };

            res.status(200).json(attendanceType);
        } catch (error) {
            next(error);
        }
    }

    static async create(req, res, next) {
        try {
            const { name, description, mandatoryLocation } = req.body;
            const CompanyId = req.loginInfo.id;

            if (!name || !description || mandatoryLocation === undefined) throw { status: 400, message: "All Field Required" };
            await AttendanceType.create({ name, description, mandatoryLocation, CompanyId });
            res.status(201).json({ message: "Attendance Type created" });
        } catch (error) {
            next(error);
        }
    }

    static async update(req, res, next) {
        try {
            const { id, name, description, mandatoryLocation } = req.body;
            const CompanyId = req.loginInfo.id;

            if (!id || !name || !description || mandatoryLocation === undefined) throw { status: 400, message: "All Field Required" };

            const attendanceType = await AttendanceType.findOne({ where: { id, CompanyId } });
            if (!attendanceType) throw { status: 404, message: "NotFound" };

            await AttendanceType.update(
                { name, description, mandatoryLocation },
                { where: { id, CompanyId } }
            );

            res.status(200).json({ message: "Attendance Type updated" });
        } catch (error) {
            next(error);
        }
    }

    static async delete(req, res, next) {
        try {
            const { id } = req.body;
            if (!id) throw { status: 400, message: "Record id required" };

            const done = await AttendanceType.destroy({ where: { id } });
            if (done === 0) throw { status: 404, message: "Unable to delete: Record not found." };

            res.status(200).json({ message: "Attendance Type deleted" });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = AttendanceTypeController;

const { PartTimeAttendance } = require('../models')

class PartTimeAttendanceController {
    static async get(req, res, next) {
        try {
            const CompanyId = req.loginInfo.id;
            const partTimeAttendances = await PartTimeAttendance.findAll({
                where: { CompanyId }
            });
            res.status(200).json(partTimeAttendances);
        } catch (error) {
            next(error);
        }
    }

    static async getById(req, res, next) {
        try {
            const { id } = req.params;
            const partTimeAttendance = await PartTimeAttendance.findByPk(id);
            if (!partTimeAttendance) throw { name: "NotFound" };

            const CompanyId = req.loginInfo.id;
            if (partTimeAttendance.CompanyId !== CompanyId) throw { name: "Forbidden" };

            res.status(200).json(partTimeAttendance);
        } catch (error) {
            next(error);
        }
    }

    static async create(req, res, next) {
        try {
            const { date, name, shiftIn, checkIn, shiftOut, checkOut, jobName, jobDescription, locationIn, locationOut, photoIn, photoOut } = req.body;
            const CompanyId = req.loginInfo.id;

            if (!date || !name || !shiftIn || !shiftOut || !jobName || !jobDescription) throw { name: "BadRequest" };
            await PartTimeAttendance.create({ date, name, shiftIn, checkIn, shiftOut, checkOut, jobName, jobDescription, locationIn, locationOut, photoIn, photoOut, CompanyId });
            res.status(201).json({ msg: "Part-Time Attendance created" });
        } catch (error) {
            next(error);
        }
    }

    static async update(req, res, next) {
        try {
            const { id, date, name, shiftIn, checkIn, shiftOut, checkOut, jobName, jobDescription, locationIn, locationOut, photoIn, photoOut } = req.body;
            const CompanyId = req.loginInfo.id;

            if (!id || !date || !name || !shiftIn || !shiftOut || !jobName || !jobDescription) throw { name: "BadRequest" };

            const partTimeAttendance = await PartTimeAttendance.findOne({ where: { id, CompanyId } });
            if (!partTimeAttendance) throw { name: "NotFound" };

            await PartTimeAttendance.update(
                { date, name, shiftIn, checkIn, shiftOut, checkOut, jobName, jobDescription, locationIn, locationOut, photoIn, photoOut },
                { where: { id, CompanyId } }
            );

            res.status(200).json({ msg: "Part-Time Attendance updated" });
        } catch (error) {
            next(error);
        }
    }

    static async delete(req, res, next) {
        try {
            const { id } = req.body;
            if (!id) throw { name: "BadRequest" };

            const done = await PartTimeAttendance.destroy({ where: { id } });
            if (done === 0) throw { name: "NotFound" };

            res.status(200).json({ msg: "Part-Time Attendance deleted" });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = PartTimeAttendanceController;

const { FullTimeAttendance } = require('../models')

class FullTimeAttendanceController {
    static async get(req, res, next) {
        try {
            const CompanyId = req.loginInfo.id;
            const fullTimeAttendances = await FullTimeAttendance.findAll({
                where: { CompanyId }
            });
            res.status(200).json(fullTimeAttendances);
        } catch (error) {
            next(error);
        }
    }

    static async getById(req, res, next) {
        try {
            const { id } = req.params;
            const fullTimeAttendance = await FullTimeAttendance.findByPk(id);
            if (!fullTimeAttendance) throw { name: "NotFound" };

            const CompanyId = req.loginInfo.id;
            if (fullTimeAttendance.CompanyId !== CompanyId) throw { name: "Forbidden" };

            res.status(200).json(fullTimeAttendance);
        } catch (error) {
            next(error);
        }
    }

    static async create(req, res, next) {
        try {
            const { date, name, shiftIn, checkIn, shiftOut, checkOut, jobName, jobDescription, locationIn, locationOut, photoIn, photoOut } = req.body;
            const CompanyId = req.loginInfo.id;

            if (!date || !name || !shiftIn || !shiftOut || !jobName || !jobDescription || !locationIn) throw { name: "BadRequest" };
            await FullTimeAttendance.create({ date, name, shiftIn, checkIn, shiftOut, checkOut, jobName, jobDescription, locationIn, locationOut, photoIn, photoOut, CompanyId });
            res.status(201).json({ msg: "Full-Time Attendance created" });
        } catch (error) {
            next(error);
        }
    }

    static async update(req, res, next) {
        try {
            const { id, date, name, shiftIn, checkIn, shiftOut, checkOut, jobName, jobDescription, locationIn, locationOut, photoIn, photoOut } = req.body;
            const CompanyId = req.loginInfo.id;

            if (!id || !date || !name || !shiftIn || !shiftOut || !jobName || !jobDescription || !locationIn) throw { name: "BadRequest" };

            const fullTimeAttendance = await FullTimeAttendance.findOne({ where: { id, CompanyId } });
            if (!fullTimeAttendance) throw { name: "NotFound" };

            await FullTimeAttendance.update(
                { date, name, shiftIn, checkIn, shiftOut, checkOut, jobName, jobDescription, locationIn, locationOut, photoIn, photoOut },
                { where: { id, CompanyId } }
            );

            res.status(200).json({ msg: "Full-Time Attendance updated" });
        } catch (error) {
            next(error);
        }
    }

    static async delete(req, res, next) {
        try {
            const { id } = req.body;
            if (!id) throw { name: "BadRequest" };

            const done = await FullTimeAttendance.destroy({ where: { id } });
            if (done === 0) throw { name: "NotFound" };

            res.status(200).json({ msg: "Full-Time Attendance deleted" });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = FullTimeAttendanceController;

const { Overtime } = require('../models')

class OvertimeController {
    static async get(req, res, next) {
        try {
            const CompanyId = req.loginInfo.id
            const overtimes = await Overtime.findAll({
                where: { CompanyId }
            });
            res.status(200).json(overtimes)
        } catch (error) {
            next(error)
        }
    }

    static async getById(req, res, next) {
        try {
            const { id } = req.params
            const overtime = await Overtime.findByPk(id)
            if (!overtime) throw { name: "NotFound" }

            const CompanyId = req.loginInfo.id;
            if (overtime.CompanyId !== CompanyId) throw { name: "Forbidden" }

            res.status(200).json(overtime)
        } catch (error) {
            next(error)
        }
    }

    static async create(req, res, next) {
        try {
            const { fullName, date, hour, description, created, status } = req.body
            const CompanyId = req.loginInfo.id

            if (!fullName || !date || !hour || !description || !created || !status) throw { name: "BadRequest" }
            await Overtime.create({ fullName, date, hour, description, created, status, CompanyId })
            res.status(201).json({ msg: "Overtime created" })
        } catch (error) {
            console.log(error);

            next(error)
        }
    }

    static async update(req, res, next) {
        try {
            const { id, fullName, date, hour, description, created, status } = req.body;
            const CompanyId = req.loginInfo.id;
            if (!id || !fullName || !date || !hour || !description || !created || !status) throw { name: "BadRequest" };

            const overtime = await Overtime.findOne({ where: { id, CompanyId } });
            if (!overtime) throw { name: "NotFound" };

            await Overtime.update(
                { fullName, date, hour, description, created, status },
                { where: { id, CompanyId } }
            );

            res.status(200).json({ msg: "Overtime updated" });
        } catch (error) {
            next(error);
        }
    }


    static async delete(req, res, next) {
        try {
            const { id } = req.body
            if (!id) throw { name: "BadRequest" }
            const done = await Overtime.destroy({ where: { id } })
            if (done === 0) throw { name: "NotFound" }

            res.status(200).json({ msg: "Overtime deleted" })
        } catch (error) {
            next(error)
        }
    }
}
module.exports = OvertimeController;
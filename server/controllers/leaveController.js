const { Leave } = require('../models');

class LeaveController {
    static async get(req, res, next) {
        try {
            const CompanyId = req.loginInfo.id;
            const leaves = await Leave.findAll({
                where: { CompanyId }
            });
            res.status(200).json(leaves);
        } catch (error) {
            next(error);
        }
    }

    static async getById(req, res, next) {
        try {
            const { id } = req.params;
            const leave = await Leave.findByPk(id);
            if (!leave) throw { name: "NotFound" };

            const CompanyId = req.loginInfo.id;
            if (leave.CompanyId !== CompanyId) throw { name: "Forbidden" }

            res.status(200).json(leave);
        } catch (error) {
            next(error);
        }
    }

    static async create(req, res, next) {
        try {
            const { type, fullName, date, description, created, status } = req.body;
            const CompanyId = req.loginInfo.id;

            if (!type || !fullName || !date || !description || !created || !status) throw { name: "BadRequest" };
            await Leave.create({ type, fullName, date, description, created, status, CompanyId });
            res.status(201).json({ msg: "Leave created" });
        } catch (error) {
            console.log(error);
            next(error);
        }
    }

    static async update(req, res, next) {
        try {
            const { id, type, fullName, date, description, created, status } = req.body;
            const CompanyId = req.loginInfo.id;
            if (!id || !type || !fullName || !date || !description || !created || !status) throw { name: "BadRequest" }

            await Leave.update(
                { type, fullName, date, description, created, status },
                { where: { id, CompanyId } }
            );
            res.status(200).json({ msg: "Leave updated" });
        } catch (error) {
            next(error);
        }
    }

    static async delete(req, res, next) {
        try {
            const { id } = req.body;
            if (!id) throw { name: "BadRequest" };
            const done = await Leave.destroy({ where: { id } });
            if (done === 0) throw { name: "NotFound" };

            res.status(200).json({ msg: "Leave deleted" });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = LeaveController;

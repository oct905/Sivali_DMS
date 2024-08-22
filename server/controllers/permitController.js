const { Permit } = require('../models');

class PermitController {
    static async get(req, res, next) {
        try {
            const CompanyId = req.loginInfo.id;
            const permits = await Permit.findAll({
                where: { CompanyId }
            });
            res.status(200).json(permits);
        } catch (error) {
            next(error);
        }
    }

    static async getById(req, res, next) {
        try {
            const { id } = req.params;
            const permit = await Permit.findByPk(id);
            if (!permit) throw { name: "NotFound" };

            const CompanyId = req.loginInfo.id;
            if (permit.CompanyId !== CompanyId) throw { name: "Forbidden" }

            res.status(200).json(permit);
        } catch (error) {
            next(error);
        }
    }

    static async create(req, res, next) {
        try {
            const { fullName, date, description, created, status } = req.body;
            const CompanyId = req.loginInfo.id;

            if (!fullName || !date || !description || !created || !status) throw { name: "BadRequest" };
            await Permit.create({ fullName, date, description, created, status, CompanyId });
            res.status(201).json({ msg: "Permit created" });
        } catch (error) {
            console.log(error);
            next(error);
        }
    }

    static async update(req, res, next) {
        try {
            const { id, fullName, date, description, created, status } = req.body;
            const CompanyId = req.loginInfo.id;
            if (!id || !fullName || !date || !description || !created || !status) throw { name: "BadRequest" };

            const permit = await Permit.findOne({ where: { id, CompanyId } });
            if (!permit) throw { name: "NotFound" };

            await Permit.update(
                { fullName, date, description, created, status },
                { where: { id, CompanyId } }
            );

            res.status(200).json({ msg: "Permit updated" });
        } catch (error) {
            next(error);
        }
    }


    static async delete(req, res, next) {
        try {
            const { id } = req.body;
            if (!id) throw { name: "BadRequest" };
            const done = await Permit.destroy({ where: { id } });
            if (done === 0) throw { name: "NotFound" };

            res.status(200).json({ msg: "Permit deleted" });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = PermitController;

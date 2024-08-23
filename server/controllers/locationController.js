const { Location } = require('../models')

class LocationController {
    static async get(req, res, next) {
        try {
            const CompanyId = req.loginInfo.id;
            const locations = await Location.findAll({
                where: { CompanyId }
            });
            res.status(200).json(locations);
        } catch (error) {
            next(error);
        }
    }

    static async getById(req, res, next) {
        try {
            const { id } = req.params;
            const location = await Location.findByPk(id);
            if (!location) throw { name: "NotFound" };

            const CompanyId = req.loginInfo.id;
            if (location.CompanyId !== CompanyId) throw { name: "Forbidden" };

            res.status(200).json(location);
        } catch (error) {
            next(error);
        }
    }

    static async create(req, res, next) {
        try {
            const { locationName, description } = req.body;
            const CompanyId = req.loginInfo.id;

            if (!locationName || !description) throw { name: "BadRequest" };
            await Location.create({ locationName, description, CompanyId });
            res.status(201).json({ msg: "Location created" });
        } catch (error) {
            next(error);
        }
    }

    static async update(req, res, next) {
        try {
            const { id, locationName, description } = req.body;
            const CompanyId = req.loginInfo.id;

            if (!id || !locationName || !description) throw { name: "BadRequest" };

            const location = await Location.findOne({ where: { id, CompanyId } });
            if (!location) throw { name: "NotFound" };

            await Location.update(
                { locationName, description },
                { where: { id, CompanyId } }
            );

            res.status(200).json({ msg: "Location updated" });
        } catch (error) {
            next(error);
        }
    }

    static async delete(req, res, next) {
        try {
            const { id } = req.body;
            if (!id) throw { name: "BadRequest" };

            const done = await Location.destroy({ where: { id } });
            if (done === 0) throw { name: "NotFound" };

            res.status(200).json({ msg: "Location deleted" });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = LocationController;

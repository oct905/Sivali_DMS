const { COMPANY_PARTNER } = require('../models');

class CompanyPartnerController {
    static async update(req, res, next) {
        try {
            const {
                name,
                country,
                npwp,
                type,
                size,
                province,
                city,
                district,
                village,
                address,
                postalCode,
                phoneNumber,
                email,
                webUrl,
                about
            } = req.body;

            const payload = {

            }

            res.status(200).json({
                message: "Update Success"
            })
        } catch (error) {
            next(error)
        }
    }
}
module.exports = CompanyPartnerController
const { verifyToken } = require("../utils/jwt")
const { COMPANY_PARTNER } = require('../models');

const authentication = async (req, res, next) => {
    try {
        let { authorization } = req.headers
        if (!authorization) throw { name: "Unauthorized" }


        const access_token = authorization.split(' ')[1]
        if (!access_token) throw { name: "Unauthorized" }

        const payload = verifyToken(access_token)

        const company = await COMPANY_PARTNER.findByPk(payload.id, { where: { company_email: payload.email } })
        if (!company) throw { name: "Unauthorized" }

        req.loginInfo = {
            id: company.companyId,
            email: company.company_email
        }
        next()
    } catch (error) {
        console.log(error, `<<< AUTHENTICATION`);

        next(error)
    }
}

module.exports = authentication 
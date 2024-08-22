const { verifyToken } = require("../utils/jwt")
const { Company } = require("../models")

const authentication = async (req, res, next) => {
    try {
        let { authorization } = req.headers
        if (!authorization) throw { name: "Unauthorized" }

        const access_token = authorization.split(' ')[1]
        if (!access_token) throw { name: "Unauthorized" }

        const payload = verifyToken(access_token)

        const user = await Company.findByPk(payload.id)
        if (!user) throw { name: "Unauthorized" }

        req.loginInfo = {
            id: user.id,
            email: user.email,
        }
        next()
    } catch (error) {
        console.log(error, `<<< AUTHENTICATION`);

        next(error)
    }
}

module.exports = authentication 
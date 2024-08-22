const { Company } = require("../models")
const { signToken } = require("../utils/jwt")
const { compare, hash } = require("../utils/bcrypt")

class AuthController {
    static async loginCompany(req, res, next) {
        try {
            const { email, password } = req.body
            if (!email || !password) {
                throw { name: 'BadRequest', message: 'Email and password are required' }
            }

            const company = await Company.findOne({ where: { email } })

            if (!company || !compare(password, company.password)) throw { name: 'BadRequest', message: 'Invalid email or password' }

            const token = signToken({
                id: company.id,
                email: company.email
            })

            res.status(200).json({ token })
        } catch (error) {
            console.log(error);

            next(error)
        }
    }
    static async registerCompany(req, res, next) {
        try {
            const { email, password, name, industry, companySize, phoneCompany, position, fullName, phoneNumber } = req.body

            if (!email || !password || !name || !industry || !companySize || !phoneCompany || !position || !fullName || !phoneNumber) throw { name: 'BadRequest', message: 'All fields are required' }
            const hashedPassword = hash(password)
            await Company.create({
                email, password: hashedPassword, name, industry, companySize, phoneCompany, position, fullName, phoneNumber
            })

            res.status(200).json({
                message: 'Register success'
            })
        } catch (error) {

            next(error)
        }
    }
}

module.exports = AuthController
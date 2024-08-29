const { COMPANY_PARTNER, sequelize } = require('../models');
const { hash, compare } = require('../utils/bcrypt');
const imagekit = require('../utils/imageKit');
const { signToken } = require('../utils/jwt');

class CompanyPartnerAuthController {
    static async register(req, res, next) {
        let uploadResponse;
        try {
            const {
                password,
                industry,
                size,
                name,
                address,
                email,
                phoneNumber
            } = req.body;

            if (!password ||
                !industry ||
                !size ||
                !name ||
                !address ||
                !email ||
                !phoneNumber ||
                !req.file
            ) {
                throw { status: 400, message: 'All fields are required. Please ensure that no fields are left empty.' };
            }

            const imageInBase64 = req.file.buffer.toString('base64');
            const hashedPassword = hash(password);

            uploadResponse = await imagekit.upload({
                file: imageInBase64,
                fileName: email
            });

            const payload = {
                company_password: hashedPassword,
                company_industry: industry,
                company_size: size,
                company_name: name,
                company_photo: uploadResponse.url,
                company_address: address,
                company_email: email,
                company_phone_number: phoneNumber
            };

            await COMPANY_PARTNER.create(payload);

            res.status(201).json({
                message: 'Register success'
            });
        } catch (error) {

            if (uploadResponse) {
                try {
                    await imagekit.deleteFile(uploadResponse.fileId);
                } catch (deleteError) {
                    console.error('Failed to delete uploaded image:', deleteError);
                }
            }

            next(error);
        }
    }

    static async login(req, res, next) {
        try {
            const { email, password } = req.body

            if (!email || !password) {
                throw { status: 400, message: 'All field required' }
            }
            const company = await COMPANY_PARTNER.findOne({ where: { company_email: email } })

            if (!company || !compare(password, company.company_password)) throw { status: 400, message: 'Invalid email or password' }
            const token = signToken({
                id: company.companyId,
                email: company.company_email
            })

            res.status(200).json({ token })
        } catch (error) {
            next(error)
        }
    }

}

module.exports = CompanyPartnerAuthController;
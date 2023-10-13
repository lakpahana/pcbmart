const createHttpError = require('http-errors')
const bcrypt = require('bcrypt');
const CompanyModel = require('../model/company');

exports.register = async (req, res, next) => {
    const email = req.body.email
    const password = req.body.password
    const name = req.body.name
    const phone = req.body.phone
    const address = req.body.address
    try {
        if (!email || !password || !name || !phone || !address) {
            throw createHttpError(400, 'Missing required parameters')
        }

        const isCompanyAvailable = await CompanyModel.findOne({ email: email }).exec();

        if (isCompanyAvailable) {
            throw createHttpError(400, 'Company already exists')
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const company = new CompanyModel({
            name: name,
            email: email,
            password: hashedPassword,
            phone: phone,
            address: address
        })

        const result = await company.save();

        res.status(201).send(result);


    } catch (error) {
        next(error)

    }


}


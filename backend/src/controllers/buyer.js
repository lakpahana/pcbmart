const BuyerModel = require('../model/buyer')
const createHttpError = require('http-errors')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.login = async (req, res, next) => {
    const email = req.body.email
    const password = req.body.password

    try {
        if (!email || !password) {
            throw createHttpError(400, 'Missing required parameters')
        }

        const buyer = await BuyerModel.findOne({ email: email }).exec();

        if (!buyer) {
            throw createHttpError(400, 'User does not exist')
        }

        const isPasswordValid = await bcrypt.compare(password, buyer.password);

        if (!isPasswordValid) {
            throw createHttpError(400, 'Invalid credentials')
        }

        const user = await BuyerModel.findOne({ email: email }).exec();

        const token = jwt.sign(
            {
                user_id: user._id,
                email: user.email,
            },
            process.env.JWT_TOKEN_KEY,
            {
                expiresIn: "4h",
            }
        )

        user.token = token;

        const result = await user.save();

        res.status(200).send(result);

    } catch (error) {
        next(error)
    }
}


exports.register = async (req, res, next) => {
    const email = req.body.email
    const password = req.body.password
    const name = req.body.name
    const phone = req.body.phone
    try {
        if (!email || !password || !name || !phone) {
            throw createHttpError(400, 'Missing required parameters')
        }

        const isUserAvailable = await BuyerModel.findOne({ email: email }).exec();

        if (isUserAvailable) {
            throw createHttpError(400, 'User already exists')
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const buyer = new BuyerModel({
            name: name,
            email: email,
            password: hashedPassword,
            phone: phone
        })

        const result = await buyer.save();

        res.status(201).send(result);


    } catch (error) {
        next(error)

    }


}


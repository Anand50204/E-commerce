import validator from "validator";
import userModel from "../models/userModel.js";
import Jwt from "jsonwebtoken";

const creatToken = (id) => {
    return Jwt.sign({ id }, process.env.JWT_SECRET)
}

// Route for user login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "user doesn`t exist" })
        }

        const ismatch = await password === user.password;
        if (ismatch) {
            const token = creatToken(user._id);
            res.json({ success: true, token })
        } else {
            res.json({ success: false, message: "invalid credentials" })
        }

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })

    }
}
// Route for user register
const registerUser = async (req, res) => {
    try {

        const { name, email, password } = req.body;

        // chaking user already exist or not
        const exist = await userModel.findOne({ email });
        if (exist) {
            return res.json({ success: false, message: "user already exist" })
        }

        // validating email or strong password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "please enter valid email" })
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "please enter strong password" })
        }

        const newUser = new userModel({
            name,
            email,
            password
        })

        const user = await newUser.save();

        const token = creatToken(user._id);
        res.json({ success: true, token })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })


    }


}
// Route for admin login
const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = Jwt.sign(email + password, process.env.JWT_SECRET);
            res.json({ success: true, token });
        } else {
            res.json({ success: false, message: "invalid credentials" })
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

export { loginUser, registerUser, adminLogin }
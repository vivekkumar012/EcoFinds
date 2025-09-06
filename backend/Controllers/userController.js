<<<<<<< HEAD
import {User} from "../Models/userModel.js"
import jwt from "jsonwebtoken";
=======
import { userModel } from "../Models/userModel.js"
import jwt from "jsonwebtoken"
>>>>>>> b1c4c1c5dca6eace434e92e046f75c43c73f8b8f
import bcrypt from "bcrypt"

//Login User
export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });

        //if user doesn't exists
        if (!user) {
            return res.json({ success: false, message: "User doesn't exist" })
        }

        // matching user password with given password
        const isMatch = await bcrypt.compare(password, user.password);

        //if not match
        if (!isMatch) {
            return res.json({ success: false, message: "Invalid Password" })
        }

        const token = jwt.sign({
            id: user._id
        }, process.env.JWT_SECRET);

        res.json({
            message: "User Successfully Login",
            token,
            success: true
        })

    } catch (err) {
        console.log(err);
        res.json({ success: false, message: "Error" })
    }
}


export const registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
<<<<<<< HEAD
        //checking is User already exists?
        const exists = await User.findOne({ email });
=======
        // Check if user already exists
        const exists = await userModel.findOne({ email });
>>>>>>> b1c4c1c5dca6eace434e92e046f75c43c73f8b8f
        if (exists) {
            return res
                .status(400)
                .json({ success: false, message: "User already exists" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

<<<<<<< HEAD
        //New user
        const newUser = new User({
            fullname: fullname,
            email: email,
            password: hashedPassword
        })

        const user = await newUser.save();
        const token = createToken(user._id);

        res.json({ success: true, token })

=======
        // Create user
        const newUser = await userModel.create({
            username,
            email,
            password: hashedPassword,
        });
>>>>>>> b1c4c1c5dca6eace434e92e046f75c43c73f8b8f

        return res.status(201).json({ success: true, user: newUser });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Error in register" });
    }
};


//logout
export const logout = (req, res) => {
    res.cookie('token', '').json(true);
};

//get profile
export const getProfile = async (req, res) => {
    try {
        const userId = req.id;
        if (!userId) {
            return res.status(402).json({
                message: "Something went error in getting profile"
            })
        }
        const user = await User.findById(userId);
        if (!user) {
            return res.status(400).json({
                message: "User not found"
            })
        }
        return res.status(200).json({
            success: true,
            user
        })
    } catch (error) {
        res.status(400).json({
            message: "Error in getting profile info",
            error: error.message
        })
    }
}

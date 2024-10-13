import JsonWebToken from "jsonwebtoken";
import bcrypt from "bcryptjs"
import userModel from "../models/model.js"

const webToken = JsonWebToken

export const register = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;
        const saltRounds = 10;
        const hashPassword = await bcrypt.hash(password, saltRounds)
        const user = new userModel({
            username: username,
            phone: phone,
            email: email,
            password: hashPassword
        });

        await user.save();
        res.status(200).json({ message: "User created successfully" });

    } catch (error) {
        res.status(404).json({ message: "User creation failed", data: error });
        console.log(error);
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if both username and password are provided
        if (!email || !password) {
            return res.status(400).json({ message: 'Both username and password are required' });
        }

        // Find the user by username
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        // Compare provided password with the stored hashed password
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(400).json({ message: 'Invalid password' })
        }

        const token = webToken.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' })

        res.status(200).json({ token })

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error });
    }
}
import User from "../models/user.js";

export const Register = async (req, res) => {
    try {
        const { email, newPassword, confirmPassword } = req.body
        if (!email || !newPassword || !confirmPassword ){
            return res.status(400).json({
                message: "Please provide all the required fields",
                success: false
            })
        }
        else if (!/^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            return res.status(400).json({ message: "Please provide a valid email address", success: false })
        }
        if (!(newPassword === confirmPassword)) {
            return res.status(400).json({ message: "Passwords do not match", success: false })
        }
        const user = await User.findOne(email);
        if (user) {
            return res.status(400).json({ message: "Email address already registered", success: false })
        }
        else {
            const newHshedPassword = await bycryptjs.hash(newPassword, 16);
            const confirmHashedPassword = await bycryptjs.hash(email, 16);
            User.create({

                email,
                 newPassword : newHshedPassword, confirmPassword :confirmHashedPassword 
            })
            return res.status(200).json({ message: "User registered successfully", success: true })
        }
    } catch (error) {
        console.log(error);
    }
}
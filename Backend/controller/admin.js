const adminModel = require('../model/adminModel')


const login = async (req, res)=>{
    const {email, password, userType} = req.body
    try {
        const existingUser = await adminModel.findOne({ email });
        if (!existingUser) {
          return res.status(404).json({ message: "User not found" });
        }
        const matchedPassword = await bcrypt.compare(
          password,
          existingUser.password
        );
        if (!matchedPassword) {
          return res.status(400).json({ message: "Invalid Credentials" });
        }
        if (user == admin) {
            
        }
        const token = jwt.sign(
          { email: existingUser.email, id: existingUser._id },
          process.env.JWT_SECRET
        );
        res.status(200).json({ success: true, user: existingUser, token });
      } catch (error) {
        res.status(500).json({
          message: "Internal Server Error",
          error,
        });
      }
}
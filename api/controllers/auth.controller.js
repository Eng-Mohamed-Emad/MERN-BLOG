import User from "../models/user.model.js"
import bcryptjs from "bcryptjs"
export const signup = async (req, res) => {
  const { username, email, password } = req.body
  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return res.status(400).json({ message: "All Fields are Required" })
  }
  const hashedPassword = await bcryptjs.hash(password, 10)
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  })
  try {
    await newUser.save()
    return res.status(201).json({ message: "User Created Successfully" })
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}

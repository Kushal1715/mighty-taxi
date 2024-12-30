import Rider from "../models/Rider.js";

// Add Rider Controller
export const addRider = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      username,
      password,
      contactNumber,
      gender,
      address,
      status,
    } = req.body;

    // Validate required fields
    if (
      !firstName ||
      !lastName ||
      !email ||
      !username ||
      !password ||
      !contactNumber ||
      !gender ||
      !address
    ) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Check if a file was uploaded
    // const  = req.file ? req.file.path : null;
    if (req.file) {
      console.log(req.file);
    } else {
      console.log("path not fould");
    }

    // Create new rider
    const newRider = new Rider({
      firstName,
      lastName,
      email,
      username,
      password, // The password will be hashed by the schema middleware before saving
      contactNumber,
      gender,
      address,
      status,
      profileImage: req.file.path,
    });

    // Save the rider
    await newRider.save();

    // Omit the password from the response for security purposes
    const { password: _, ...riderWithoutPassword } = newRider.toObject();

    res.status(201).json({
      message: "Rider added successfully",
      rider: riderWithoutPassword,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

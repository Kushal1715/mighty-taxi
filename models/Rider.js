import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const riderSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  contactNumber: { type: String, required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  address: { type: String, required: true },
  status: {
    type: String,
    enum: ['Active', 'Inactive', 'Pending', 'Banned'],
    default: 'Pending',
  },
  profileImage: { type: String }, // Path to uploaded file
}, { timestamps: true });

// Hash password before saving
riderSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  try {
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

const Rider = mongoose.model('Rider', riderSchema);
export default Rider;

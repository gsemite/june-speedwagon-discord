import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  wallet: {
    type: Number,
  },
  createdAt: {
    type: Date
  },
  lastDailyClaim: {
    type: Date
  }
}, { collection: 'users' })

export {
  userSchema,
}

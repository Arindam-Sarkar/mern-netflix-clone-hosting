import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    // unique: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    // unique: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
    // required: false,
    // unique: false,
  },
  favouriteMovies: {
    type: Array,
    default: [],
    // required: false,
    // unique: false,
  },
  favouriteTvShows: {
    type: Array,
    default: [],
    // required: false,
    // unique: false,
  }
}, {
  timestamps: true,
  collection: 'users'
})

export default mongoose.model("User", UserSchema);
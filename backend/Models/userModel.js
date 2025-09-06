import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: { type: String, required: true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

<<<<<<< HEAD
export const User = mongoose.model('User', userSchema);
=======
export const userModel = mongoose.model('User', userSchema);
>>>>>>> b1c4c1c5dca6eace434e92e046f75c43c73f8b8f

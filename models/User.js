import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists'],
        required: [true, 'Email is required'],
    },
    username: {
        type: String,
        required: [true, 'Username is required'],
    },
    image: {
        type: String,
    },
    bookmarks: [
        {
            type: Schema.Types.ObjectId, // Referencing by the ID
            ref: 'Property', // Name of the referenced model
        }
    ],
}, {
    timestamps: true, // Auto adds createdAt and updatedAt fields
});

const User = models.User || model("User", UserSchema);

export default User;
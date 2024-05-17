import { Schema, model, models } from 'mongoose';

const MessageSchema = new Schema({
    sender: {
        type: Schema.Types.ObjectId, // Referencing by the ID
        ref: 'User', // Name of the referenced model
        required: true,
    },
    recepient: {
        type: Schema.Types.ObjectId, // Referencing by the ID
        ref: 'User', // Name of the referenced model
        required: true,
    },
    property: {
        type: Schema.Types.ObjectId, // Referencing by the ID
        ref: 'Property', // Name of the referenced model
        required: true,
    },
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
    },
    phone: {
        type: String,
    },
    body: {
        type: String,
    },
    read: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true, // Auto adds createdAt and updatedAt fields
});

const Message = models.Message || model("Message", MessageSchema);

export default Message;
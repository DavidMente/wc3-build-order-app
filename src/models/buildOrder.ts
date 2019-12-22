import mongoose, {Schema} from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';
import crypto from 'crypto';
import {ActionCode, Race} from '../client/src/store/common/types';

const actionSchema: Schema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    indentation: {
        type: Number,
        default: 0,
        min: 0,
        max: 3,
    },
    actionCode: {
        type: String,
        enum: Object.values(ActionCode),
        required: true,
    },
    description: {
        type: String,
        maxlength: 500,
        trim: true,
    },
});

const buildOrderSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 100,
        trim: true,
        unique: true,
    },
    author: {
        type: String,
        maxlength: 20,
        trim: true,
    },
    description: {
        type: String,
        maxlength: 1000,
        trim: true,
    },
    race: {
        type: String,
        required: true,
        enum: Object.values(Race),
    },
    tasks: {
        type: [actionSchema],
        required: true,
    },
    password: {
        type: String,
        default: () => crypto.randomBytes(16).toString('hex'),
    },
    views: {
        type: Number,
        default: 0,
    },
});

autoIncrement.initialize(mongoose.connection);
buildOrderSchema.plugin(autoIncrement.plugin, {model: 'BuildOrder'});

export default mongoose.model('BuildOrder', buildOrderSchema);

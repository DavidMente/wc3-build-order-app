import mongoose, {Schema} from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';
import crypto from 'crypto';
import {ActionCode, Race} from '../client/src/store/common/types';
import striptags from 'striptags';

function sanitizeHtml(value: string) {
    return striptags(value);
}

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
        set: sanitizeHtml,
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
        set: sanitizeHtml,
    },
    author: {
        type: String,
        maxlength: 20,
        trim: true,
        set: sanitizeHtml,
    },
    description: {
        type: String,
        maxlength: 1000,
        trim: true,
        set: sanitizeHtml,
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
        set: sanitizeHtml,
    },
    views: {
        type: Number,
        default: 0,
    },
});

autoIncrement.initialize(mongoose.connection);
buildOrderSchema.plugin(autoIncrement.plugin, {model: 'BuildOrder'});

export default mongoose.model('BuildOrder', buildOrderSchema);

import * as mongoose from 'mongoose';

export const taskSchema = new mongoose.Schema({
    description: String,
    completef: Boolean,
})
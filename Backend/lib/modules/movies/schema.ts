import * as mongoose from 'mongoose';
import { ModificationNote } from '../common/model';

const Schema = mongoose.Schema;

const schema = new Schema({
    title: String,
    year: Number,
    date_published: String,
    genre: String,
    duration: String,
    country: String,
    language: String, 
    director: String,
    modification_notes: [ModificationNote]
});

export default mongoose.model('movies', schema);
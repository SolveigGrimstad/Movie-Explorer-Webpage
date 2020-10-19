"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const model_1 = require("../common/model");
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
    modification_notes: [model_1.ModificationNote]
});
exports.default = mongoose.model('movies', schema);

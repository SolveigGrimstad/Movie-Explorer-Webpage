"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const model_1 = require("../common/model");
const Schema = mongoose.Schema;
const schema = new Schema({
    title: String,
    year: String,
    released: String,
    duration: String,
    genre: String,
    director: String,
    actors: String,
    summary: String,
    language: String,
    country: String,
    imageUrl: String,
    rating: String,
    modification_notes: [model_1.ModificationNote],
});
exports.default = mongoose.model("movies", schema);
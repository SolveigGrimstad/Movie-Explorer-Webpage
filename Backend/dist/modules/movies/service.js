"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("./schema");
class UserService {
    filterUser(query, callback) {
        schema_1.default.findOne(query, callback);
    }
}
exports.default = UserService;

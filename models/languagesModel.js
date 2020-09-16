'use strict'
const db = require('./conn');

class LanguagesList {
    constructor(name, ranking_id) {
        this.name = name;
        this.ranking_id = ranking_id;
    }
    static async getAll() {
        try {
            const response = await db.any(`SELECT name, ranking FROM languages INNER JOIN ranking ON ranking_id = ranking.id;`);
            return response;
        } catch (error) {
            return error.message;
        }
    }
}

module.exports = LanguagesList;
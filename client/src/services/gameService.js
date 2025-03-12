import request from "../utils/request";

const baseUrl = 'http://localhost:3030/jsonstore/games';

export default {
    getAll() {
        return request.get(baseUrl);
    },
    create(gameData) {
        return request.post(baseUrl, gameData);
    }
};
import {Message, MessageWithoutId} from "./types";
import {promises as fs} from 'fs'

const filename = 'db.json';

let data:Message[] = [];

const fileDb = {
    async init() {
        try {
            const fileContents = await fs.readFile(filename);
            data = JSON.parse(fileContents.toString());
        }catch (e) {
            data = []
        }
    },
    async getItem() {
        return data;
    },

    async addItem(item:MessageWithoutId) {
        const message = {
            id: crypto.randomUUID(),
            ...item
        }
        data.push(message);
        await this.save();
        return message
    },

    async save() {
        await fs.writeFile(filename, JSON.stringify(data, null, 2))
    }
}

export default fileDb;


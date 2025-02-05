import { Client } from 'discord.js';
import { CONFIG } from '../../../config/dotenv.js';
import { UserService } from '../application/UserService.js';

export class UserController {
    constructor() {
        this.UserService = new UserService();
    }
    
    module.exports =  {
        saveUser: async (req, res) => {
            const { discodeId, pubgId } = req.body;
            await this.UserService.saveUser(discodeId, pubgId);
            res.send("사용자 등록 완료");
        }
    }
}
import { Client } from 'discord.js';
import { CONFIG } from '../config/dotenv.js';
import { User } from '../domain/discord/entity/User.js';
import { UserRepository } from '../repository/interface/UserRepository.js';

export class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    /**
     * 디스코드 커맨드를 통해 사용자를 등록
     * 
     * @param {String} discodeId : 커맨드를 입력한 디스코드 사용자의 pk여야함
     * @param {String} pubgId
     */
    async saveUser (discodeId, pubgId) {
        try {
            const user = new User(discodeId, pubgId);
            await this.userRepository.saveUser(user);
            console.log(`사용자 ${discodeId}가 저장되었습니다.`);
        } catch (error) {
            console.error("사용자 저장 실패:", error);
        }
    }
}
import { DiscordRoleRepository } from './interface/DiscordRoleRepository.js';
import { Client } from 'discord.js';
import { CONFIG } from '../config/dotenv.js';

export class DiscordRoleRepositoryImpl extends DiscordRoleRepository {
    constructor() {
        super();
        this.client = new Client();
    }

    // 디스코드 클라이언트 로그인
    async login() {
        await this.client.login(CONFIG.DISCORD_TOKEN);
    }

    // 특정 사용자에게 역할 부여
    async assignRoleToUser(userId, roleName) {
        try {
            const guild = await this.client.guilds.fetch(CONFIG.GUILD_ID);
            const member = await guild.members.fetch(userId);
            const role = guild.roles.cache.find(r => r.name === roleName);

            if (!role) {
                throw new Error(`역할 '${roleName}'을 찾을 수 없습니다.`);
            }

            await member.roles.add(role);
            console.log(`사용자 ${userId}에게 역할 ${roleName}이 부여되었습니다.`);
        } catch (error) {
            console.error("디스코드 역할 부여 실패:", error);
        }
    }
}
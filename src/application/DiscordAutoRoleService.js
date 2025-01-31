import { DiscordRoleRepositoryImpl } from '../infrastructure/DiscordRoleRepositoryImpl.js';
import { PlayerRepositoryImpl } from '../domain/player/repository/PlayerRepositoryImpl.js'

class DiscordRoleService {
    constructor() {
        this.discordRoleRepository = new DiscordRoleRepositoryImpl();
        this.playerRepository = new PlayerRepositoryImpl();
    }

    // 랭킹에 따라 디스코드 역할 부여
    async assignRolesBasedOnRank() {
        const topPlayers = await this.playerRepository.getTopRankedPlayers(20);
        
        // 상위 20명에 대해 역할 부여
        for (let player of topPlayers) {
            let roleName = `Rank ${player.rank}`;
            await this.discordRoleRepository.assignRoleToUser(player.id, roleName);
        }
    }
}

export default DiscordRoleService;
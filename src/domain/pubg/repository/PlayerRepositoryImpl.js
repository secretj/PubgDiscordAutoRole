import { PlayerRepository } from './interface/PlayerRepository.js';
import { getPlayerStats } from '../../../infrastructure/pubgApi.js';
import { Player } from '../entity/Player.js';

export class PlayerRepositoryImpl extends PlayerRepository {
    async getTopRankedPlayers(limit) {
        const savedUsers = db.findUsers();
        for (let user of savedUsers) {
            const player = await getPlayerStats(user.name);
            await savePlayer(player);
        }
        getPlayerStats();
        // (임시 데이터) 실제로는 API 호출 결과를 가공해서 저장해야 함
        return [
            new Player("S3XYJIN", 1),
            new Player("PlayerB", 2)
        ].slice(0, limit);
    }
}
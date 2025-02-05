import { PlayerRepository } from '../domain/player/repository/PlayerRepository.js';
import { getPlayerStats } from './pubgApi.js';
import { Player } from '../domain/player/entity/Player.js';


export class PubgService {
    /**
     * 등록된 사용자 중에 pubg api 통신을 통해 상위 등수를 가져옴
     * 
     * @param {Array} users : User 엔티티의 모임 (등록된 사용자들)
     * @param {string} platform : 플랫폼 (steam | kakao)
     * @param {number} limit : 상위 몇 명을 가져올지
     * @returns {Array} players : Player 엔티티의 모임 (등록된 사용자 중 상위 10명)
     */
    async getTopRankedPlayers(users, platform = steam, limit = 10) {

        // playRepository에서 player 정보를 가져옴
        
        // 랭킹을 score로 정렬하여 return


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
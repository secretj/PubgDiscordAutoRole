export class PlayerRepository {
    async getTopRankedPlayers(limit) {
        throw new Error("getTopRankedPlayers must be implemented");
    }

    async getSavedPlayers() {
        throw new Error("getSavedPlayers must be implemented");
    }

    async savePlayer(player) {
        throw new Error("savePlayer must be implemented");
    }
}
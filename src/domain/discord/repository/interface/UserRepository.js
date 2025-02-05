export class UserRepository {

    async getUsers() {
        throw new Error("getSavedUsers must be implemented");
    }
    
    async saveUser(userId, pubgId) {
        throw new Error("saveUser must be implemented");
    }
}
import { UserRepository } from './interface/UserRepository.js';

export class UserRepositoryImpl extends UserRepository {

    constructor() {
        this.userdb = db.connect();
    }
    
    /**
     * 등록된 사용자 목록 조회
     * @param {number} limit 
     */
    async getUsers(limit = 10) {
        
    }
    
    async saveUser(userId, pubgId) {
        throw new Error("saveUser must be implemented");
    }
}
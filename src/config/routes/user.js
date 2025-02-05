import express from "express";

import { getUser, saveUser, deleteUser} from "../controllers/users.js";

//라우터 생성
const router = express.Router();

// 사용자 조회
router.get('/:id', getUser);

// 사용자 등록/변경
router.post('/', saveUser);

// 사용자 삭제
router.delete('/:id', deleteUser);

export default router;
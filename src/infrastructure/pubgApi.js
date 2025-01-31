import fetch from 'node-fetch';
import { CONFIG } from '../config/dotenv.js';

const PLATFORM = 'steam';

export async function getPlayerStats(playerName, platform) {
    const url = `https://api.pubg.com/shards/${PLATFORM}/players?filter[playerNames]=${playerName}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${CONFIG.PUBG_API_KEY}`,
                'Accept': 'application/vnd.api+json'
            }
        });

        if (!response.ok) {
            throw new Error(`API 요청 실패: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('PUBG API 호출 오류:', error);
        return null;
    }
}
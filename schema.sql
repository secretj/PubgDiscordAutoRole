CREATE TABLE users (
    ->     seq INT AUTO_INCREMENT PRIMARY KEY,
    ->     discordId VARCHAR(100) UNIQUE NOT NULL,
    ->     pubgId VARCHAR(50) UNIQUE NOT NULL,
    ->     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    -> );
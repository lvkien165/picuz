import fs from "fs";
import path from "path";

// Đường dẫn đến games.ts
const gamesFilePath = path.resolve("src/data/games.ts");

// Đọc file
let content = fs.readFileSync(gamesFilePath, "utf-8");

// Tìm phần mảng games
const match = content.match(/export const games: Game\[] = (\[.*\]);/s);
if (!match) {
    console.error("Không tìm thấy mảng games trong file.");
    process.exit(1);
}

let games = eval(match[1]); // ⚠️ Dùng eval vì dữ liệu là literal object

// Hàm shuffle
function shuffleArray(array) {
    return array
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map((obj) => obj.value);
}

// Shuffle và gán lại id
games = shuffleArray(games).map((game, index) => ({
    ...game,
    id: index + 1,
}));

// Tạo lại nội dung file
const newContent = `export interface Game {
    id: number;
    title: string;
    slug: string;
    imageUrl: string;
    category: string;
    iframeGameUrl?: string;
}

export const games: Game[] = ${JSON.stringify(games, null, 4)};
`;

fs.writeFileSync(gamesFilePath, newContent, "utf-8");
console.log("✅ Đã shuffle và cập nhật file games.ts thành công!");

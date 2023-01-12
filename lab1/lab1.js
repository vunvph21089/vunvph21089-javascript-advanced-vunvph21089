const game = {
    team1: {
        name: "Bayern Munich",
        playersTeam1: {
            thuMon: "Linh",
            tienVe: ["Hoàng", "Vụ", "Oanh"],
            hauVe: ["Ninh", "Hoàn", "Vu", "Anh"],
            tienDao: ["Mi", "Phương", "Loan"]
        }
    },
    team2: {
        name: "Real Madrid",
        playersTeam2: {
            thuMon: "LinhVu",
            tienVe: ["HoàngNgu", "VụOc", "OanhGa"],
            hauVe: ["NinhNgu", "HoànVu", "VuTruong", "AnhZai"],
            tienDao: ["MiFuong", "PhươngTran", "LoanLee"]
        }
    },
    odds: {
        team1: 3.5,
        draw: 3.0,
        team2: 2.5
    },
    goals: {
        team1: [
            { player: "Hoàng", time: 20 },
            { player: "Phương", time: 75 },
        ],
        team2: [
            { player: "NinhNgu", time: 50 },
            { player: "AnhZai", time: 80 },
            { player: "PhươngTran", time: 90 }
        ]
    }
    
};

// . Tạo 2 mảng cầu thủ cho mỗi đội
const team1Players = [game.team1.playersTeam1.thuMon, ...game.team1.playersTeam1.tienVe, ...game.team1.playersTeam1.hauVe, ...game.team1.playersTeam1.tienDao];
const team2Players = [game.team2.playersTeam2.thuMon, ...game.team2.playersTeam2.tienVe, ...game.team2.playersTeam2.hauVe, ...game.team2.playersTeam2.tienDao]

// 3. Tạo mảng 'allPlayers' chứa tất cả các cầu thủ trên sân
const allPlayers = [...team1Players, ...team2Players];

// 4. Tạo mảng 'players1Final' chứa cầu thủ ban đầu của Bayern Munich và 3 cầu thủ thay thế
const players1Final = [...team1Players, "Thiago", "Coutinho", "Perisic"];

// 5. Tạo 3 biến tỉ lệ kết quả trận đấu
const { team1, draw, team2 } = game.odds;

// 6. Viết hàm in ra tên các cầu thủ đã ghi bàn và số bàn họ đã ghi
function printGoals() {
    game.goals.team1.forEach((item) => {
        console.log(`Bayern Munich:Cầu thủ ${item.player} đã ghi bàn lúc ${item.time} phút !`)
    })
    game.goals.team2.forEach((item) => {
        console.log(`Real Madrid:Cầu thủ ${item.player} đã ghi bàn lúc ${item.time} phút !`)
    })
}
printGoals();
// 7. In ra đội chiến thắng không sử dụng if/else hoặc toán tử 3 ngôi
const winningTeam = Math.min(team1, team2) < draw ? (team1 < team2 ? "Bayern Munich" : "Real Madrid") : "Hòa";
console.log(`Kết quả: ${winningTeam}!!!`);

//Bài 2:
console.log("Bài 2:")
console.log("Bayern Munich:")
function printGoals1() {
    game.goals.team1.forEach((item, index) => {
        for (let i = 0; i < game.goals.team1.length; i++) {
            console.log(`Goal ${index + 1}: ${item.player}`);
        }
    })
}


printGoals1()
console.log("Real Madrid:")
function printGoals2() {
    game.goals.team2.forEach((item, index) => {

        for (let i = 0; i < game.goals.team2.length; i++) {
            console.log(`Goal ${index + 1}: ${item.player}`);
        }
    })
}
printGoals2()
console.log('Kết quả trận đấu:')







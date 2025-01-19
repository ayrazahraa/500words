function updateLeaderboard(playerName, score) {
    let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    leaderboard.push({ playerName, score });
    leaderboard.sort((a, b) => b.score - a.score);
    leaderboard = leaderboard.slice(0, 10); // Top 10
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));

    console.log("Leaderboard:", leaderboard);
}

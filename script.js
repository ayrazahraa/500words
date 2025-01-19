const images = [
    "cat.png",
    "dog.png",
    "lion.png",
    "tiger.png",
    "cat.png",
    "dog.png",
    "lion.png",
    "tiger.png",
]; // Match pairs

// Shuffle images
images.sort(() => Math.random() - 0.5);

const gameBoard = document.getElementById("game-board");
let flippedCards = [];
let matchedPairs = 0;

// Create cards
images.forEach((image, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.image = image;

    const img = document.createElement("img");
    img.src = `assets/images/${image}`;
    card.appendChild(img);

    card.addEventListener("click", () => {
        if (card.classList.contains("flipped") || flippedCards.length === 2) return;

        card.classList.add("flipped");
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            const [card1, card2] = flippedCards;
            if (card1.dataset.image === card2.dataset.image) {
                matchedPairs++;
                flippedCards = [];

                // Check for win
                if (matchedPairs === images.length / 2) {
                    setTimeout(() => alert("You Win!"), 500);
                }
            } else {
                setTimeout(() => {
                    card1.classList.remove("flipped");
                    card2.classList.remove("flipped");
                    flippedCards = [];
                }, 1000);
            }
        }
    });

    gameBoard.appendChild(card);
});

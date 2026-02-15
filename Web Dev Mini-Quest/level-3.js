let currentLevel = 1;
const MAX_LEVEL = 6;

const levelMessages = [
    "Applying html and bootstrap to create a simple webpage.",
    "Nice! You reached Level 2. Keep going!",
    "Level 3 unlocked! You're halfway there.",
    "Level 4 — things are getting serious!",
    "Level 5 — almost at the top!",
    " MAX LEVEL reached!"
];

function levelUp() {
    if (currentLevel >= MAX_LEVEL) return;

    currentLevel++;

    
    document.getElementById("levelBadge").textContent = "Level " + currentLevel;

    
    document.getElementById("levelText").textContent = levelMessages[currentLevel - 1];

    
    if (currentLevel === MAX_LEVEL) {
        const btn = document.getElementById("levelUpBtn");
        btn.disabled = true;
        btn.textContent = "✅ Max Level!";
    }
}

// Name submission
function submitName() {
    const input = document.getElementById("nameInput").value.trim();
    const message = document.getElementById("message");

    if (input === "") {
        
        message.textContent = "❌ Please enter your name!";
        message.style.color = "red";
        message.style.display = "block";
    } else {
        
        message.textContent = "✅ Welcome, " + input + "!";
        message.style.color = "lightgreen";
        message.style.display = "block";
    }
}

// coin counter
let coins = 0;

function addCoin() {
    coins++;
    document.getElementById("coinCount").textContent = coins;
}

function removeCoin() {
    if (coins > 0) {
        coins--;
        document.getElementById("coinCount").textContent = coins;
    }
}

// doors
const correctDoor = Math.floor(Math.random() * 3) + 1;

function chooseDoor(door) {
    const result = document.getElementById("result" + door);
    const btn = document.getElementById("door" + door);

    if (door === correctDoor) {
        
        result.textContent = "🎉 Prize!";
        result.style.color = "lightgreen";
        result.style.display = "block";
        btn.disabled = true;
        btn.textContent = "🏆 Door " + door;

        document.getElementById("restartBtn").style.display = "inline-block";
    } else {
  
        result.textContent = "❌ Empty!";
        result.style.color = "red";
        result.style.display = "block";
        btn.disabled = true;
        btn.textContent = "🚫 Door " + door;
    }
}

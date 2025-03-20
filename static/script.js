// 🎯 Get canvas and context
const canvas = document.getElementById("aircraftCanvas");
const ctx = canvas.getContext("2d");

const aircraftImage = new Image();
aircraftImage.src = "/static/images/airplane.png"; // ✅ Correct path to the image

let aircrafts = [];

// ✅ Check if the image loads properly
aircraftImage.onload = () => {
    console.log("✅ Airplane image loaded successfully!");
};
aircraftImage.onerror = () => {
    console.error("❌ Error loading airplane image. Check path or file name!");
};

// 🎯 Generate random aircraft positions
function generateAircrafts() {
    console.log("✅ Generating Aircraft...");
    aircrafts = [];
    for (let i = 0; i < 10; i++) {
        let x = Math.floor(Math.random() * 400) + 50; // Random X between 50 and 450
        let y = Math.floor(Math.random() * 400) + 50; // Random Y between 50 and 450
        aircrafts.push({ x, y, id: `A${i + 1}` }); // Add aircraft with id A1, A2, ...
    }
    drawAircrafts();
}

// ✈️ Draw aircrafts on the canvas
function drawAircrafts() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas before drawing

    aircrafts.forEach((aircraft) => {
        ctx.drawImage(aircraftImage, aircraft.x - 12, aircraft.y - 12, 24, 24); // Draw aircraft
        ctx.fillStyle = "#ffcc00";
        ctx.font = "12px Arial";
        ctx.fillText(aircraft.id, aircraft.x + 10, aircraft.y + 5); // Label the aircraft
    });
}

// 📏 Calculate distance between two points
function distance(p1, p2) {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)); // Euclidean distance
}

// 🔍 Find the closest pair using brute-force
function findClosestPair() {
    if (aircrafts.length < 2) {
        alert("⚠️ Need at least two aircraft to calculate distance!");
        return;
    }

    let minDist = Infinity;
    let closest = null;

    // Brute-force comparison to check all possible pairs
    for (let i = 0; i < aircrafts.length; i++) {
        for (let j = i + 1; j < aircrafts.length; j++) {
            let d = distance(aircrafts[i], aircrafts[j]);
            if (d < minDist) {
                minDist = d;
                closest = [aircrafts[i], aircrafts[j]];
            }
        }
    }

    drawAircrafts();
    drawClosestPair(closest);

    // ✅ Update info box
    document.getElementById("closestPair").innerText = `${closest[0].id} & ${closest[1].id}`;
    document.getElementById("minDistance").innerText = minDist.toFixed(2);

    // 🚀 Send distance to AI and get prediction
    sendDistanceToAI(minDist.toFixed(2));
}

// 🎯 Draw the closest pair line
function drawClosestPair(pair) {
    ctx.beginPath();
    ctx.moveTo(pair[0].x, pair[0].y);
    ctx.lineTo(pair[1].x, pair[1].y);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;
    ctx.stroke();
}

// 🚀 Send distance to AI backend
function sendDistanceToAI(distance) {
    console.log(`📡 Sending distance (${distance}) to AI for prediction...`);
    fetch("/predict", {
        method: "POST",
        body: JSON.stringify({ distance: parseFloat(distance) }),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("✅ AI Prediction:", data.status);
            updateAIResult(data.status);
        })
        .catch((error) => {
            console.error("❌ Error while sending distance to AI:", error);
        });
}

// 🔥 Update AI result in the UI
function updateAIResult(result) {
    document.querySelector("#aiResultBox p").innerText = `AI Prediction: ${result}`;
}

// 🎮 Attach button listeners
document.getElementById("generateBtn").addEventListener("click", generateAircrafts);
document.getElementById("findBtn").addEventListener("click", findClosestPair);


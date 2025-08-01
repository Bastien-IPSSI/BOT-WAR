let manualMode = false;
let manualMove = {
    move: "UP",
    action: "COLLECT"
};

export function setManualMove(move, action) {
    manualMove = { move, action };
    manualMode = true;
}

export function disableManualMode() {
    manualMode = false;
}


function defaultMove() {
    const directions = ["UP", "DOWN", "LEFT", "RIGHT"];

    const move = directions[Math.floor(Math.random() * directions.length)];
    return {
        move,
        action: 'COLLECT'
    };
}

export function decideMove() {
    if (manualMode) {
        return manualMove;
    }
    return defaultMove();
}


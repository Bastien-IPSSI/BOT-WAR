export function decideMove(gameState) {
    const { you, points, megaPoint } = gameState;

    const target = points.length > 0 ? points[0] : megaPoint;

    const dx = target.x - you.x;
    const dy = target.y - you.y;

    let move = 'UP';

    if (Math.abs(dx) > Math.abs(dy)) {
        move = dx > 0 ? 'RIGHT' : 'LEFT';
    } else if (dy !== 0) {
        move = dy > 0 ? 'DOWN' : 'UP';
    }

    return {
        move,
        action: 'COLLECT'
    };
}

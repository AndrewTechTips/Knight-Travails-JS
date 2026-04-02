
// check if the move is valid (within the limits of the table)

function isValidMove(x, y) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
}

function knightMoves(start, end) {
    // the 8 possible moves

    const possibleMoves = [
        [2, 1], [1, 2], [-1, 2], [-2, 1],
        [-2, -1], [-1, -2], [1, -2], [2, -1]
    ];

    let queue = [ [start, [start]]];

    let visited = new Set();
    visited.add(start.toString());

    while (queue.length > 0) {
        let currentItem = queue.shift();
        let currentPosition = currentItem[0];
        let path = currentItem[1];

        let currentX = currentPosition[0];
        let currentY = currentPosition[1];

        // stop the search , and print the result, if we are at the end

        if (currentX === end[0] && currentY === end[1]) {
            console.log(`=> You made it in ${path.length - 1} moves!  Here's your path: `);
            path.forEach(square => console.log(`    [${square[0]},${square[1]}]`));
            return path;
        }
        
        // generate the next possible moves

        for (let move of possibleMoves) {
            let nextX = currentX + move[0];
            let nextY = currentY + move[1];
            let nextPosition = [nextX, nextY];

            // check if the move is valid 
            if (isValidMove(nextX, nextY)) {
                // check if the square is visited
                if (!visited.has(nextPosition.toString())) {
                    visited.add(nextPosition.toString());
                    
                    let newPath = [...path, nextPosition];
                    queue.push([nextPosition, newPath]);

                }
            }
        }
    }
}

console.log("Test 1: From [0,0] to [1,2]");
knightMoves([0, 0], [1, 2]);
console.log("------------------------");

console.log("Test 2: From [3,3] to [4,3]");
knightMoves([3, 3], [4, 3]);
console.log("------------------------");

console.log("Test 3: From [0,0] to [7,7] (Long route)");
knightMoves([0, 0], [7, 7]);
console.log("------------------------");

console.log("Test 4: Same position (0 moves)");
knightMoves([3, 3], [3, 3]);



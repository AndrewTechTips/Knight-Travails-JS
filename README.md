<div align="center">

  <h1>♞ Knight's Travails</h1>

  <p>
    Given any two squares on a chessboard, find the <strong>shortest path</strong> a knight can take to get there.<br />
    Built using <strong>Breadth-First Search (BFS)</strong> to guarantee the minimum number of moves.
  </p>

  <p>
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
    <img src="https://img.shields.io/badge/Algorithm-BFS-blue?style=for-the-badge" alt="BFS" />
    <img src="https://img.shields.io/badge/Data%20Structures-Queue%20%2B%20Set-orange?style=for-the-badge" alt="Queue + Set" />
  </p>

</div>

<br />

---

## 🧠 How It Works

The chessboard is treated as a **graph** — every square is a node, and a knight's 8 possible L-shaped moves are the edges. BFS explores squares level by level, so the first time the destination is reached, it's guaranteed to be via the shortest path.

Each item in the queue stores both the **current position** and the **full path taken** to get there, so the route can be printed directly when the destination is found.

```javascript
function knightMoves(start, end) {
    const possibleMoves = [
        [2, 1], [1, 2], [-1, 2], [-2, 1],
        [-2, -1], [-1, -2], [1, -2], [2, -1]
    ];

    let queue = [ [start, [start]] ];   // [position, pathSoFar]
    let visited = new Set();
    visited.add(start.toString());

    while (queue.length > 0) {
        let [currentPosition, path] = queue.shift();

        if (currentPosition[0] === end[0] && currentPosition[1] === end[1]) {
            console.log(`=> You made it in ${path.length - 1} moves!`);
            path.forEach(square => console.log(`    [${square}]`));
            return path;
        }

        for (let move of possibleMoves) {
            let next = [currentPosition[0] + move[0], currentPosition[1] + move[1]];
            if (isValidMove(...next) && !visited.has(next.toString())) {
                visited.add(next.toString());
                queue.push([next, [...path, next]]);
            }
        }
    }
}
```

A `visited` Set prevents revisiting squares, keeping the search efficient across the 8×8 grid.

---

## 💻 Example Output

```
Test 1: From [0,0] to [1,2]
=> You made it in 1 moves!  Here's your path:
    [0,0]
    [1,2]
------------------------
Test 3: From [0,0] to [7,7] (Long route)
=> You made it in 6 moves!  Here's your path:
    [0,0]
    [1,2]
    [2,4]
    [3,6]
    [4,4]
    [6,5]
    [7,7]
```

---

## 📁 Project Structure

```
Knights-Travails/
├── knights-travails.js   # BFS logic + 4 test cases
└── README.md
```

---

## 🚀 Getting Started

1. **Clone the repository:**
    ```bash
    git clone https://github.com/AndrewTechTips/Knights-Travails.git
    cd Knights-Travails
    ```

2. **Run the file:**
    ```bash
    node knights-travails.js
    ```

---

## 📬 Contact

* **LinkedIn:** [Andrei Condrea](https://www.linkedin.com/in/andrei-condrea-b32148346)
* **Email:** condrea.andrey777@gmail.com

<p align="center">
  <i>"The knight doesn't move in straight lines — and neither does learning." ♞</i>
</p>
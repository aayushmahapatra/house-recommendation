import React, { useState } from 'react';

function HousingLayoutCreation() {
    const [grid, setGrid] = useState([]);
    const [m, setM] = useState(0);
    const [n, setN] = useState(0);

    // Function to create the grid dynamically based on the dimensions entered by the user
    const createGrid = () => {
        const newGrid = [];
        for (let i = 0; i < m; i++) {
            const row = [];
            for (let j = 0; j < n; j++) {
                row.push(null);
            }
            newGrid.push(row);
        }
        setGrid(newGrid);
    };

    // Function to assign the selected option to the grid cell
    const assignOption = (rowIndex, colIndex, option) => {
        const newGrid = [...grid];
        newGrid[rowIndex][colIndex] = option;
        setGrid(newGrid);
    };

    // Function to render the grid with options to assign House, Restaurant, Gym, and Hospital
    const renderGrid = () => {
        return grid.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
                {row.map((cell, colIndex) => (
                    <div key={colIndex} className="cell">
                        <span>{cell}</span>
                        <div className="options">
                            {cell === 'House' && (
                                <input type="text" placeholder="Enter House label" />
                            )}
                            <button onClick={() => assignOption(rowIndex, colIndex, 'House')}>
                                House
                            </button>
                            <button onClick={() => assignOption(rowIndex, colIndex, 'Restaurant')}>
                                Restaurant
                            </button>
                            <button onClick={() => assignOption(rowIndex, colIndex, 'Gym')}>
                                Gym
                            </button>
                            <button onClick={() => assignOption(rowIndex, colIndex, 'Hospital')}>
                                Hospital
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        ));
    };
    const width = 5; // Width of each column

    for (let i = 0; i < m; i++) {
        let row = '';
        for (let j = 0; j < n; j++) {
            // Add element to row with fixed width
            row += grid[i][j]?.toString().padEnd(width, ' ');
        }
        console.log(row);
    }

    return (
        <div className="housing-layout-creation">
            <div className="form">
                <label>
                    M:
                    <input type="number" value={m} onChange={(e) => setM(e.target.value)} />
                </label>
                <label>
                    N:
                    <input type="number" value={n} onChange={(e) => setN(e.target.value)} />
                </label>
                <button onClick={createGrid}>Create Layout</button>
            </div>

            {grid.length > 0 && (
                <div className="grid">
                    {renderGrid()}
                </div>
            )}
        </div>
    );
}

export default HousingLayoutCreation;

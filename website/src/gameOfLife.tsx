import { useEffect, useState, useRef } from 'react';
import Layout from "./navigation"

export default function GameOfLife(){
    //const [grid, setGrid] = useState([[0,0,0], [1,1,1], [0,0,1]])
    const n_rows = 50;
    const n_cols = 50;
    const [grid, setGrid] = useState(getRandomGrid(n_rows, n_cols));
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if(!isRunning) return;

        const intervalID = window.setInterval(() => {
            setGrid((grid) => getUpdatedGrid(grid));

        }, 1000);

        return () => window.clearInterval(intervalID);
    }, [isRunning]);

    function randInt(lo: number, hi: number): number { return Math.floor(Math.random()*(hi-lo+1))+lo; }

    function getRandomGrid(n_rows: number, n_cols: number): number [][] {
        //const n_rows = grid.length();
        //const n_cols = grid[0].length();

        let new_grid: number[][] = [];

        for (let i=0; i < n_rows; i++){
            new_grid[i] = []
            for (let j=0; j<n_cols; j++){
                new_grid[i][j] = randInt(0, 1);
            }
        }
        return new_grid;
    }

    function getUpdatedGrid(grid): number [][] {
        const new_grid = grid.map(row => [...row]);
        let modifiers = [ [-1, 0], [-1,-1], [0, -1], [+1, -1], [+1, 0], [+1, +1], [0, +1], [-1, +1] ]

        for (let i=0; i<grid.length; i++){
            for (let j=0; j < grid[i].length; j++){

                // Determine the number of neighburs
                let n_neighbours = 0;
                modifiers.forEach(pair => {
                    try {
                        if (grid[i+pair[0]][j+pair[1]] == 1){ n_neighbours += 1}
                    }
                    catch {
                        // console.log("Ventured outside the grid")
                    }
                });

                //console.log("N neughbours is " + n_neighbours)

                // Assign life or death based on number of neighbours
                if (grid[i][j] == 1 && n_neighbours < 2) { new_grid[i][j] = 0 }
                else if (grid[i][j] == 1 && n_neighbours in [2,3]) { new_grid[i][j] = 1 }
                else if (grid[i][j] == 1 && n_neighbours > 3) { new_grid[i][j] = 0 }
                else if (grid[i][j] == 0 && n_neighbours == 3) { new_grid[i][j] = 1 }
            }
        }

        return new_grid;
    }

    function flipCell(row: number, col: number){
        const new_grid = grid.map(row => [...row]);

        new_grid[row][col] = new_grid[row][col] == 1 ? 0 : 1;

        setGrid(new_grid);
    }

    function getClearGrid(): number [][] {
        const new_grid = grid.map(row => [...row]);

        for (let i=0; i<grid.length; i++){
            for (let j=0; j<grid[i].length; j++){
                new_grid[i][j] = 0;
            }
        }

        return new_grid;
    }

    function count_alive_cells(grid: number[][]): number{
        return grid.flat(2).reduce((partialSum, number) => partialSum + number, 0)
    }

    return (
        <Layout>
            <div>
                <div>
                    <p>Number of alive cells: {count_alive_cells(grid)}</p>
                    
                    <button className='bg-yellow border' onClick={() => setGrid(getRandomGrid(n_rows, n_cols))}>Re-initialize grid</button>

                    <br/>

                    <button className='bg-yellow border' onClick={() => setGrid(getUpdatedGrid(grid))}>Update</button>

                    <br/>

                    <button className='bg-yellow border' onClick={() => setGrid(getClearGrid())}>Clear</button>

                    <br/>

                    <button className='bg-yellow border' onClick={() => setIsRunning(!isRunning)}>{isRunning ? "Stop" : "Start"}</button>
                </div>

                <div className="bg-white flex flex-col p-1 max-w-md mx-auto">
                    {grid.map((row, rowIndex) =>
                        <div key={rowIndex} className="flex justify-between">
                            {row.map((cell, celIndex) =>
                                <div key={celIndex} onClick={() => flipCell(rowIndex, celIndex)} className="flex-1 flex justify-center aspect-square" style={{backgroundColor: cell ? "yellow" : "black"}}>
                                    
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    )
}



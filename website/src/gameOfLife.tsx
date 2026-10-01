import { useEffect, useState, useRef } from 'react';
import Layout from "./navigation"

export default function GameOfLife(){
    //const [grid, setGrid] = useState([[0,0,0], [1,1,1], [0,0,1]])
    const n_rows = 30;
    const n_cols = 30;
    const [grid, setGrid] = useState(InitializeGrid(n_rows, n_cols));

    const updateRef = useRef(Update_Grid);

    useEffect(() => {
        updateRef.current = Update_Grid;
    });

    useEffect(() => {
        const interval = setInterval(() => {updateRef.current();}, 200);
        
        return () => clearInterval(interval);
    }, []);

    function randInt(lo, hi) { return Math.floor(Math.random()*(hi-lo+1))+lo; }

    function InitializeGrid(n_rows, n_cols){

        let grid = [];

        for (let i=0; i < n_rows; i++){
            grid[i] = []
            for (let j=0; j<n_cols; j++){
                grid[i][j] = randInt(0, 1);
            }
        }
        return grid;
    }

    function Update_Grid(){
        const new_grid = grid.map(row => [...row]);

        //console.log("Updating!")

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

        // Update the old grid
        //console.log(new_grid)
        setGrid(new_grid)
    }

    function count_alive_cells(grid){
        return grid.flat(Infinity).reduce((partialSum, number) => partialSum + number, 0)
    }

    return (
        <Layout>
            <div>
                <div>
                    <p>Number of alive cells: {count_alive_cells(grid)}</p>
                    
                    <button className='bg-yellow border' onClick={() => setGrid(InitializeGrid(n_rows, n_cols))}>Re-initialize grid</button>
                </div>

                <div className="flex flex-col p-4 max-w-md mx-auto">
                    {grid.map((row, rowIndex) =>
                        <div key={rowIndex} className="flex justify-between">
                            {row.map((cell, celIndex) =>
                                <div key={celIndex} className="flex-1 flex justify-center aspect-square" style={{backgroundColor: cell ? "yellow" : "black"}}>
                                    
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    )
}



import Layout from "./navigation"
import { useEffect, useState } from "react";

export default function Algorithms() {
    const [isActive, setisActive] = useState(false);
    const [currentArray, setCurrentArray] = useState([1,3,2]); //[1,7,9,2,5,1,0,4,2]

    function RandomSort<T>(array: T[]): T[] {
        const result = [...array]; // avoid mutating original
        for (let i = result.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [result[i], result[j]] = [result[j], result[i]];
        }

        // Check if sorted
        if (isSorted(result)) {
            setisActive(false);
        }

        return result;
    }

    useEffect(() => {
        if (!isActive) return;

        const interval = setInterval(() => {
            console.log("Running process because state is Active");
            setCurrentArray(RandomSort(currentArray));
        }, 1000);

        return () => clearInterval(interval);
    }, [isActive]);


    return (
        <Layout>
            <div>
                {/* Controls */}
                <button className="border" onClick={() => setisActive(!isActive)}>{isActive ? "Stop" : "Start"}</button>

                <div className="flex space-x-1 p-3">
                    {currentArray.map(number => 
                        <div className="border p-3">{number}</div>
                    )}
                </div>



                {/* Visualisation */}
            </div>
        </Layout>
    )
}

function isSorted<T>(array: T[]): boolean {
    for (let i=0; i < array.length-1; i++){
        if (array[i] > array[i+1]){
            console.log(`Array ${array} is NOT sorted.`)
            return(false);
        }
    }
    return(true);
}
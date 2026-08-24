import Layout from "./navigation"
import { useEffect, useState } from "react";

export default function Algorithms() {
    const [isActive, setisActive] = useState(false);
    const [currentArray, setCurrentArray] = useState([1,7,9,2,5,1,0,4,2]); //[1,7,9,2,5,1,0,4,2]
    const [currentAlgorithm, setAlgorithm] = useState("Bubble Sort");

    function BogoSort<T>(array: T[]): T[] {
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

    function BubbleSort<T>(array: T[]): T[] {
        const result = [...array]; // avoid mutating original

        for (let i=0; i<result.length-1; i++){
            if (result[i] > result[i+1]){
                let carry = result[i];
                result[i] = result[i+1];
                result[i+1] = carry;

                // break; // Enabled this makes the animation way prettier
            }
        }

        // Check if sorted
        if (isSorted(result)) {
            setisActive(false);
        }

        return result;
    }

    function SortWithAlgorithm<T>(array: T[], algorithm: string): T[]{
        if (algorithm == "BogoSort"){
            return BogoSort(array);
        } else if (algorithm == "Bubble Sort") {
            return BubbleSort(array);
        } else {
            throw Error("An algorithm has to be specified!");
        }
    }

    useEffect(() => {
        if (!isActive) return;

        const interval = setInterval(() => {
            setCurrentArray(prev => {
                const updated = SortWithAlgorithm(prev, currentAlgorithm);
                return updated;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [isActive]);

    const bgColours: Record<string, string> = {
        0: "bg-blue-000",
        1: "bg-blue-100",
        2: "bg-blue-200",
        3: "bg-blue-300",
        4: "bg-blue-400",
        5: "bg-blue-500",
        6: "bg-blue-600",
        7: "bg-blue-700",
        8: "bg-blue-800",
        9: "bg-blue-900",
    }


    return (
        <Layout>
            <div className="space-x-1">
                {/* Controls */}
                <button className="border p-2 hover:scale-105 shadow-md transition-transform duration-200" onClick={() => setisActive(!isActive)}>{isActive ? "Stop" : "Start"}</button>

                <select
                    className="ml-auto border p-2"
                    value={currentAlgorithm}
                    onChange={(e) => setAlgorithm(e.target.value)}
                    defaultValue={"BubbleSort"}
                >
                    <option value="BogoSort">BogoSort</option>
                    <option value="Bubble Sort">Bubble Sort</option>
                </select>

                <div className="flex space-x-1 p-3">
                    {currentArray.map(number => 
                        <div className={`${bgColours[number]} border p-3`}>{number}</div>
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
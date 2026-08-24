

let x = 3;





// Generate a graph based on parameters
let n_nodes = 4;


export function BubbleSortSteps(list: number[]): number[][] {
    
    let isSorted = true;

    let steps = [];

    do 
    {
        isSorted = true;
        for (let i=0; i<list.length-1; i++){
            console.log(`At element: ${i}`);

            if (list[i] > list[i+1]){
                console.log(`Switched elements ${i} and ${i+1}`);
                let carry = list[i]
                list[i] = list[i+1]
                list[i+1] = carry

                // A switch means this list is possibly not yet sorted
                isSorted = false;
            }
            // console.log(list);
            steps.push(list)
        }
    } while (!isSorted);

    return(steps);
}

BubbleSortSteps([3,2,5, 7,6,4,3,2,1,4])
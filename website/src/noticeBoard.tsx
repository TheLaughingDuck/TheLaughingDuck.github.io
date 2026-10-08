import { useEffect, useState } from 'react';
import Layout from "./navigation"

interface DataObject {
    id: Number
}

async function getData(): Promise<DataObject[]> {
    const response = await fetch("https://homepage-backend-sigma.vercel.app/get_data");
    const data: DataObject[] = await response.json();
    return data;
}

export function NoteCard(a){
    return(
        <div className='card'>
            <p>{a.id}</p>
        </div>
    )
}

export default function NoticeBoard() {
    //const data = [{"id": 1}, {"id": 2}, {"id": 3}];

    const [notes, setNotes] = useState<DataObject[]>([]);
    const [isloading, setIsLoading] = useState(true);

    useEffect(() => {
        getData().then((fetchedData) => {
            setNotes(fetchedData);
            setIsLoading(true);
        })
        .catch((error) => {
            console.error("Failed.", error);
            setIsLoading(false);
        });
    }, []);

    

    
    if (isloading) {
        return <Layout><p>Loading...</p></Layout>
    }
    

    return(
        <Layout>
            {
                notes.map((a) => (
                    <NoteCard>{a.id}</NoteCard>
                ))
            }
        </Layout>
    )
}
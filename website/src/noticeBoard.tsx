import { useEffect, useState } from 'react';
import Layout from "./navigation"

interface NoteObject {
    id: Number,
    content: String,
    author: String,
    date_created: Date
}

async function getData(): Promise<NoteObject[]> {
    const response = await fetch("https://homepage-backend-sigma.vercel.app/get_data");
    const data: NoteObject[] = await response.json();
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
    const [notes, setNotes] = useState<NoteObject[]>([]);
    const [isloading, setIsLoading] = useState(true);

    useEffect(() => {
        getData()
        .then((fetchedData) => {
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
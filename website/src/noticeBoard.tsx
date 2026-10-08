import { useEffect, useState } from 'react';
import Layout from "./navigation"

interface NoteObject {
    id: Number,
    content: String,
    author: String,
    date_created: Date
}

async function getData(): Promise<NoteObject[]> {
    const the_url = import.meta.env.VITE_BACKEND_URL;
    const response = await fetch(`${the_url}/get_data`);
    const data: NoteObject[] = await response.json();
    return data;
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
                    <div className="bg-yellow-200 m-2 p-2 max-w-sm shadow-md transition-transform duration-200 hover:scale-105 hover:shadow-xl">
                        {a.content}<br/>- {a.author}
                    </div>
                ))
            }
        </Layout>
    )
}
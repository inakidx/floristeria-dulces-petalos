import React, { useEffect, useState } from 'react';
import ImageListView from './ImageListView';

const FlowerStock = () => {
    const [flowerList, setData] = useState<Flower[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const url = 'https://dulces-petalos.herokuapp.com/api/product';
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('dulces-petalos api not working');
                }
                return response.json();
            })
            .then((data: Flower[]) => {
                console.log("traemos flores");
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        //TODO: redirect to error
        return <p>Error: {error} </p>;
    }
    return (
        <ImageListView listView={flowerList} />
    )
}

export default FlowerStock
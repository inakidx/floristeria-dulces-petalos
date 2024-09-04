import React, { useEffect, useState } from 'react';
import ImageListView from './shared/ImageListView/ImageListView';

interface FlowerStockProps {
    filter: string,
}

const FlowerStock: React.FC<FlowerStockProps> = ({ filter }) => {
    const [flowerList, setFlowerList] = useState<Flower[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    //TODO: sacar esta gestión a un componente y la llamada a la API con sus métodos a una clase para comunicarse con el negocio
    useEffect(() => {
        const url = 'https://dulces-petalos.jakala.es/api/product';
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('dulces-petalos api not working');
                }
                return response.json();
            })
            .then((data: Flower[]) => {
                setFlowerList(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        //TODO: show loading component
        return <p>Cargando...</p>;
    }
    if (error) {
        //TODO: redirect to error
        console.log(error);
        return <label>Error: No se ha podido obtenider información del servidor</label>;
    }

    return (
        <ImageListView listView={getFilteredFlowers()} />
    )

    function getFilteredFlowers(): IImageListViewItem[] {
        return flowerList.filter(f => containsIgnoringCase(f.name, filter)
            || containsIgnoringCase(f.binomialName, filter))
            .map(f => (getImageListViewItem(f)))
    }
    function containsIgnoringCase(s1: string, s2: string): boolean {
        return s1.toLowerCase().indexOf(s2.toLowerCase()) !== -1
    }
    function getImageListViewItem(f: Flower): IImageListViewItem {
        return {
            id: f.id, name: f.name, imgUrl: f.imgUrl, subName: f.binomialName, price: f.price,
            redirectUrl: `/FlowerDetail/${f.id}`
        }
    }
}

export default FlowerStock
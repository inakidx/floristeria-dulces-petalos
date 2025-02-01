import React, { useEffect, useState } from 'react';
import ImageListView from './shared/ImageListView/ImageListView';
import { flowerRepository } from './shared/FlowerRepository';
import { Flower } from '../domain/entities/Flower';

interface FlowerStockProps {
    filter: string,
}

const FlowerStock: React.FC<FlowerStockProps> = ({ filter }) => {
    const [flowerList, setFlowerList] = useState<Flower[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        flowerRepository.getAllFlowers()
            .then(flowers => {
                setFlowerList(flowers)
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
        console.log(JSON.stringify(error));
        return <label>Error: No se ha podido obtener información del servidor</label>;
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
            id: f.id, name: f.name, imgUrl: f.imgUrl, subName: f.binomialName, rightTopCornerLabel: f.price,
            redirectUrl: `/FlowerDetail/${f.id}`
        }
    }
}

export default FlowerStock
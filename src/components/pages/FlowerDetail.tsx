import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './FlowerDetail.css'

const FlowerDetail = () => {
    const { id } = useParams<{ id: string }>();
    const [flower, setFlower] = useState<Flower | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const url = `https://dulces-petalos.herokuapp.com/api/product/${id}`;
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('dulces-petalos api not working');
                }
                return response.json();
            })
            .then((data: Flower) => {
                setFlower(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        //TODO: show loading component
        return <p>Loading...</p>;
    }
    if (error) {
        //TODO: redirect to error
        return <p>Error: {error} </p>;
    }
    return (
        <div>
            {flower?.name}
            <div className='float-right'>
                <a href='/'>Back</a>
            </div>
            <div className='flower-detail-content'>
                <div className='flower-detail-image'>
                    <img src={flower?.imgUrl}></img>
                </div>
                <div className='flower-detail-description'>
                    <ul>
                        <li>Nombre: {flower?.name}</li>
                        <li>Nombre científico: {flower?.binomialName}</li>
                        <li>Tamaño: {flower?.heightInCm} cm</li>
                        <li>Regar: {flower?.wateringsPerWeek}</li>
                        <li>Precio: {flower?.price}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FlowerDetail
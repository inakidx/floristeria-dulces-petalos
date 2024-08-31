import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './FlowerDetail.css'
import BreadCrumbs from '../shared/BreadCrumbs';

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
            <BreadCrumbs breadCrumb='Home' route='/' />
            <div className='component-top'>
                <h2>{flower?.name}</h2>
                <div className='float-right'>
                    <a href='/'>Volver</a>
                </div>
            </div>
            <div className='flower-detail-content'>
                <div className='flower-detail-image'>
                    <img src={flower?.imgUrl}></img>
                </div>
                <div className='flower-detail-description'>
                    <ul>
                        <li><label><b>Nombre:</b> {flower?.name}</label></li>
                        <li><label><b>Nombre científico:</b> {flower?.binomialName}</label></li>
                        <li><label><b>Tamaño:</b> {flower?.heightInCm} cm</label></li>
                        <li><label><b>Regar:</b> {flower?.wateringsPerWeek} vez/es por semana</label></li>
                        <li><label><b>Precio:</b> {flower?.price}</label></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FlowerDetail
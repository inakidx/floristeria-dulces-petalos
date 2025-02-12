import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import './FlowerDetail.css'
import BreadCrumbs from '../../shared/BreadCrumbs';
import { flowerService } from '../../../../inversionOfControls/DependecyInyector';
import { FertilizerType, Flower, StatusType } from '../../../../domain/entities/Flower';

const FlowerDetail = () => {
    const { id } = useParams<{ id: string }>();
    const [flower, setFlower] = useState<Flower | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        flowerService.getFlowerById(id!)
            .then((flower: Flower) => {
                setFlower(flower);
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
        return <label>Error: No se ha podido obtener información del servidor</label>;
    }

    function getFertilizerTypeSpanish(fertilizerType: FertilizerType | undefined): string {
        if (fertilizerType === FertilizerType.nitrogenado) {
            return "nitrogenado"
        }
        if (fertilizerType === FertilizerType.fosforado) {
            return "fosforado"
        }
        return "desconocido";
    }

    function getStatusTypeSpanish(statusType: StatusType | undefined): string {
        if (statusType === StatusType.commingSoon) {
            return "llega en breve"
        }
        if (statusType === StatusType.outOfStock) {
            return "sin stock"
        }
        if (statusType === StatusType.new) {
            return "nuevo"
        }
        if (statusType === StatusType.default) {
            return "en tienda"
        }
        return "desconocido";
    }

    return (
        <div>
            <BreadCrumbs breadCrumb='Home' route='/' />
            <div className='component-top'>
                <h2>{flower?.name}</h2>
                <div className='float-right'>
                    <Link to='/'>Volver</Link>
                </div>
            </div>
            <div className='flower-detail-content'>
                <div className='flower-detail-image'>
                    <img alt={`foto de la flor ${flower?.name}`} src={flower?.imgUrl}></img>
                </div>
                <div className='flower-detail-description'>
                    <ul>
                        <li><label><b>Nombre:</b> {flower?.name}</label></li>
                        <li><label><b>Nombre científico:</b> {flower?.binomialName}</label></li>
                        <li><label><b>Tamaño:</b> {flower?.heightInCm} cm</label></li>
                        <li><label><b>Regar:</b> {flower?.wateringsPerWeek} vez/es por semana</label></li>
                        <li><label><b>Precio:</b> {flower?.price} €</label></li>
                        <li><label><b>Tipo de fertilizante:</b> {getFertilizerTypeSpanish(flower?.fertilizerType)}</label></li>
                        <li><label><b>Estado:</b> {getStatusTypeSpanish(flower?.status)}</label></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FlowerDetail
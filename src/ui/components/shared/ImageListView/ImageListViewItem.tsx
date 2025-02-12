
import React from 'react'
import './ImageListViewItem.css';
import { Link } from 'react-router-dom';
import IImageListViewItem from '../../../interfaces/IImageListViewItem';

interface ImageListViewItemProps {
    imageListViewItem: IImageListViewItem,
}
const ImageListViewItem: React.FC<ImageListViewItemProps> = ({ imageListViewItem }) => {
    return (
        <Link to={imageListViewItem.redirectUrl}>
            <div className='image-list-view-item zoomable'>
                <img className='image-list-view-item-bg' src={imageListViewItem.imgUrl}></img>
                <div className='image-list-view-item-right-up-corner'>
                    <label className='item-name'>{imageListViewItem.rightTopCornerLabel}€</label>
                </div>
                <div className='image-list-view-item-left-up-corner'>
                    <label className='item-name'>{imageListViewItem.leftTopCornerLabel}</label>
                </div>
                <div className='image-list-view-item-text'>
                    <label className='item-name'>{imageListViewItem.name}</label>
                    {imageListViewItem.subName &&
                        <label className='item-name'>({imageListViewItem.subName})</label>
                    }
                </div>
            </div>
        </Link>
    )
}

export default ImageListViewItem
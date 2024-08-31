
import React from 'react'
import './ImageListViewItem.css';

interface ImageListViewItemProps {
    imageListViewItem: IImageListViewItem,
}
const ImageListViewItem: React.FC<ImageListViewItemProps> = ({ imageListViewItem }) => {
    return (
        <a href={imageListViewItem.redirectUrl}>
            <div className='image-list-view-item zoomable'>
                <img className='image-list-view-item-bg' src={imageListViewItem.imgUrl}></img>
                <div className='image-list-view-item-right-up-corner'>
                    <label className='item-name'>{imageListViewItem.price}€</label>
                </div>
                <div className='image-list-view-item-text'>
                    <label className='item-name'>{imageListViewItem.name}</label>
                    {imageListViewItem.subName &&
                        <label className='item-name'>({imageListViewItem.subName})</label>
                    }
                </div>
            </div>
        </a>
    )
}

export default ImageListViewItem
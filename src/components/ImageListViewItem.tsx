
import React from 'react'
import './ImageListViewItem.css';

interface ImageListViewItemProps {
    imageListViewItem: IImageListViewItem
}
const ImageListViewItem: React.FC<ImageListViewItemProps> = ({ imageListViewItem }) => {
    return (
        <div className='image-list-view-item-content'>
            <div className='image-list-view-item-image-container'>
                <img className='image-list-view-item-bg' src={imageListViewItem.imgUrl}></img>
                <label className='item-name'>{imageListViewItem.name}</label>
            </div>
        </div>
    )
}

export default ImageListViewItem
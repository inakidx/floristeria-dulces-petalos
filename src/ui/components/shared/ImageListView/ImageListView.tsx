import React from 'react'
import ImageListViewItem from './ImageListViewItem'
import './ImageListView.css'
import IImageListViewItem from '../../../interfaces/IImageListViewItem'

interface ImageListViewProps {
  listView: IImageListViewItem[],
}
const ImageListView: React.FC<ImageListViewProps> = ({ listView }) => {
  return (
    <div className='image-list-view-content'>
      {
        listView.map((item, index) => (
          <div key={index} className='image-list-view-item-container'>
            <div className='image-list-view-item-content'>
              <ImageListViewItem key={index} imageListViewItem={item} />
            </div>
          </div>
        ))
      }
    </div >
  )
}

export default ImageListView
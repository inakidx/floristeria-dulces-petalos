import React from 'react'
import { useLocation } from 'react-router-dom';

interface ImageListViewProps {
    breadCrumb: string,
    route: string,
}
const BreadCrumbs: React.FC<ImageListViewProps> = ({ breadCrumb }) => {
    const location = useLocation();
    if (location.pathname === '/')
        return;

    return (
        <a href={'/' + breadCrumb}>{breadCrumb}</a>
    )
}

export default BreadCrumbs
import React from 'react'
import { Link } from 'react-router-dom'

interface ImageListViewProps {
    breadCrumb: string,
    route: string,
}
const BreadCrumbs: React.FC<ImageListViewProps> = ({ breadCrumb, route }) => {
    return (
        <Link to={route}>{breadCrumb}</Link>
    )
}

export default BreadCrumbs
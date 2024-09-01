import React from 'react'

interface ImageListViewProps {
    breadCrumb: string,
    route: string,
}
const BreadCrumbs: React.FC<ImageListViewProps> = ({ breadCrumb, route }) => {
    return (
        <a href={route}>{breadCrumb}</a>
    )
}

export default BreadCrumbs
import React from 'react'
import { Breadcrumb } from "react-bootstrap"
import { ROOT_FOLDER } from '../../hooks/useFolder'
import {Link} from "react-router-dom"

function FolderBreadcrumb({ currentFolder }) {
    let path = currentFolder === ROOT_FOLDER ? [] : [ROOT_FOLDER]
    if (currentFolder) path = [...path, ...currentFolder.path]

    return (
        <Breadcrumb
            className="flex-grow-1"
            listProps={{ className: "bg-white pt-4 pb-4 pl-0 m-0" }}>
            {/* previous folders */}
            {path.map(folder => (
                <Breadcrumb.Item
                    key={folder.id}
                    linkAs={Link}
                    linkProps={{
                        to: folder.id ? '/folder/'+folder.id : '/'
                    }}
                    className="text-truncate d-inline-block"
                    style={{ maxWidth: "150px" }}
                >
                    {folder.name}
                </Breadcrumb.Item>
            ))}
            {/* current folder */}
            {currentFolder && (
                <Breadcrumb.Item
                    className="text-truncate d-inline-block"
                    style={{ maxWidth: "200px" }}
                    active
                >
                    {currentFolder.name}
                </Breadcrumb.Item>
            )}
        </Breadcrumb>
    )
}

export default FolderBreadcrumb

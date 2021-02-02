import React, { useState } from 'react'
import Navbar from "./Navbar"
import { Container } from "react-bootstrap"
import AddFolderButton from "./AddFolderButton"
import AddFileButton from "./AddFileButton"
import { useFolder } from "../../hooks/useFolder"
import { useParams } from "react-router-dom"
import FolderBreadcrumb from "./FolderBreadcrumb"
import List from "./List"

function Dashboard() {
    const { folderId } = useParams()
    const { folder, childFolders, childFiles } = useFolder(folderId)

    return (
        <>
            <Navbar />
            <Container fluid>
                <div className="d-flex align-items-center">
                    <FolderBreadcrumb currentFolder={folder} />
                    <AddFileButton currentFolder={folder} />
                    <AddFolderButton currentFolder={folder} />
                </div>
                {childFolders.length > 0 &&
                    <List items={childFolders} />
                }
                {childFiles.length > 0 &&
                    <List items={childFiles} isFile />
                }
            </Container>
        </>
    )
}

export default Dashboard

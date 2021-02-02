import React, {useState} from 'react'
import Navbar from "./Navbar"
import {Container} from "react-bootstrap"
import AddFolderButton from "./AddFolderButton"
import AddFileButton from "./AddFileButton"
import List from "./List"
import {useFolder} from "../../hooks/useFolder"
import Folder from "./Folder"

function Dashboard() {

    const {folder, childFolders} = useFolder('cp2vMCRvRECHZuEGoA5U')
    console.log(childFolders)
    // const {folder} = useFolder()

    return (
        <>
            <Navbar />
            <Container fluid>
                <AddFolderButton currentFolder={folder} />
                {folder && <Folder folder={folder} />}
                {childFolders.length > 0 && 
                   <List items={childFolders} />
                }
            </Container>
        </>
    )
}

export default Dashboard

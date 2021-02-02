import React from 'react'
import { useState } from 'react'
import { Button, Modal, Form } from "react-bootstrap"
import { database } from "../../firebase"
import { useAuth } from "../../contexts/AuthContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons'
import {ROOT_FOLDER} from "../../hooks/useFolder"

function AddFolderButton({ currentFolder }) {
    const [name, setName] = useState("")
    const [modalOpen, setModalOpen] = useState(false)

    const { currentUser } = useAuth()

    function toggleModal() {
        setModalOpen(!modalOpen)
    }
    function handleSubmit(e) {
        e.preventDefault();
        const onExit = function () {
            // clear input
            setName("");
            toggleModal();
        }
        // if not inside a folder, do nothing
        if (currentFolder == null) return onExit()

        // get folder path
        const path = [...currentFolder.path]
        if (currentFolder !== ROOT_FOLDER) {
            path.push({ name: currentFolder.name, id: currentFolder.id })
        }

        // add to db
        database.folders.add({
            name: name,
            parentId: currentFolder.id,
            userId: currentUser.uid,
            path: path,
            createdAt: database.getCurrentTimestamp()
        })
        onExit()
    }

    return (
        <>
            <Button onClick={toggleModal} variant="outline-primary" size="sm">
                <FontAwesomeIcon icon={faFolderPlus} />
            </Button>
            <Modal show={modalOpen} onHide={toggleModal} centered>
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <Form.Group>
                            <Form.Label>Folder Name</Form.Label>
                            <Form.Control
                                type="text"
                                required
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={toggleModal}>
                            Close
                        </Button>
                        <Button variant="success" type="submit">
                            Add Folder
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}

export default AddFolderButton

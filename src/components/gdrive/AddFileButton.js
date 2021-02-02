import React, {useState} from 'react'
import {Button, Modal, Form} from "react-bootstrap"

function AddFileButton() {
    const [modalOpen, setModalOpen] = useState(false)

    function toggleModal(e) {
        e.preventDefault()
        setModalOpen(!modalOpen)
    }
    function handleSubmit() {}

    return (
        <>
        <Modal show={modalOpen} onHide={toggleModal} centered>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    body
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={toggleModal}>Close</Button>
                    <Button variant="success" type="submiot">Add File</Button>
                </Modal.Footer>
            </Form>
        </Modal>
        <Button onClick={toggleModal} variant="outline-success" size="sm">Add File</Button>
        </>
    )
}

export default AddFileButton

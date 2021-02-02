import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileUpload } from '@fortawesome/free-solid-svg-icons'
import {useAuth} from "../../contexts/AuthContext"
import {database, storage} from "../../firebase"
import { ROOT_FOLDER } from '../../hooks/useFolder'

function AddFileButton({currentFolder}) {
    const {currentUser} = useAuth()

    function handleUpload(e) {
        const file = e.target.files[0]
        if (currentFolder == null || file == null) return

        const parentPath = currentFolder.path.map(f => f.name).join("/")
        const filePath = currentFolder === ROOT_FOLDER
            ? `${parentPath}/${file.name}`
            : `${parentPath}/${currentFolder.name}/${file.name}`

        const storageRef = `/files/${currentUser.uid}/${filePath}`
        const uploadTask = storage
            .ref(storageRef)
            .put(file)

        uploadTask.on('state_changed', snapshot => 
        // upload is executing
        {

        // upload error
        }, () => {

        // upload finished
        }, () => {
            uploadTask.snapshot.ref.getDownloadURL().then(url => {
                console.log(url)
                database.files.add({
                    url: url,
                    name: file.name,
                    createdAt: database.getCurrentTimestamp(),
                    folderId: currentFolder.id,
                    userId: currentUser.uid
                }).then(() => {
                    console.log("upload successful")
                }, function(error) {
                    console.error(error)
                    alert(error)
                    storage.ref(storageRef).delete()
                })
            })
        })
    }

    return (
        <>

            <label className="btn btn-outline-primary btn-sm m-0 mr-2">
                <FontAwesomeIcon icon={faFileUpload} />
                <input type="file"
                    onChange={handleUpload}
                    hidden
                />
            </label>
        </>
    )
}

export default AddFileButton

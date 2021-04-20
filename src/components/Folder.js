import React from 'react';
import FolderIcon from '@material-ui/icons/Folder';
import IconButton from '@material-ui/core/IconButton';

// Just rendering folder icon and folder name
// handleFolderChange will tell App.js to change to a particular folder
const Folder = ({ folderName, handleFolderChange }) => {
    return (
    <IconButton onClick={()=>{
        handleFolderChange(folderName);
    }}>
        <FolderIcon />
        <br />
        <p>{folderName}</p>
    </IconButton>);
}

export default Folder;
import {
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle
} from '@material-ui/core';
import React from  'react';

class AddButton extends React.Component {
    constructor(props) {
        super(props);
        // isDialogOpen state is for dialog open or close
        // folderName state is for the input entered in the dialog for deleting folder name 
        this.state = {
            isDialogOpen: false,
            folderName: "",
        }
        this.handleClose = this.handleClose.bind(this)
        this.handleOpen = this.handleOpen.bind(this)
        this.handelFolderNameChange = this.handelFolderNameChange.bind(this)
        this.handleFolderDeletion = this.handleFolderDeletion.bind(this)
    }

    // handle dialog close
    handleClose () {
        this.setState({isDialogOpen: false, folderName: ""})
    }

    // handle dialog open
    handleOpen () {
        this.setState({isDialogOpen: true, folderName: ""})
    }

    // handle input change
    handelFolderNameChange (e) {
        this.setState({
            folderName: e.target.value
        })
    }

    // calling the callback that will handle folder deletion
    handleFolderDeletion () {
        this.props.handleFolderDeletion(this.state.folderName);
        this.handleClose();
    }

    render() {
        return (
            <div>
               <Dialog
                    open={this.state.isDialogOpen}
                    onClose={this.handleClose}
                >
                    <DialogTitle id="alert-dialog-title">Enter name of the folder to delete</DialogTitle>
                    <DialogContent>
                        <TextField id="outlined-basic" label="Folder Name" variant="outlined" value={this.state.folderName} onChange={this.handelFolderNameChange}/>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.handleFolderDeletion} color="primary" autoFocus>
                        Delete
                    </Button>
                    </DialogActions>
                </Dialog>
                <Button variant="contained" color="secondary" onClick={this.handleOpen}> Delete Folder</Button>
            </div>
        );
    }
}


export default AddButton;
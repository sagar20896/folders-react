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
        // folderName state is for the input entered in the dialog for new folder name 
        this.state = {
            isDialogOpen: false,
            folderName: "",
        }
        this.handleClose = this.handleClose.bind(this)
        this.handleOpen = this.handleOpen.bind(this)
        this.handelFolderNameChange = this.handelFolderNameChange.bind(this)
        this.handleFolderCreation = this.handleFolderCreation.bind(this)
    }

    // handle add folder dialog close
    handleClose () {
        this.setState({isDialogOpen: false, folderName: ""})
    }

    // handle add folder dialog open
    handleOpen () {
        this.setState({isDialogOpen: true, folderName: ""})
    }

    // handle input value change for folderName
    handelFolderNameChange (e) {
        this.setState({
            folderName: e.target.value
        })
    }

    // handle folder creation and call the callback passed
    handleFolderCreation () {
        this.props.handleFolderCreation(this.state.folderName);
        this.handleClose();
    }

    render() {
        return (
            <div>
               <Dialog
                    open={this.state.isDialogOpen}
                    onClose={this.handleClose}
                >
                    <DialogTitle id="alert-dialog-title">Enter name of the folder to add</DialogTitle>
                    <DialogContent>
                        <TextField id="outlined-basic" label="Folder Name" variant="outlined" value={this.state.folderName} onChange={this.handelFolderNameChange}/>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.handleFolderCreation} color="primary" autoFocus>
                        Add
                    </Button>
                    </DialogActions>
                </Dialog>
                <Button variant="contained" color="primary" onClick={this.handleOpen}> Add Folder</Button>
            </div>
        );
    }
}


export default AddButton;
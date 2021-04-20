import React from 'react';
import AddButton from './components/AddButton';
import DeleteButton from './components/DeleteButton';
import Folder from './components/Folder';
import FolderDS from './FolderDS';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import { Typography } from '@material-ui/core';

// initialize folder data structure with root name & null as parent ref
// this initialized folder will not be visible
const folderDS = new FolderDS("Root", null);

class App extends React.Component{
    constructor(props) {
        super(props);
        // currentFolder will point to the folder who's content are being shown
        // folderCount is just used to make sure that the state updation happens
        // address is used to only display the "pwd" from linux, ini short, address from the root
        this.state = {
            currentFolder: folderDS,
            folderCount: 0,
            address: ['~']
        }
    }

    // handleFolderCreation will be passed to folder add button
    // this method will create a subfolder with folderName in the this.state.currentFolder
    handleFolderCreation = (folderName) => {
        let currentFolderDs = this.state.currentFolder;
        currentFolderDs.addSubfolder(folderName)
        this.setState({
            currentFolder: currentFolderDs,
            folderCount: this.state.folderCount + 1
        })
    }

    // handleFolderDeletion will be passed to folder delete button
    // this method will delete a subfolder by "folderName" name from the this.state.currentFolder
    handleFolderDeletion = (folderName) => {
        let currentFolderDs = this.state.currentFolder;
        currentFolderDs.deleteSubFolder(folderName)
        this.setState({
            currentFolder: currentFolderDs,
            folderCount: this.state.folderCount - 1
        })
    }

    // handleFolderChange will be used by the folder icon to -
    // set the this.state.currentFolder to the folder that we wish to go to
    handleFolderChange = (folderName) => {
        let currentFolderDs = this.state.currentFolder;
        currentFolderDs = currentFolderDs.changeFolder(folderName);
        let address = this.state.address;
        address.push(folderName);
        this.setState({
            currentFolder: currentFolderDs,
            folderCount: 0,
            address
        })
    }

    // pretty intuitive
    goToParentFolder = () => {
        let address = this.state.address;
        address.pop();
        if(this.state.currentFolder.parentRef !== null) {
            this.setState({
                currentFolder: this.state.currentFolder.parentRef,
                folderCount: 0,
                address
            })
        }
    }
    
    render() {

        return (
            <div>
                <Typography variant="h4">
                    pwd: {this.state.address.join("/")}
                </Typography>
                <IconButton onClick={()=>{
                    this.goToParentFolder()
                }}>
                    <ArrowBackIcon />
                    <p> go back</p>
                </IconButton>
                <br />
                <AddButton handleFolderCreation={this.handleFolderCreation}/>
                <br />
                <DeleteButton handleFolderDeletion={this.handleFolderDeletion}/>
                <br />

                {this.state.currentFolder.subFolders.map((folder) => {
                    return <Folder key={folder.folderName} folderName={folder.folderName} handleFolderChange={this.handleFolderChange}/>
                })}
                
                {this.state.currentFolder.subFolders.length === 0 ? <Typography variant="h6"> Empty Folder </Typography> : null}
                
            </div>
        );
    }
}


export default App;
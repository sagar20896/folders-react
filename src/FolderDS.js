// Folder Data Structure
class FolderDS {
    constructor(folderName, parentRef){
        // constructor takes folder name and reference to parent
        this.parentRef = parentRef;
        this.folderName = folderName;
        // empty subfolders array is created
        this.subFolders = [];
    }

    // method to add a subfolder to the current (this) folder
    addSubfolder(folderName) {
        // pushes new folder data structure into the subfolders array,
        // and reference to parent is set as current folder data structure
        // may form cyclic reference loop, but works elegantly in this case
        this.subFolders.push(new FolderDS(folderName, this));
    }

    // delete subfolder simply filters out a subfolder from the subfolder array
    deleteSubFolder(folderName) {
        this.subFolders = this.subFolders.filter((folder) => folder.folderName !== folderName)
    }

    // change folder will return a reference of a folder that is desired to navigate to
    changeFolder (folderName) {
        let returnVal;
        this.subFolders.forEach(folder => {
            if(folder.folderName === folderName) {
                returnVal = folder;
            }
        });
        return returnVal;
    }
}

export default FolderDS;
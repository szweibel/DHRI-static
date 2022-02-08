// shows a list of files in local storage using MUI components
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText'
import Button from '@material-ui/core/Button';
import DownloadIcon from '@mui/icons-material/Download';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState, useEffect } from 'react';

export default function FileList() {
    const [files, setFiles] = useState([]);
    const [open, setOpen] = useState(false);
    const [file, setFile] = useState(null);
    const [userFiles, setUserFiles] = useState([]);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // const getFiles = () => {
    //     const fileList = [];
    //     // if the filenames in this list match the filenames in local storage
    //     // get the filenames from local storage
    //     // get the files from local storage
    //     // add the files to the fileList
    //     const fileNames = JSON.parse(localStorage.getItem('filenames'));
    //     console.log(fileNames);
    //     if (fileNames) {
    //         fileNames.forEach(filename => {
    //             console.log(filename);
    //             const singleFile = JSON.parse(localStorage.getItem(filename));
    //             fileList.push(singleFile);
    //         });
    //     }
    //     setUserFiles(fileList);
    // }


    useEffect(() => {
        if (!localStorage.getItem('filenames')) {
            localStorage.setItem('filenames', JSON.stringify([]));
        } else {
            const fileNames = localStorage.getItem('filenames');
            console.log(fileNames);
            // setUserFiles(fileNames);
        }
    }, []);

    const handleDelete = (file) => {
        const fileList = files.filter(f => f.filename !== file.filename);
        setFiles(fileList);
        setUserFiles(userFiles.filter(f => f.filename !== file.filename));
        localStorage.setItem('files', userFiles.filter(f => f.filename !== file.filename).join(','));
        localStorage.setItem('filenames', userFiles.filter(f => f.filename !== file.filename).map(f => f.filename).join(','));
    }

    const handleDownload = (file) => {
        const fileList = files.filter(f => f.filename !== file.filename);
        setFiles(fileList);
        setUserFiles(userFiles.filter(f => f.filename !== file.filename));
        localStorage.setItem('files', userFiles.filter(f => f.filename !== file.filename).join(','));
        localStorage.setItem('filenames', userFiles.filter(f => f.filename !== file.filename).map(f => f.filename).join(','));
    }

    const handleChange = (event) => {
        setFile(event.target.files[0]);
    };
    const handleSubmit = (event) => {
        setOpen(false);
        event.preventDefault();
        toLocalStorage(file);
    };

    const toLocalStorage = (fileUpload) => {
        // add filename to localStorage 'filenames'
        const reader = new FileReader();
        const fileContent = reader.readAsText(fileUpload);
        reader.onload = () => {
            const file = {
                filename: fileUpload.name,
                content: reader.result
            };
            console.log(file);
            const fileList = [...files, file];
            setUserFiles([...userFiles, file]);
            // localStorage filenames = ['filename', 'content'];
            localStorage.setItem('filenames', [...userFiles.map(f => f.filename), file.filename].join(','));
            // localStorage.setItem(file.filename, file.content);
        };
    }

    const handleEdit = (file) => {
        const fileContent = localStorage.getItem(file);
        const edit = document.createElement('a');
        edit.href = fileContent;
        edit.click();
    }


    const handleDownloadAll = () => {
        const download = document.createElement('a');
        download.href = '#';
        download.click();
    }

    const uploadComponent = (
        <div>
            <Button
                className="upload-button"
                onClick={handleOpen}
                variant="contained"
                color="primary"
            >
                Upload to Storage
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Upload to Storage</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Upload a file to the storage bucket.
                    </DialogContentText>
                    <input
                        className="upload-input"
                        id="contained-button-file"
                        multiple
                        type="file"
                        onChange={handleChange}
                    />
                    <label htmlFor="contained-button-file">

                    </label>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSubmit} color="primary">
                        Upload
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );

    return (
        <div>
            <Box>
                <List>
                    {/* {userFiles.map((file, index) => {
                        return (
                            <ListItem key={index}>
                                <ListItemIcon>
                                    <ListItemButton onClick={() => handleDownload(file)}>
                                        <DownloadIcon />
                                    </ListItemButton>
                                </ListItemIcon>
                                <ListItemText primary={file} />
                                <ListItemIcon>
                                    <ListItemButton onClick={() => handleEdit(file)}>
                                        <EditIcon />
                                    </ListItemButton>
                                </ListItemIcon>
                                <ListItemIcon>
                                    <ListItemButton onClick={() => handleDelete(file)}>
                                        <DeleteIcon />
                                    </ListItemButton>
                                </ListItemIcon>
                            </ListItem>
                        )
                    }
                    ) || <ListItem>
                            <ListItemText primary="No files found" />
                        </ListItem>} */}

                </List>
            </Box>
            <Box>
                <List>
                    <ListItem>
                        <ListItemButton onClick={handleDownloadAll}>
                            Download All
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        {uploadComponent}
                    </ListItem>
                </List>
            </Box>
        </div>
    );
}


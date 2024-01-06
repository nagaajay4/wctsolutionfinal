import { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';
import Header from '../layouts/Header';
import { useNavigate } from 'react-router-dom';


const FileUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();


  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOk = () => {
    navigate('/UpComingRides');

    //window.location.href = "/new-page"; // replace with your page route
  };

  const handleUpload = () => {
    setOpen(true);
    navigate('/UpComingRides');
    if (selectedFiles.length > 0) {
      const formData = new FormData();
      selectedFiles.forEach((file, index) => {
        formData.append(`file${index + 1}`, file);
      });
      console.log('Uploading files...', formData);
    } else {
      console.error('No files selected');
    }
  };

  return (
    <>
    <Header></Header>
    <Box p={3} ml={8} mr={8} mt={8} border="2px dashed #ccc" borderRadius={8} textAlign="center">
      <input
        type="file"
        accept=".csv,.xlsx,.xls"
        // multiple
        onChange={handleFileChange}
        style={{ display: 'none' }}
        id="multiple-file-input"
      />
      <label htmlFor="multiple-file-input">
        <Button variant="outlined" component="span">
          Select Files
        </Button>
      </label>
      {selectedFiles.length > 0 && (
        <div>
          <Typography variant="subtitle1" mt={2}>
            Selected Files:
          </Typography>
          {/* <ul> */}
            {selectedFiles.map((file) => (
              <li key={file.name}>{file.name}</li>
            ))}
          {/* </ul> */}
          <Button variant="contained" color="primary" onClick={handleUpload} mt={2}>
            Upload
          </Button>
        </div>
      )}
    </Box>
    </>
  );
};

export default FileUpload;
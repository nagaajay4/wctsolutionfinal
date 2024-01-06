import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {  MenuItem, Select } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, IconButton, Stack, TextField } from "@mui/material";
import FormControlContext from "@mui/material/FormControl/FormControlContext";
import CloseIcon from "@mui/icons-material/Close"


const UpComingRides = () => {
    const initialRows = [
        { id: 1, name: 'John Doe', age: 25, status: 'Active' },
        { id: 2, name: 'Jane Doe', age: 30, status: 'Inactive' },
        // Add more initial data as needed
      ];
  const [rows, setRows] = useState(initialRows);

  const handleAddRow = () => {
    const newRow = { id: rows.length + 1, name: '', age: 0, status: 'Active' };
    setRows((prevRows) => [...prevRows, newRow]);
  };

  const handleEditRow = (id) => {
    // Implement your edit logic here
    console.log(`Edit row with ID ${id}`);
  };

  const handleDeleteRow = (id) => {
    const updatedRows = rows.filter((row) => row.id !== id);
    setRows(updatedRows);
  };

  const handleStatusChange = (id, newStatus) => {
    const updatedRows = rows.map((row) =>
      row.id === id ? { ...row, status: newStatus } : row
    );
    setRows(updatedRows);
  };

  const handleEditCellChange = (params) => {
    const updatedRows = [...rows];
    updatedRows[params.id - 1] = { ...updatedRows[params.id - 1], [params.field]: params.props.value };
    setRows(updatedRows);
  };
  const rideColumns=[
    { field:'RideID',headerName:'Ride ID',width:80 },
    {field:'Ride_Status',headerName:'Ride Status',width:150},
    {field:'Ride_Date',headerName:'Ride Date'}
  ]

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 150, editable: true },
    { field: 'age', headerName: 'Age', type: 'number', editable: true },
    { 
      field: 'status',
      headerName: 'Status',
      width: 200,
      renderCell: (params) => (
        <Select
          value={params.value}
          onChange={(e) => handleStatusChange(params.row.id, e.target.value)}
        >
          <MenuItem value="Active">Active</MenuItem>
          <MenuItem value="Inactive">Inactive</MenuItem>
        </Select>
      ),
    },
    {
      field: 'edit',
      headerName: 'Edit',
      sortable: false,
      width: 80,
      disableClickEventBubbling: true,
      renderCell: (params) => (
        <IconButton
          color="primary"
          onClick={() => handleEditRow(params.row.id)}
        >
          <EditIcon />
        </IconButton>
      ),
    },
    {
      field: 'delete',
      headerName: 'Delete',
      sortable: false,
      width: 80,
      disableClickEventBubbling: true,
      renderCell: (params) => (
        <IconButton
          color="secondary"
          onClick={() => handleDeleteRow(params.row.id)}
        >
          <DeleteIcon />
        </IconButton>
      ),
    },
    // Add more columns as needed
  ];
  const [open,openchange]=useState(false);
    const functionopenpopup=()=>{
        openchange(true);
    }
    const closepopup=()=>{
        openchange(false);
    }

  return (
    <>
                <Button onClick={functionopenpopup} color="primary" variant="contained" startIcon={<AirportShuttleIcon />}>Add Ride</Button>
                <Dialog 
            // fullScreen 
            open={open} onClose={closepopup} fullWidth maxWidth="sm">
                <DialogTitle>User Registeration  <IconButton onClick={closepopup} style={{float:'right'}}><CloseIcon color="primary"></CloseIcon></IconButton>  </DialogTitle>
                <DialogContent>
                    {/* <DialogContentText>Do you want remove this user?</DialogContentText> */}
                    <Stack spacing={2} margin={2}>
                      <TextField variant="outlined" label="Username"></TextField>
                      <TextField variant="outlined" label="Password"></TextField>
                      <TextField variant="outlined" label="Email"></TextField>
                      <TextField variant="outlined" label="Phone"></TextField>
                      <FormControlLabel control={<Checkbox defaultChecked color="primary"></Checkbox>} label="Agree terms & conditions"></FormControlLabel>
                      <Button color="primary" variant="contained">Submit</Button>
                    </Stack>
                </DialogContent>
                <DialogActions>
                {/* <Button color="success" variant="contained">Yes</Button>
                    <Button onClick={closepopup} color="error" variant="contained">Close</Button> */}
                </DialogActions>
            </Dialog>

    {/* <Button variant="outlined" onClick={() => {handleAddRow();}} startIcon={<AirportShuttleIcon />} >Add Ride</Button> */}

    {/* <button onClick={handleAddRow}>Add Row</button> */}
    <div style={{ height: '70%', width: '80%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        onEditCellChangeCommitted={handleEditCellChange}
      />
      
    </div>
    
    </>
    
  );
};

export default UpComingRides;

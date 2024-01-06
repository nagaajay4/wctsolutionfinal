import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

const TableComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`YOUR_API_ENDPOINT/${id}`);
      fetchData();
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const handleEdit = (id) => {
    // Implement edit functionality as per your requirements
    console.log(`Edit row with ID ${id}`);
  };

  const handleCreate = () => {
    // Implement create functionality as per your requirements
    console.log('Create new row');
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <div>
          <button onClick={() => handleEdit(params.row.id)}>Edit</button>
          <button onClick={() => handleDelete(params.row.id)}>Delete</button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('YOUR_API_ENDPOINT');
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        columns={columns}
        rows={data}
        loading={loading}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
        pagination
        paginationMode="server"
        sortingMode="server"
        onPageChange={(params) => {
          // Handle page change, fetch data accordingly
        }}
        onSortModelChange={(model) => {
          // Handle sorting, fetch data accordingly
        }}
        onSelectionModelChange={(selection) => {
          // Handle row selection
        }}
      />
      <button onClick={handleCreate}>Create</button>
    </div>
  );
};

export default TableComponent;


import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import React, {useState,useEffect } from "react";
import { nanoid } from 'nanoid';








 function Test1() {
  
  const createRandomRow = () => {
 
  return { id:nanoid() ,CustomerName:"",
      ItemDescription:"", 
      ItemCode:" " ,
      Month:"",
      DispachBalance:" ",
      AdditionalQuantity:"",
      TotalQuantity:" ",};
};
 
  
  

const [rows1, setRows] = React.useState(() => [
  
    createRandomRow(),
    createRandomRow(),
    createRandomRow(),
   
  ]);
  const [rowHeight, setRowHeight] = useState(28);    

useEffect(() => {
         if (rowHeight === 28) {
           setRowHeight(29);
         }else {
          setRowHeight(28);
         }
      }, []); 
 
  
 const columns = [
 
  { field: 'CustomerName', headerName: 'Customer Name', width: 180, editable: true },
  { field: 'ItemDescription', headerName: 'ItemDescription',width: 180, type: 'text', editable: true },
  {
    field: 'ItemCode',
    headerName: 'Item Code',
    type: 'text',
    width: 180,
    editable: true,
  },
  {
    field: 'Month',
    headerName: 'Month',
    type: 'text',
    width: 150,
    editable: true,
  },
  {
    field: 'DispachBalance',
    headerName: 'Dispach Balance',
    type: 'number',
    width: 220,
    editable: true,
    
  },
  {
    field: 'AdditionalQuantity',
    headerName: 'Additional Quantity',
    type: 'number',
    width: 220,
    editable: true,
  },
  {
    field: 'TotalQuantity',
    headerName: 'Total Quantity',
    type: 'number',
    width: 220,
    editable: true,
  },
]; 





const [employeeData, setEmployeeData] = useState(rows1)
  
  const onChangeInput = (e, employeeId) => {
    const { name, value } = e.target

    const editData = employeeData.map((item) =>
      item.employeeId === employeeId && name ? { ...item, [name]: value } : item
    )

    setEmployeeData(editData)
  }
  
   const handleAddRow = () => {
    setRows((prevRows) => [...prevRows, createRandomRow()]);
  };


  return (
    
    <Box component="main">
    <Typography paragraph>
    <div className='object-fit-sm-contain'>
    <div className="container">
      <h3 className="title">Projections</h3>
      
                    <FormControl
                      required
                      sx={{
                        m: 2,
                        minWidth: 170,
                       
                      }}
                    >
                      <InputLabel id="demo-simple-select-required-label">
                        Customer
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-required-label"
                        id="demo-simple-select-required"
                        value={employeeData}
                        label=" Customer"
                        onChange={onChangeInput}
                      >
                        <MenuItem value={10}>LG</MenuItem>
                        <MenuItem value={20}>Bluestar</MenuItem>
                        <MenuItem value={30}>Dakin</MenuItem>
                      </Select>
                    </FormControl>

                    <FormControl
                      required
                      sx={{
                        m: 2,
                        minWidth: 170,
                       
                      }}
                    >
                      <InputLabel id="demo-simple-select-required-label">
                        Month
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-required-label"
                        id="demo-simple-select-required"
                        value={employeeData}
                        label=" Month"
                        onChange={onChangeInput}
                      >
                        <MenuItem value={10}>January</MenuItem>
                        <MenuItem value={20}>February</MenuItem>
                        <MenuItem value={30}>March</MenuItem>
                        <MenuItem value={30}>April</MenuItem>
                        <MenuItem value={30}>May</MenuItem>
                        <MenuItem value={30}>June</MenuItem>
                        <MenuItem value={30}>July</MenuItem>
                        <MenuItem value={30}>August</MenuItem>
                        <MenuItem value={30}>September</MenuItem>
                        <MenuItem value={30}>October</MenuItem>
                        <MenuItem value={30}>November</MenuItem>
                        <MenuItem value={30}>December</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl
                      required
                      sx={{
                        m: 2,
                        minWidth: 170,
                      }}
                    >
                      <InputLabel id="demo-simple-select-required-label">
                        Year
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-required-label"
                        id="demo-simple-select-required"
                        value={employeeData}
                        label=" Year"
                        onChange={onChangeInput}
                      >
                        <MenuItem value={10}>2015</MenuItem>
                        <MenuItem value={20}>2016</MenuItem>
                        <MenuItem value={30}>2017</MenuItem>
                        <MenuItem value={30}>2018</MenuItem>
                        <MenuItem value={30}>2019</MenuItem>
                        <MenuItem value={30}>2020</MenuItem>
                        <MenuItem value={30}>2021</MenuItem>
                        <MenuItem value={30}>2022</MenuItem>
                        <MenuItem value={30}>2023</MenuItem>
                        <MenuItem value={30}>2024</MenuItem>
                        <MenuItem value={30}>2025</MenuItem>
                        <MenuItem value={30}>2026</MenuItem>
                      </Select>
                    </FormControl>

                    <FormControl
                      sx={{
                        m: 3,
                        minWidth: 170,
                      }}
                    >
                      <Button variant="contained">Search</Button>
                    </FormControl>
                     <FormControl
                      sx={{
                        m: 3,
                        minWidth: 170,
                       
                      }}
                    >
                      <Button variant="contained" onClick={handleAddRow}>Add A Row</Button>
                    </FormControl>
                  
                  
      <br/><br/>
      <table className="table table-bordered">
        
        <tbody>
          <div style={{ height: 300, width: '100%' }}>
      <DataGrid checkboxSelection disableRowSelectionOnClick 
  rowHeight={rowHeight} rows={rows1} columns={columns} />
   
       </div>
        </tbody>
      </table>
      
     
      <FormControl
                      sx={{
                        m: 3,
                        minWidth: 150,
                        mx:151,
                      }}
                    >
                      <Button variant="contained">Update</Button>
                    </FormControl>
                    
     
    </div>
    </div>
    </Typography>
    </Box>
  )
}
 


export default Test1;
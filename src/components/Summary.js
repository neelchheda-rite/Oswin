import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import React, { useEffect, useMemo, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import axios from "axios";
import { useTable } from "react-table";
import "../Css/Summary.css";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { YearCalendar } from "@mui/x-date-pickers/YearCalendar";
import { MonthCalendar } from "@mui/x-date-pickers/MonthCalendar";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { nanoid } from "nanoid";



// import { usePagination, useGroupBy, useExpanded } from 'react-table'

export default function Summary() {
  const [customer, setCustomer] = React.useState("");
  const [item, setItem] = React.useState("");
  const [month, setMonth] = React.useState("");
  const [year, setYear] = React.useState("");
   const [value, setValue] = React.useState(null);
  const drawerWidth = 40;

  const handleCustomerChange = (event) => {
    setCustomer(event.target.value);
  };
  const handleItemChange = (event) => {
    setItem(event.target.value);
  };
  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };
  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log(err));
    if (response) {
      const productfromAPI = response.data;
      console.log("Products : ", productfromAPI);
      setProducts(productfromAPI);
    }
  };

  const createRandomRow = () => {
    return {
      id: nanoid(),
      CustomerName: "",
      ItemDescription: "",
      ItemCode: "",
      Month: "",
      DispachBalance: "",
      AdditionalQuantity: "",
      TotalQuantity: "",
    };
  };

  const [rows1, setRows] = React.useState(() => [
    createRandomRow(),
    createRandomRow(),
    createRandomRow(),
    createRandomRow(),
    createRandomRow(),
  ]);

  const columns = [
    {
      field: "CustomerName",
      headerName: "Customer Name",
      width: 150,
      editable: true,
    },
    {
      field: "ItemDescription",
      headerName: "Item Description",
      width: 150,
      type: "text",
      editable: true,
    },
    {
      field: "ItemCode",
      headerName: "Item Code",
      type: "text",
      width: 150,
      editable: true,
    },
    {
      field: "Month",
      headerName: "Month",
      type: "text",
      width: 120,
      editable: true,
    },
    {
      field: "DispachBalance",
      headerName: "Dispatch Balance",
      type: "number",
      width: 150,
      editable: true,
    },
    {
      field: "AdditionalQuantity",
      headerName: "Additional Quantity",
      type: "number",
      width: 150,
      editable: true,
    },
    {
      field: "TotalQuantity",
      headerName: "Total Quantity",
      type: "number",
      width: 150,
      editable: true,
    },
  ];
  const handleAddRow = () => {
    setRows((prevRows) => [...prevRows, createRandomRow()]);
  };

  const productData = useMemo(() => [...products], [products]);

  const productColumn = useMemo(
    () =>
      products[0]
        ? Object.keys(products[0])
            .filter((key) => key !== "rating" && key !== "image")
            .map((key) => {
              return {
                Header: key[0].toUpperCase() + key.substring(1),
                accessor: key,
              };
            })
        : [],
    [products]
  );
  const tableHooks = (hooks) => {
    hooks.visibleColumns.unshift((columns) => [
      {
        id: "Check",
        Header: "Check",
        Cell: ({ row }) => (
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
        ),
      },
      ...columns,
    ]);
  };
  const tableInstance = useTable(
    { columns: productColumn, data: productData },
    tableHooks
  );
  const {
   
    rows,
    
  } = tableInstance;

  // const isEven = (idx) => idx % 2 === 0;
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Typography paragraph>
          <div className="containermain">
            <div
              className="container"
              style={{ maxHeight: "300rem", overflow: "auto" }}
            >
              <FormControl
                required
                sx={{
                  mx: 2,
                  my: 1,
                  minWidth: 170,
                }}
              >
                Customer
                <Select
                  labelId="demo-simple-select-required-label"
                  id="demo-simple-select-required"
                  value={customer}
                  label=" Customer"
                  onChange={handleCustomerChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>

              <FormControl
                required
                sx={{
                  mx: 2,
                  my: 1,
                  minWidth: 170,
                }}
              >
                Item
                <Select
                  labelId="demo-simple-select-required-label"
                  id="demo-simple-select-required"
                  value={item}
                  label=" Item"
                  onChange={handleItemChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>

              <FormControl
                required
                sx={{
                  mx: 2,

                  minWidth: 170,
                }}
              >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["MonthCalendar"]}>
                    Month
                    <Select
                      labelId="demo-simple-select-required-label"
                      id="demo-simple-select-required"
                      value={month}
                      label="MonthCalendar"
                      onChange={handleMonthChange}
                    >
                      <MonthCalendar />
                    </Select>
                  </DemoContainer>
                </LocalizationProvider>
              </FormControl>
              <FormControl
                sx={{
                  mx: 2,
                  minWidth: 170,
                }}
              >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["YearCalendar"]}>
                    Year
                    <Select
                      labelId="demo-simple-select-required-label"
                      id="demo-simple-select-required"
                      value={year}
                      label=" YearCalendar"
                      onChange={handleYearChange}
                    >
                      <YearCalendar />
                    </Select>
                  </DemoContainer>
                </LocalizationProvider>
              </FormControl>
              <FormControl
                sx={{
                  mt: 5,
                  mr: 2,
                  mb: 2,
                  ml: 2,
                  minWidth: 170,
                }}
              >
                <Button variant="contained">Search</Button>
              </FormControl>
              <FormControl
                sx={{
                  mt: 5,
                  minWidth: 170,
                }}
              >
                <Button
                  variant="contained"
                  data-bs-target="#exampleModal"
                  data-bs-toggle="modal"
                >
                  Add Projection
                </Button>
              </FormControl>

              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-xl">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Add Projections
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="container mt-2  ">
                        <FormControl
                          required
                          sx={{
                            mx: 2,
                            my: 1,
                            minWidth: 170,
                          }}
                        >
                          Customer
                          <Select
                            labelId="demo-simple-select-required-label"
                            id="demo-simple-select-required"
                            value={customer}
                            label=" Customer"
                            onChange={handleCustomerChange}
                          >
                            <MenuItem value={10}>LG</MenuItem>
                            <MenuItem value={20}>Bluestar</MenuItem>
                            <MenuItem value={30}>Dakin</MenuItem>
                          </Select>
                        </FormControl>

                        <FormControl
                          required
                          sx={{
                            mx: 2,

                            minWidth: 170,
                          }}
                        >
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={["MonthCalendar"]}>
                              Month
                              <Select
                                labelId="demo-simple-select-required-label"
                                id="demo-simple-select-required"
                                value={month}
                                label="MonthCalendar"
                                onChange={handleMonthChange}
                              >
                                <MonthCalendar />
                              </Select>
                            </DemoContainer>
                          </LocalizationProvider>
                        </FormControl>
                        <FormControl
                          sx={{
                            mx: 2,
                            minWidth: 170,
                          }}
                        >
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={["YearCalendar"]}>
                              Year
                              <Select
                                labelId="demo-simple-select-required-label"
                                id="demo-simple-select-required"
                                value={year}
                                label=" YearCalendar"
                                onChange={handleYearChange}
                              >
                                <YearCalendar value={value} onChange={(newValue) => setValue(newValue)}/>
                              </Select>
                            </DemoContainer>
                          </LocalizationProvider>
                        </FormControl>

                        <FormControl
                          sx={{
                            m: 2,
                            my: 5,
                            minWidth: 170,
                          }}
                        >
                          <Button variant="contained">Search</Button>
                        </FormControl>
                        <FormControl
                          sx={{
                            mx: 2,
                            my: 5,
                            minWidth: 170,
                          }}
                        >
                          <Button variant="contained" onClick={handleAddRow}>
                            Add A Row
                          </Button>
                        </FormControl>
                      </div>
                      <div className="container">
                        <table className="table">
                          <tbody>
                            {/* <div style={{ height: 300, width: "100%" }}> */}
                              <DataGrid
                                sx={{
                                  ".MuiTablePagination-displayedRows , .MuiTablePagination-selectLabel": {
                                    "margin-top": "1em",
                                    "margin-bottom": "1em",
                                  },
                                }}
                                initialState={{
                                  pagination: {
                                    paginationModel: {
                                      pageSize: 25,
                                    },
                                  },
                                }}
                                checkboxSelection
                                disableRowSelectionOnClick
                                disableColumnMenu
                                rows={rows1}
                                columns={columns}
                              />
                            
                          </tbody>
                        </table>
                        <div className="modal-footer">
                          <FormControl
                            sx={{
                              m: 3,
                              minWidth: 150,
                            }}
                          >
                            <Button variant="contained">Update</Button>
                          </FormControl>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container ">
                <Box sx={{ width: "100%", height: 500 }}>
                  <DataGrid
                    sx={{
                      ".MuiTablePagination-displayedRows, .MuiTablePagination-selectLabel": {
                        "margin-top": "1em",
                        "margin-bottom": "1em",
                      },
                    }}
                    columns={columns}
                    rows={rows}
                    rowThreshold={0}
                    disableColumnMenu
                    disableColumnResize
                    disableColumnSelector
                    initialState={{
                      pagination: {
                        paginationModel: {
                          pageSize: 25,
                        },
                      },
                    }}
                  />
                </Box>
              </div>
            </div>
          </div>
        </Typography>
      </Box>
    </>
  );
}

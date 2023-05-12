import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import React, { useEffect, useMemo, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import axios from "axios";
import { DateField } from "@mui/x-date-pickers/DateField";
import InputLabel from "@mui/material/InputLabel";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
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

  const drawerWidth = 40;

  const handleCustomerChange = (event) => {
    setCustomer(event.target.value);
  };
  const handleItemChange = (event) => {
    setItem(event.target.value);
  };
  const handleMonthChange = (event) => {
    setMonth(event.value);
  };
  const handleYearChange = (event) => {
    setYear(event.value);
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
      CustomerName: "Rite",
      ItemDescription: "Technologies",
      ItemCode: "Y-0120",
      Month: "May",
      DispachBalance: "50000",
      AdditionalQuantity: "120000",
      TotalQuantity: "1500000",
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
      headerName: <strong>Customer Name</strong>,
      width: 150,

      editable: true,
    },
    {
      field: "ItemDescription",
      headerName: <strong>Item Description</strong>,
      width: 150,
      type: "text",
      editable: true,
    },
    {
      field: "ItemCode",
      headerName: <strong>Item Code</strong>,
      type: "text",
      width: 150,
      editable: true,
    },
    {
      field: "Month",
      headerName: <strong>Month</strong>,
      type: "text",
      width: 120,
      editable: true,
    },
    {
      field: "DispachBalance",
      headerName: <strong>Dispatch Balance</strong>,
      type: "number",
      width: 150,
      editable: true,
    },
    {
      field: "AdditionalQuantity",
      headerName: <strong>Additional Quantity</strong>,
      type: "number",
      width: 150,
      editable: true,
    },
    {
      field: "TotalQuantity",
      headerName: <strong>Total Quantity</strong>,
      type: "number",
      width: 150,
      editable: true,
    },
  ];
  const handleAddRow = () => {
    setRows((prevRows) => [...prevRows, createRandomRow()]);
  };

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
                  minWidth: 150,
                }}
              >
                <InputLabel id="demo-simple-select-required-label">
                  Customer
                </InputLabel>
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
                  minWidth: 150,
                }}
              >
                <InputLabel id="demo-simple-select-required-label">
                  Item
                </InputLabel>
                <Select
                  labelId="demo-simple-select-required-label"
                  id="demo-simple-select-required"
                  value={customer}
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
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker
                      format="MMMM"
                      views={["month"]}
                      label={"Month"}
                      openTo="month"
                      onChange={handleMonthChange}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </FormControl>
              <FormControl
                sx={{
                  mx: 2,
                  minWidth: 150,
                }}
              >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker
                      views={["year"]}
                      label={"Year"}
                      openTo="year"
                      onChange={handleYearChange}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </FormControl>
              <FormControl
                sx={{
                  mt: 3,
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
                  mt: 3,
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
                            mx: 1,
                            my:1,

                            minWidth: 150,
                          }}
                        >
                          <InputLabel id="demo-simple-select-required-label">
                            Customer
                          </InputLabel>
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
                            mx: 1,

                            minWidth: 170,
                          }}
                        >
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={["DatePicker"]}>
                              <DatePicker
                                size="sm"
                                format="MMMM"
                                views={["month"]}
                                label={"Month"}
                                openTo="month"
                                onChange={handleMonthChange}
                              />
                            </DemoContainer>
                          </LocalizationProvider>
                        </FormControl>
                        <FormControl
                          sx={{
                            mx: 1,
                            minWidth: 170,
                          }}
                        >
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={["DatePicker"]}>
                              <DatePicker
                                views={["year"]}
                                label={"Year"}
                                openTo="year"
                                onChange={handleYearChange}
                              />
                            </DemoContainer>
                          </LocalizationProvider>
                        </FormControl>

                        <FormControl
                          sx={{
                            m: 2,
                            my: 3,
                            minWidth: 150,
                          }}
                        >
                          <Button variant="contained">Search</Button>
                        </FormControl>
                        <FormControl
                          sx={{
                            mx: 2,
                            my: 3,
                            minWidth: 150,
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
                                    pageSize: 5,
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
                    rows={rows1}
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

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React, {useEffect, useMemo, useState} from 'react';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import {TextField} from '@mui/material';
import Button from '@mui/material/Button';
import axios from 'axios';
import {useTable} from 'react-table';


export default function Summary() {

    const [customer, setCustomer] = React.useState('');
    const [item, setItem] = React.useState('');
    const [month, setMonth] = React.useState('');
    const [year, setYear] = React.useState('');

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

        const response = await axios.get('https://fakestoreapi.com/products').catch(err => console.log(err));
        if (response) {
            const products = response.data;
            console.log("Products : ", products);
            setProducts(products);
        }
    };

    const data = useMemo(() => ([{
            "id": 1,
            "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            "price": 109.95,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            "rating": {
                "rate": 3.9,
                "count": 120
            }
        }]), [])
    const columns = useMemo(() => [
        {
            Header: "Id",
            accessor: "id"
        }, {
            Header: "Price",
            accessor: "price"
        }, {
            Header: "Description",
            accessor: "description"
        }
    ], [])
    const tableInstance = useTable({columns, data});
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = tableInstance

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <>
            <div className='container mt-3'>
                <FormControl required
                    sx={
                        {
                            m: 2,
                            minWidth: 170
                        }
                }>
                    <InputLabel id="demo-simple-select-required-label">Customer</InputLabel>
                    <Select labelId="demo-simple-select-required-label" id="demo-simple-select-required"
                        value={customer}
                        label=" Customer"
                        onChange={handleCustomerChange}>

                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>

                </FormControl>
                <FormControl required
                    sx={
                        {
                            m: 2,
                            minWidth: 170
                        }
                }>
                    <InputLabel id="demo-simple-select-required-label">Item</InputLabel>
                    <Select labelId="demo-simple-select-required-label" id="demo-simple-select-required"
                        value={item}
                        label=" Item"
                        onChange={handleItemChange}>

                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>

                </FormControl>
                <FormControl required
                    sx={
                        {
                            m: 2,
                            minWidth: 170
                        }
                }>
                    <InputLabel id="demo-simple-select-required-label">Month</InputLabel>
                    <Select labelId="demo-simple-select-required-label" id="demo-simple-select-required"
                        value={month}
                        label=" Month"
                        onChange={handleMonthChange}>

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
                <FormControl sx={
                    {
                        m: 2,
                        minWidth: 170
                    }
                }>

                    <InputLabel id="demo-simple-select-required-label">Year</InputLabel>
                    <Select labelId="demo-simple-select-required-label" id="demo-simple-select-required"
                        value={year}
                        label=" Item"
                        onChange={handleYearChange}>

                        <MenuItem value={2023}>2021</MenuItem>
                        <MenuItem value={2022}>2022</MenuItem>
                        <MenuItem value={2023}>2023</MenuItem>
                    </Select>

                </FormControl>
                <FormControl sx={
                    {
                        mt:3,
                        mr:2,
                        mb:2,
                        ml:2,
                        minWidth: 170
                    }
                }>

                    <Button variant="contained" className='buttonSummary'>Search</Button>
                </FormControl>
                <FormControl sx={
                    {
                        mt:3,
                        mr:2,
                        mb:2,
                        ml:2,
                        minWidth: 170,
                      
                       
                    }
                }>

                    <Button variant="contained">Add Projection</Button>
                </FormControl>
                <div className="container mt-4">
                <table className="table " {...getTableProps()} >
                    <thead>
                    {// Loop over the header rows
                    headerGroups.map(headerGroup => (
                        // Apply the header row props
                        <tr className="table-dark" {...headerGroup.getHeaderGroupProps()} >
                        {// Loop over the headers in each row
                        headerGroup.headers.map(column => (
                            // Apply the header cell props
                            <th scope="row" {...column.getHeaderProps()} >
                            {// Render the header
                            column.render('Header')}
                            </th>
                        ))}
                        </tr>
                    ))}
                    </thead>
                    {/* Apply the table body props */}
                    <tbody {...getTableBodyProps()}>
                    {// Loop over the table rows
                    rows.map(row => {
                        // Prepare the row for display
                        prepareRow(row)
                        return (
                        // Apply the row props
                        <tr {...row.getRowProps()}>
                            {// Loop over the rows cells
                            row.cells.map(cell => {
                            // Apply the cell props
                            return (
                                <td  {...cell.getCellProps()}>
                                {// Render the cell contents
                                cell.render('Cell')}
                                </td>
                            )
                            })}
                        </tr>
                        )
                    })}
                    </tbody>
                </table>
                </div>
            </div>


        </>
    )
}

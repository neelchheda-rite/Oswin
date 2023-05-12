import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import "../../Css/Dispatch.css";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { DataGridPro } from "@mui/x-data-grid-pro";
import Button from "@mui/material/Button";
import {
  randomCreatedDate,
  randomCurrency,
  randomCountry,
  randomCity,
  randomEmail,
  randomInt,
  randomAddress,
  randomCommodity,
} from "@mui/x-data-grid-generator";
import FormControl from "@mui/material/FormControl";

function Dispatch({ row: rowProp }) {
  return (
    <div className="container1">
      <Stack
        sx={{ py: 2, height: "100%", boxSizing: "border-box" }}
        direction="column"
      >
        <Paper sx={{ flex: 1, mx: "auto", width: "90%", p: 1 }}>
          <Stack direction="column" spacing={1} sx={{ height: 1 }}>
            <DataGridPro
              density="compact"
              disableColumnMenu
              disableColumnResize
              disableColumnSelector
             
             
              columns={[
                {
                  headerName:(<strong>Transporter</strong>),
                  field: "Transporter",
                  width: 200,
                  editable: true,
                },
                {
                  field: "Date",
                  headerName: (<strong>Date</strong>),
                  type: "date",
                  align: "left",
                  width: 150,
                  editable: true,
                },
                {
                  field: "InvoiceNumber",
                  headerName:(<strong>Invoice Number</strong>),
                  width: 150,
                  editable: true,
                },

                {
                  field: "LoadingReciept",
                  headerName: (<strong>Loading Reciept</strong>),
                  type: "text",
                  align: "center",
                  width: 130,
                  editable: true,
                },
                {
                  field: "Quantity",
                  headerName:(<strong>Quantity</strong>),
                  align:"center",
                  type: "number",
                  width: 110,

                  editable: true,
                },
                {
                  field: "GRN",
                  headerName: (<strong>GRN</strong>),
                  type: "text",
                  editable: true,
                },
              ]}
              rows={rowProp.products}
              sx={{ flex: 1 }}
              hideFooter
            />
          </Stack>
        </Paper>
      </Stack>
    </div>
  );
}

Dispatch.propTypes = {
  row: PropTypes.object.isRequired,
};

const columns = [
 
  { field: "customer", headerName: (<strong>Customer Name</strong>), width: 200 },
  { field: "ItemDesc", headerName: (<strong>Item Description</strong>), width: 200 },
  { field: "ItemCode", headerName: (<strong>Item Code</strong>), width: 200 },
  { field: "Month", headerName: (<strong>Month</strong>) },
  { field: "DispatchBal", headerName:(<strong>Dispatch Balance</strong>), width: 200 },
  { field: "AddQuant", headerName: (<strong>Additional Quantity</strong>), width: 200 },
  { field: "TotalQuant", headerName: (<strong>Total Quantity</strong>), width: 200 },
];

function generateProducts() {
  const quantity = randomInt(1, 5);
  return [...Array(quantity)].map((_, index) => ({
    id: index,
    Transporter: randomCommodity(),
    Date: randomCreatedDate(),
    Quantity: randomInt(1, 5),
    InvoiceNumber: randomAddress(),
    LoadingReciept: randomInt(1, 5),
  }));
}

const rows = [
  {
    id: 1,
    customer: "Matheus",
    email: randomEmail(),
    date: randomCreatedDate(),
    address: randomAddress(),
    country: randomCountry(),
    city: randomCity(),
    currency: randomCurrency(),
    products: generateProducts(),
  },
];

export default function BasicDetailPanels() {
  const getDetailPanelContent = React.useCallback(
    ({ row }) => <Dispatch row={row} />,
    []
  );

  const getDetailPanelHeight = React.useCallback(() => 500, []);

  return (
    <div className="container1">
      <Box sx={{ width: "100%", height: 500 }}>
        <DataGridPro
          columns={columns}
          rows={rows}
          rowThreshold={0}
          disableColumnMenu
          disableColumnResize
          disableColumnSelector
          getDetailPanelHeight={getDetailPanelHeight}
          getDetailPanelContent={getDetailPanelContent}
        />
      </Box>
      <div className="modal-footer">
        <FormControl
          sx={{
            m: 3,
            minWidth: 150,
          }}
        >
          <Button variant="contained">Add Dispatch</Button>
        </FormControl>
      </div>
    </div>
  );
}

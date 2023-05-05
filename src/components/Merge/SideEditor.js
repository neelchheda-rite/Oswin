import React from "react";
import "../../Css/SideBar.css";

function Reports() {
  return (
    <div className={`sidebar`}>
      <ul className="SideBarList"></ul>
    </div>
  );
}

export default Reports;


<div className="container mx-3 mt-4 projectiontable">
                <table className="table " {...getTableProps()}>
                  <thead>
                    {
                      // Loop over the header rows
                      headerGroups.map((headerGroup) => (
                        // Apply the header row props
                        <tr
                          className="table-dark"
                          {...headerGroup.getHeaderGroupProps()}
                        >
                          {
                            // Loop over the headers in each row
                            headerGroup.headers.map((column) => (
                              // Apply the header cell props
                              <th scope="row" {...column.getHeaderProps()}>
                                {
                                  // Render the header
                                  column.render("Header")
                                }
                              </th>
                            ))
                          }
                        </tr>
                      ))
                    }
                  </thead>
                  {/* Apply the table body props */}
                  <tbody {...getTableBodyProps()}>
                    {
                      // Loop over the table rows
                      rows.map((row, idx) => {
                        // Prepare the row for display
                        prepareRow(row);
                        return (
                          // Apply the row props
                          <tr
                            className={
                              isEven(idx) ? "bg-secondary bg-opacity-25" : ""
                            }
                            {...row.getRowProps()}
                          >
                            {
                              // Loop over the rows cells
                              row.cells.map((cell) => {
                                // Apply the cell props
                                return (
                                  <td {...cell.getCellProps()}>
                                    {
                                      // Render the cell contents
                                      cell.render("Cell")
                                    }
                                  </td>
                                );
                              })
                            }
                          </tr>
                        );
                      })
                    }
                  </tbody>
                </table>
              </div>
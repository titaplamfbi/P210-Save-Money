import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import adminStorageKeys from "../../constant/admin-storage-keys";
import { useTable } from "react-table";
import { Button, Table, TableBody, TableHead, TableRow } from "@mui/material";
import { useGlobalFilter, useSortBy } from "react-table";
import styled from "styled-components";
import classes from "./profit.scss";
import { GlobalFilter } from "./globalFilter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Moment from "moment";
import Header from "../../components/header";
import Footer from "../../components/footer";
Profit.propTypes = {};

function Profit(props) {
  const [savings, setSavings] = useState([]);

  const url = "http://localhost:5000/saving/getallsavingbyuserid";

  const currentUser = JSON.parse(localStorage.getItem("user"));
  const userID = currentUser._id;
  const fetchAllSavings = async () => {
    const response = await axios
      .post(url, { userID })
      .catch((err) => console.log(err));
    if (response) {
      const savings = response.data;
      setSavings(savings);
    }
  };

  const savingsData = useMemo(() => [...savings], [savings]);

  const savingsColumns = useMemo(
    () =>
      savings[0]
        ? Object.keys(savings[0])
            .filter((key) => key !== "userID" && key !== "__v" && key !== "_id")
            .map((key) => {
              if (key === "createdAt") {
                return {
                  Header: "Create At",
                  accessor: (key) => {
                    return Moment(key.createdAt).format("MM/DD/YYYY hh:mm");
                  },
                };
              } else if (key === "updatedAt") {
                return {
                  Header: "Update At",
                  accessor: (key) => {
                    return Moment(key.updatedAt).format("MM/DD/YYYY hh:mm");
                  },
                };
              } else if (key === "stopDate") {
                return {
                  Header: "Stop Date",
                  accessor: (key) => {
                    return Moment(key.updatedAt).format("MM/DD/YYYY hh:mm");
                  },
                };
              }
              return { Header: key, accessor: key };
            })
        : [],
    [savings]
  );

  const tableInstance = useTable(
    { columns: savingsColumns, data: savingsData },
    useGlobalFilter,
    useSortBy
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    preGlobalFilteredRows,
    setGlobalFilter,
    state,
  } = tableInstance;
  useEffect(() => {
    fetchAllSavings();
  }, []);
  const changesendmoney = async function () {
    document.location.href = "/send";
  };
  return (
    <>
      <Header />
      <div className="container">
        <div class="profit-content">
          <div class="deposit-box">
            <p class="deposit-title">Your bank</p>
            <p class="deposit-text">
              Account number <span>56781231903812</span>
            </p>
            <p class="deposit-text">
              Curent balance <span>5,109 đ</span>
            </p>
            <div class="button-deposit-box">
              <button class="deposit-btn btn bkg-green">Add Money</button>
            </div>
            <p class="deposit-text">
              Money savings <span>2,378,589,000 đ</span>
            </p>
            <div class="button-deposit-box">
              <button
                class="deposit-btn btn bkg-green"
                onClick={changesendmoney}
              >
                Send Money
              </button>
            </div>
          </div>
        </div>
        <div class="profit-table">
          <div style={{ padding: "10px" }}>
            <div>
              <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                setGlobalFilter={setGlobalFilter}
                globalFilter={state.globalFilter}
              />
            </div>
            <table className={classes.table} {...getTableProps()}>
              <thead className={classes.thead}>
                {
                  // Loop over the header rows
                  headerGroups.map((headerGroup) => (
                    // Apply the header row props
                    <tr
                      className={classes.trHead}
                      {...headerGroup.getHeaderGroupProps()}
                    >
                      {
                        // Loop over the headers in each row
                        headerGroup.headers.map((column) => (
                          // Apply the header cell props
                          <th
                            className={classes.th}
                            {...column.getHeaderProps(
                              column.getSortByToggleProps()
                            )}
                          >
                            {
                              // Render the header
                              column.render("Header")
                            }
                            {column.isSorted
                              ? column.isSortedDesc
                                ? " ▼"
                                : " ▲"
                              : ""}
                          </th>
                        ))
                      }
                    </tr>
                  ))
                }
              </thead>
              {/* Apply the table body props */}
              <tbody className={classes.tbody} {...getTableBodyProps()}>
                {
                  // Loop over the table rows
                  rows.map((row) => {
                    // Prepare the row for display
                    prepareRow(row);
                    return (
                      <tr className={classes.trBody} {...row.getRowProps()}>
                        {row.cells.map((cell) => (
                          <td className={classes.td} {...cell.getCellProps()}>
                            {cell.render("Cell")}
                          </td>
                        ))}
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default Profit;

import React, { useEffect, useMemo, useState } from "react";
import "./register.scss";
import PropTypes from "prop-types";
import axios from "axios";
import adminStorageKeys from "../../../../constant/admin-storage-keys";
import { useTable } from "react-table";
import { Button, Table, TableBody, TableHead, TableRow } from "@mui/material";
import { useGlobalFilter, useSortBy } from "react-table";
import styled from "styled-components";
import classes from "./table.module.scss";
import { GlobalFilter } from "./globalFilter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Moment from "moment";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import InputField from "../../../../components/InputField";
import InputPasswordField from "../../../../components/passwordInput";
import RadioGroupCustom from "../../../../components/radioGroup";
import DatePickerCustom from "../../../../components/datePicker";
import TextareaCustom from "../../../../components/textarea";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SelectCustom from "../../../../components/select";

EditDeleteForm.propTypes = {};

function EditDeleteForm(props) {
  const [isEditing, setIsEditing] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [users, setUsers] = useState([]);
  const adminToken = localStorage.getItem(adminStorageKeys.TOKEN);
  const url = "http://localhost:5000/user/allusers";
  let axiosConfig = {
    headers: {
      Authorization: adminToken,
    },
  };
  const fetchAllUsers = async () => {
    const response = await axios
      .get(url, axiosConfig)
      .catch((err) => console.log(err));
    if (response) {
      const users = response.data;
      setUsers(users);
    }
  };
  const usersData = useMemo(() => [...users], [users]);

  const usersColumns = useMemo(
    () =>
      users[0]
        ? Object.keys(users[0])
            .filter((key) => key !== "role" && key !== "jwt" && key !== "__v")
            .map((key) => {
              if (key === "nationalid") {
                return { Header: "ID card", accessor: key };
              } else if (key === "_id") {
                return { Header: "User ID", accessor: key };
              } else if (key === "phonenumber") {
                return { Header: "Phone", accessor: key };
              } else if (key === "passportid") {
                return { Header: "Passport", accessor: key };
              } else if (key === "nationality") {
                return { Header: "National", accessor: key };
              } else if (key === "creditcard") {
                return { Header: "Credit Card", accessor: key };
              } else if (key === "creditcardbrand") {
                return { Header: "Issued By", accessor: key };
              } else if (key === "carddate") {
                return {
                  Header: "DateOfCard",
                  accessor: (key) => {
                    return Moment(key.carddate).format("MM/DD/YYYY");
                  },
                };
              } else if (key === "dob") {
                return {
                  Header: "Dob",
                  accessor: (key) => {
                    return Moment(key.dob).format("MM/DD/YYYY");
                  },
                };
              } else if (key === "createdAt") {
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
              }
              return { Header: key, accessor: key };
            })
        : [],
    [users]
  );
  const handleDelete = (value) => {
    let axiosConfig = {
      headers: {
        Authorization: adminToken,
      },
    };
    const newUsers = [...users];
    for (let i = 0; i < newUsers.length; i++) {
      if (newUsers[i]._id === value._id) {
        //check xem có phải admin không
        if (newUsers[i].role === 1) {
          toast.error("Access Denied");
          return;
        }
        //xóa
        const url = `http://localhost:5000/user/deleteuser/${newUsers[i]._id}`;
        axios
          .delete(url, axiosConfig)
          .then((res) => {
            toast.success("Delete Successfully");
          })
          .catch((err) => toast.error("Something Wrongs"));
      }
    }
    setUsers(newUsers);
  };

  const handleEditing = (value) => {
    const newUsers = [...users];
    for (let i = 0; i < newUsers.length; i++) {
      if (newUsers[i]._id === value._id) {
        //check xem có phải admin không
        if (newUsers[i].role === 1) {
          toast.error("Access Denied");
          return;
        } else {
          //set value khi click vào edit
          form.setValue("_id", newUsers[i]._id);
          form.setValue("address", value.address);
          form.setValue("username", value.username);
          form.setValue("email", value.email);
          form.setValue("password", value.password);
          form.setValue("balanced", value.balanced);
          form.setValue("name", value.name);
          form.setValue("gender", value.gender);
          let newDob = Moment(new Date(value.Dob))._d;
          form.setValue("dob", newDob);
          form.setValue("phonenumber", value.phonenumber);
          form.setValue("nationalid", value.nationalid);
          form.setValue("creditcard", value.creditcard);
          form.setValue("creditcardbrand", value.creditcardbrand);
          form.setValue("nationality", value.nationality);
          let newCardDate = Moment(new Date(value.DateOfCard))._d;
          form.setValue("carddate", newCardDate);
          form.setValue("passportid", value.passportid);
          setOpen(true);
          //edit
        }
      }
    }
    setUsers(newUsers);
  };
  const tableHooks = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        id: "Edit",
        Header: "Edit",
        Cell: ({ row }) => (
          <Button onClick={() => handleEditing(row.values)}>Edit</Button>
        ),
      },
      {
        id: "Delete",
        Header: "Delete",
        Cell: ({ row }) => (
          <Button onClick={() => handleDelete(row.values)}>Delete</Button>
        ),
      },
    ]);
  };
  const tableInstance = useTable(
    { columns: usersColumns, data: usersData },
    useGlobalFilter,
    tableHooks,
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
    fetchAllUsers();
  }, []);

  let time = new Date();
  const schema = yup
    .object({
      username: yup.string().required("Please enter Username"),
      balanced: yup
        .string()
        .required("Only Number")
        .min(0, "At least 0")
        .matches(/^[0-9]+$/, "Must be only digits"),
      email: yup
        .string()
        .email("Invalid email format")
        .required("Please enter your email"),
      password: yup
        .string()
        .matches(/^.*(?=.{6,})/, "Password must contain at least 6 symbols")
        .required("Please enter your password"),
      name: yup
        .string()
        .required("Please enter fullname")
        .test(
          "should has at least two words",
          "Please enter at least two words",
          (value) => value.split(" ").length >= 2
        ),
      gender: yup.string().required(),
      dob: yup
        .date()
        .max(
          new Date(Date.now() - 567648000000),
          "You must be at least 18 years"
        )
        .required("Required"),
      phonenumber: yup
        .string()
        .required("Please enter your phone number")
        .matches(/^[0-9]+$/, "Must be only digits"),
      nationalid: yup
        .string()
        .required("Please enter your ID number")
        .matches(/^[0-9]+$/, "Must be only digits"),
      creditcard: yup
        .string()
        .required("Please enter your card number")
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(16, "Please enter full number")
        .max(19, "Wrong card number"),
      carddate: yup.date().min(
        new Date(Date.now() + 7889400), //ít nhất 3 tháng
        "You must be at least 18 years"
      ),
      creditcardbrand: yup.string().required("Please enter issued"),
      passportid: yup
        .string()
        .required("Please enter your passport number")
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(8, "Please enter full number")
        .max(8, "Wrong passport number"),
      nationality: yup.string().required(),
      address: yup.string().required("Please enter address"),
    })
    .required();
  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      name: "",
      gender: "",
      dob: time,
      phonenumber: "",
      nationalid: "",
      creditcard: "",
      carddate: time,
      creditcardbrand: "",
      passportid: "",
      nationality: "",
      address: "",
      balanced: "",
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = (value) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(value);
    }
    form.reset();
  };

  return (
    <>
      <div className="content-wrapper">
        <div style={{ padding: "10px" }}>
          <h1 className="title-admin">Edit Users</h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <GlobalFilter
              preGlobalFilteredRows={preGlobalFilteredRows}
              setGlobalFilter={setGlobalFilter}
              globalFilter={state.globalFilter}
            />
            <div>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <div className={classes.boxPosition}>
                  <Fade in={open}>
                    <Box className={classes.boxModal}>
                      <div className="box-from-admin">
                        <form onSubmit={form.handleSubmit(handleSubmit)}>
                          <p className="login__desc text-center mt-0">
                            User Infomation
                          </p>
                          <div className="flex-box">
                            <InputField
                              name="username"
                              label="Username"
                              form={form}
                              required
                            />
                            <InputField
                              name="email"
                              label="Email"
                              form={form}
                              required
                            />
                          </div>
                          <div className="flex-box">
                            <InputPasswordField
                              name="password"
                              label="Password"
                              form={form}
                              required
                            />
                            <InputField
                              name="balanced"
                              label="Balance"
                              form={form}
                              required
                            />
                          </div>
                          <div className="flex-box">
                            <InputField
                              name="name"
                              label="Full Name"
                              form={form}
                              required
                            />
                            <div className="gender-box">
                              <p>Gender:</p>
                              <RadioGroupCustom name="gender" form={form} />
                            </div>
                          </div>

                          <div className="flex-box">
                            <div className="date-box ">
                              <p className="date-box-text">Date of birth:</p>
                              <DatePickerCustom name="dob" form={form} />
                            </div>
                            <InputField
                              name="phonenumber"
                              label="Phone Number"
                              form={form}
                              required
                            />
                          </div>

                          <div className="flex-box">
                            <InputField
                              name="nationalid"
                              label="ID Card"
                              form={form}
                              required
                            />
                            <InputField
                              name="creditcard"
                              label="Card Number"
                              form={form}
                              required
                            />
                          </div>
                          <div className="flex-box">
                            <div className="flex-box">
                              <p className="date-box-text">Nationality</p>
                              <SelectCustom name="nationality" form={form} />
                            </div>

                            <div className="date-box">
                              <p className="date-box-text ml-20">
                                Date for card:
                              </p>
                              <DatePickerCustom
                                name="carddate"
                                dateFormat={"MM/yyyy"}
                                form={form}
                              />
                            </div>
                          </div>
                          <div className="flex-box">
                            <InputField
                              name="passportid"
                              label="Passport"
                              form={form}
                              required
                            />
                            <InputField
                              name="creditcardbrand"
                              label="Issued by"
                              form={form}
                              required
                            />
                          </div>
                          <TextareaCustom
                            name="address"
                            label="Address"
                            form={form}
                            required
                          />
                          <button
                            type="submit"
                            className="btn btn-sb-login mt-10 bkg-green"
                            id="btn-login-submit"
                          >
                            Save Change
                          </button>
                        </form>
                      </div>
                    </Box>
                  </Fade>
                </div>
              </Modal>
            </div>
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

export default EditDeleteForm;

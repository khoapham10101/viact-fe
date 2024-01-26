/** @jsxImportSource @emotion/react */

import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Box,
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import CreateUserModal from "components/Modal/User/CreateUserModal";
import { useState } from "react";

import { UserTableStyle } from "./index.style";

const createData = (
  fisrtName: string,
  lastName: string,
  username: string,
  email: string,
  phone: string,
) => {
  return { fisrtName, lastName, username, email, phone };
};

const rows = [
  createData("Amet", "Minus", "consectet", "consectet@gmail.com", "0943254351"),
  createData(
    "Suscipit",
    "Quos",
    "possimus",
    "possimus@gmail.com",
    "0954354362",
  ),
  createData(
    "Omnis",
    "Quia",
    "asperiores",
    "asperiores@gmail.com",
    "0954365463",
  ),
  createData("Quia", "Quos", "adipisici", "adipisici@gmail.com", "0954354362"),
  createData(
    "Aliquip",
    "Eiusmod",
    "commodi",
    "commodi@gmail.com",
    "0954354365",
  ),
  createData(
    "Amet1",
    "Minus1",
    "consectet1",
    "consectet1@gmail.com",
    "0943254351",
  ),
  createData(
    "Suscipit1",
    "Quos1",
    "possimus1",
    "possimus1@gmail.com",
    "0954354362",
  ),
  createData(
    "Omnis1",
    "Quia1",
    "asperiores1",
    "asperiores1@gmail.com",
    "0954365463",
  ),
  createData(
    "Quia1",
    "Quos1",
    "adipisici1",
    "adipisici1@gmail.com",
    "0954354362",
  ),
  createData(
    "Aliquip1",
    "Eiusmod1",
    "commodi1",
    "commodi1@gmail.com",
    "0954354365",
  ),
];

const UserTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [openCreateUser, setOpenCreateUser] = useState<boolean>(false);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box css={UserTableStyle.self}>
      <Box
        display="flex"
        justifyContent="flex-end"
        sx={{
          marginBottom: "20px",
        }}
      >
        <Button
          variant="outlined"
          startIcon={<AddCircleIcon />}
          onClick={() => setOpenCreateUser(true)}
        >
          Create user
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>First name</TableCell>
              <TableCell align="left">Last name</TableCell>
              <TableCell align="left">Username</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Phone</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow
                  key={row.fisrtName}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.fisrtName}
                  </TableCell>
                  <TableCell component="th">{row.lastName}</TableCell>
                  <TableCell align="left">{row.username}</TableCell>
                  <TableCell align="left">{row.email}</TableCell>
                  <TableCell align="left">{row.phone}</TableCell>
                  <TableCell align="left">
                    <IconButton aria-label="update">
                      <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 20]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>

      <CreateUserModal
        open={openCreateUser}
        onClose={() => setOpenCreateUser(false)}
      />
    </Box>
  );
};

export default UserTable;

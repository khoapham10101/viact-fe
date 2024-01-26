/** @jsxImportSource @emotion/react */

import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Backdrop,
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
import CircularProgress from "@mui/material/CircularProgress";
import ConfirmDialog from "components/ConfirmDialog";
import CreateUserModal from "components/Modal/User/CreateUserModal";
import UpdateUserModal from "components/Modal/User/UpdateUserModal";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { UserService } from "services/user";
import { User } from "types/user";

import { UserTableStyle } from "./index.style";

const UserTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [openCreateUser, setOpenCreateUser] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [dataTable, setDataTable] = useState<User[]>([]);
  const [idUserDelete, setIdUserDelete] = useState<string | null>(null);
  const [showBackdrop, setShowBackdrop] = useState<boolean>(false);
  const [userUpdate, setUserUpdate] = useState<User | null>(null);

  const getListUser = async () => {
    try {
      setIsLoading(true);
      const { data } = await UserService.listUser();
      setDataTable(data);
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDeleteUser = async () => {
    try {
      setShowBackdrop(true);
      const { message } = await UserService.deleteUser(idUserDelete as string);
      toast.success(message);
      setIdUserDelete(null);
      setPage(0);
      getListUser();
    } catch (error: any) {
      toast.error(error?.response?.data?.messsage);
    } finally {
      setShowBackdrop(false);
    }
  };

  useEffect(() => {
    getListUser();
  }, []);

  return (
    <Box css={UserTableStyle.self}>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={showBackdrop}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
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
        {isLoading ? (
          <Box
            height={400}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <CircularProgress />
          </Box>
        ) : (
          <>
            <Table
              stickyHeader
              sx={{ minWidth: 650 }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell align="left">ID</TableCell>
                  <TableCell align="left">First name</TableCell>
                  <TableCell align="left">Last name</TableCell>
                  <TableCell align="left">Username</TableCell>
                  <TableCell align="left">Email</TableCell>
                  <TableCell align="left">Phone</TableCell>
                  <TableCell align="left"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dataTable
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {row.firstName}
                      </TableCell>
                      <TableCell component="th">{row.lastName}</TableCell>
                      <TableCell align="left">{row.username}</TableCell>
                      <TableCell align="left">{row.email}</TableCell>
                      <TableCell align="left">{row.phoneNumber}</TableCell>
                      <TableCell align="left">
                        <IconButton
                          aria-label="update"
                          onClick={() => setUserUpdate(row)}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          aria-label="delete"
                          onClick={() => setIdUserDelete(row.id)}
                        >
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
              count={dataTable.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </>
        )}
      </TableContainer>

      <CreateUserModal
        open={openCreateUser}
        onClose={() => setOpenCreateUser(false)}
        onReloadData={getListUser}
      />

      <ConfirmDialog
        open={!!idUserDelete}
        onClose={() => setIdUserDelete(null)}
        title="Are you sure you want to delete?"
        onConfirm={handleDeleteUser}
      />

      <UpdateUserModal
        open={!!userUpdate}
        onClose={() => setUserUpdate(null)}
        data={userUpdate as User}
        onReloadData={getListUser}
      />
    </Box>
  );
};

export default UserTable;

import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";

interface ConfirmDialogProps {
  open?: boolean;
  onClose?: () => void;
  title: string;
  onConfirm?: () => void;
}

const ConfirmDialog = (props: ConfirmDialogProps) => {
  const { open = false, onClose, title, onConfirm } = props;

  const handleClose = () => {
    onClose && onClose();
  };

  const handleConfirm = () => {
    onConfirm && onConfirm();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>

      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleConfirm} autoFocus>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;

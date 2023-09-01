import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';


export default function ConfirmDialog(props) {
  const {open, onYes, onClose, productName, idx} = props

  return (
      <Dialog
        open={open}
        onClose={onClose}
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Are you sure you want to remove this product?
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{productName}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={onClose}>Cancel
          </Button>
          <Button onClick={()=>{onYes?.(idx); onClose()}}>Yes</Button>
        </DialogActions>
      </Dialog>
  );
}
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react";
import CitiesDatabaseService from "../services/citydb.service";

const CityDeleteModal = (props) => {
  const [scroll, setScroll] = useState("paper");
  const onDelete = (e) => {
    CitiesDatabaseService.delete(props.city.id).then((response) => {
      window.location.reload();
    });
  };
  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      setOpen={props.setOpen}
      scroll={scroll}
      aria-labelledby="confirm-dialog"
    >
      <DialogTitle id="confirm-dialog">
        {`Really delete city ${props.city.name}?`}
      </DialogTitle>
      <DialogActions>
        <Button variant="contained" onClick={() => props.setOpen(false)}>
          No
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            props.setOpen(false);
            onDelete();
          }}
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default CityDeleteModal;

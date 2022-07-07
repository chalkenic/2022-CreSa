import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import React, { useState } from "react";
import CitiesDatabaseService from "../services/citydb.service";

const CityDeleteModal = (props) => {
  const [scroll] = useState("paper");
  // Delete city using ID and reload page.
  const onDelete = () => {
    CitiesDatabaseService.delete(props.city.id).then(() => {
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

import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { FormControlUnstyled } from "@mui/base";
import CitiesDatabaseService from "../services/citydb.service";

const useStyles = makeStyles(() => ({
  titleText: {
    paddingBottom: "5 !important",
    color: "#041A58",
  },

  headerText: {
    paddingTop: "8px !important",
    fontWeight: "600 !important",
    fontSize: 22,
    color: "#041A58",
  },

  infoText: {
    fontSize: 22,
    textAlign: "right !important",
  },

  tenantBox: {
    border: "1px solid #000",
    borderRadius: "2px",
    padding: "10px",
  },

  tenantText: {
    padding: "10px",
  },

  divider: {
    borderBottom: "2px solid black !important",
    padding: "0 !important",
    marginLeft: "5%",
    marginRight: "5%",
  },
  dividerLight: {
    borderBottom: "1px solid #808080 !important",
    padding: "0 !important",
    marginLeft: "5%",
    marginRight: "5%",
  },
}));

const CityEditModal = (props) => {
  const styles = useStyles();
  const [scroll, setScroll] = useState("paper");
  const [rating, setRating] = useState("");
  const [established, setEstablished] = useState("");

  console.log(props);

  const handleEdit = () => {
    if (rating.length < 1) {
      setRating(props.city.rating);
    }
    if (established.length < 1) {
      setEstablished(props.city.established);
    }
    CitiesDatabaseService.update(props.city.id, {
      rating: rating,
      established: established,
    }).then(() => {
      props.handleClose();
      window.location.reload();
    });
  };

  return (
    <>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        setOpen={props.setOpen}
        scroll={scroll}
        aria-labelledby="scrolled-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <Grid container>
          <Grid item xs={12}>
            <DialogTitle
              id="scroll-dialog-title"
              component="div"
              align="center"
              className={styles.titleText}
              sx={{ fontSize: "20px", fontWeight: "800" }}
            >
              {`Edit City ${props.city.name}`}
            </DialogTitle>
          </Grid>
          <Grid item xs={12}>
            <FormControlUnstyled component="fieldset" variant="filled" disabled>
              <DialogContent component="div">
                <Grid container justify="center">
                  <Grid item xs={6}>
                    <DialogContent
                      id="scroll-dialog-description"
                      htmlFor="city-rating"
                      component="div"
                      className={styles.headerText}
                    >
                      Tourist Rating
                    </DialogContent>
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      required={true}
                      id="city-rating"
                      label={"Enter Tourist Rating"}
                      className={styles.infoText}
                      onChange={(e) => setRating(e.target.value)}
                    ></TextField>
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogContent dividers={scroll === "paper"} component="div">
                <Grid container justify="center">
                  <Grid item xs={6}>
                    <DialogContent
                      id="scroll-dialog-description"
                      htmlFor="city-est"
                      component="div"
                      className={styles.headerText}
                    >
                      Date Established
                    </DialogContent>
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      required={true}
                      id="city-est"
                      label={"Enter Established date"}
                      className={styles.infoText}
                      onChange={(e) => setEstablished(e.target.value)}
                    ></TextField>
                  </Grid>
                </Grid>
              </DialogContent>
            </FormControlUnstyled>
            <Grid item xs={12}>
              <Box textAlign="center" padding={(2, 2, 2, 2)}>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={handleEdit}
                  size="large"
                >
                  Edit
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Dialog>
    </>
  );
};
export default CityEditModal;

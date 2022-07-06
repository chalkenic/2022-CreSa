import { FormControlUnstyled } from "@mui/base";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { Fragment, useEffect, useRef, useState } from "react";
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

const CityAddModal = (props) => {
  const styles = useStyles();
  const [scroll, setScroll] = useState("paper");
  const [cityName, setCityName] = useState("");

  const [cityCountry, setCityCountry] = useState("");
  const [cityState, setCityState] = useState("");
  const [rating, setRating] = useState("");
  const [established, setEstablished] = useState("");
  const [error, setError] = useState("");
  const handleClose = () => {
    props.setOpen(false);
  };

  const handleAdd = () => {
    if (cityName.length < 1) {
      setError("Enter a city name.");
    } else if (cityCountry.length < 1) {
      setError("Enter a city country.");
    } else if (cityState.length < 1) {
      setError("Enter a city state/county.");
    } else if (rating.length < 1) {
      setError("Enter a city rating.");
    } else if (established.length < 1) {
      setError("Enter a city establishment date.");
    } else {
      CitiesDatabaseService.create({
        name: cityName,
        country: cityCountry,
        state: cityState,
        rating: rating,
        established: established,
      }).then(() => {
        handleClose();
        handleAdd({
          name: cityName,
          country: cityCountry,
          state: cityState,
          rating: rating,
          established: established,
        });
      });
    }
  };

  console.log(cityCountry);

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleClose}
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
              New Entry
            </DialogTitle>
          </Grid>
          <Grid item xs={12}>
            <FormControlUnstyled component="fieldset" variant="filled" disabled>
              <DialogContent component="div">
                <Grid container justify="center">
                  <Grid item xs={6}>
                    <DialogContent
                      id="scroll-dialog-description"
                      htmlFor="city-name"
                      component="div"
                      className={styles.headerText}
                    >
                      City Name
                    </DialogContent>
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      required={true}
                      id="city-name"
                      label={"Enter City Name"}
                      className={styles.infoText}
                      onChange={(e) => setCityName(e.target.value)}
                    ></TextField>
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogContent component="div">
                <Grid container justify="center">
                  <Grid item xs={6}>
                    <DialogContent
                      id="scroll-dialog-description"
                      htmlFor="city-country"
                      component="div"
                      className={styles.headerText}
                    >
                      Country
                    </DialogContent>
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      required={true}
                      id="city-country"
                      label={"Enter City Country"}
                      className={styles.infoText}
                      onChange={(e) => setCityCountry(e.target.value)}
                    ></TextField>
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogContent component="div">
                <Grid container justify="center">
                  <Grid item xs={6}>
                    <DialogContent
                      id="scroll-dialog-description"
                      htmlFor="city-state"
                      component="div"
                      className={styles.headerText}
                    >
                      State
                    </DialogContent>
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      required={true}
                      id="city-state"
                      label={"Enter City State"}
                      className={styles.infoText}
                      onChange={(e) => setCityState(e.target.value)}
                    ></TextField>
                  </Grid>
                </Grid>
              </DialogContent>
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
                  color="success"
                  onClick={handleAdd}
                  size="large"
                >
                  Add
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} textAlign="center">
              {error !== undefined ? (
                <Typography>{error}</Typography>
              ) : (
                <Typography>________</Typography>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
};
export default CityAddModal;

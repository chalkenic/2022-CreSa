import {
  Button,
  Grid,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import AdminRow from "../components/AdminRow";
import CitiesDatabaseService from "../services/citydb.service";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CityAddModal from "../components/CityAddModal";

const CitiesPage = (props) => {
  const [cityData, setCityData] = useState([]);
  const [open, setOpen] = useState(false);

  const handleAdd = (data) => {
    setCityData((newEntry) => newEntry.concat(data));
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setCityData([]);
    CitiesDatabaseService.getAll().then((response) => {
      console.log(response.data);
      for (let index = 0; index < response.data.length; index++) {
        setCityData((data) => data.concat(response.data[index]));
      }
    });
  }, []);

  return (
    <Fragment>
      <Grid container marginBottom={2} justifyContent={"center"}>
        <Grid item xs={12} align="center" paddingRight={105}>
          <Button
            sx={{
              display: "inline-block",
              padding: 0,
              minHeight: 0,
              minWidth: 0,
            }}
            onClick={handleOpen}
            startIcon={<AddCircleIcon style={{ fontSize: 80 }} />}
          ></Button>
        </Grid>
        <Grid item xs={12} align="center">
          <TableContainer sx={{ marginBottom: 5 }}>
            <TableHead>
              <TableRow>
                <TableCell component="th" scope="row" sx={{ fontWeight: 600 }}>
                  Name
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: 600 }}>
                  State
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: 600 }}>
                  Country
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: 600 }}>
                  Tourist Rating
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: 600 }}>
                  Date Established
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: 600 }}>
                  Estimated Population
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: 600 }}>
                  Currency
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: 600 }}>
                  Modify
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cityData.map((row, index) => (
                <AdminRow key={index} city={row} />
              ))}
            </TableBody>
          </TableContainer>
        </Grid>
      </Grid>
      {open && (
        <CityAddModal
          open={open}
          setOpen={setOpen}
          handleClose={handleClose}
          handleAdd={handleAdd}
        />
      )}
    </Fragment>
  );
};
export default CitiesPage;

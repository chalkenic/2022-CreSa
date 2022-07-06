import { Box, Button, TableCell, TableRow, Typography } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { numberWithCommas } from "../helpers/CityTable";
import CityApiService from "../services/cityapi.service";
import citydbService from "../services/citydb.service";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const AdminRow = ({ city }) => {
  const handleEdit = (e) => {
    e.preventDefault();
  };
  const handleDelete = (e) => {
    e.preventDefault();
  };

  var population = "";

  if (city.population !== null) {
    population = numberWithCommas(city.population);
  }

  //   var currency = Object.values(city.currencies)[0];

  return (
    <TableRow
      key={city.name.common}
      sx={{
        "&:last-child td, &:last-child th": { border: 0 },
        backgroundColor: "#f6f6f6",
      }}
    >
      <Fragment>
        <TableCell align="center">{city.name}</TableCell>
        <TableCell align="center">{city.state}</TableCell>
        <TableCell align="center">{city.country}</TableCell>
        <TableCell align="right">{city.rating}</TableCell>
        <TableCell align="right">{city.established}</TableCell>
        <TableCell align="center">
          {city.population !== null ? `${population}` : "Undefined"}
        </TableCell>
        <TableCell align="center">
          {city.currencies !== null ? `${city.currencies}` : "Undefined"}
        </TableCell>

        <TableCell>
          <Box>
            <Button startIcon={<EditIcon />} onClick={handleEdit}></Button>
            <Button startIcon={<DeleteIcon />} onClick={handleDelete}></Button>
          </Box>
        </TableCell>
      </Fragment>
    </TableRow>
  );
};
export default AdminRow;

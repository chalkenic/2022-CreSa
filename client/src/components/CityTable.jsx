import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { Fragment } from "react";
import CityRow from "./CityRow";

const CityTable = ({ cities }) => {
  console.log(cities);
  return (
    <TableContainer sx={{marginBottom: 5}}>
      <TableHead>
        <TableRow>
          <TableCell component="th" scope="row" sx={{ fontWeight: 800 }}>
            Name
          </TableCell>
          <TableCell align="right" sx={{ fontWeight: 800 }}>
            Country
          </TableCell>
          <TableCell align="right" sx={{ fontWeight: 800 }}>
            Continent
          </TableCell>
          {/* <TableCell align="right" sx={{ fontWeight: 800 }}>
            Tourist Rating
          </TableCell> */}
          <TableCell align="right" sx={{ fontWeight: 800 }}>
            Population
          </TableCell>
          <TableCell align="right" sx={{ fontWeight: 800 }}>
            Currency
          </TableCell>
          <TableCell align="right" sx={{ fontWeight: 800 }}>
            Weather
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {cities.map((row, index) => (
          <CityRow key={index} city={row} />
        ))}
      </TableBody>
    </TableContainer>
  );
};
export default CityTable;

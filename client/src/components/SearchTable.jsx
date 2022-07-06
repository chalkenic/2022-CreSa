import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { Fragment } from "react";
import CityRow from "./SearchRow";

const SearchTable = ({ cities }) => {
  return (
    <TableContainer sx={{ marginBottom: 5 }}>
      <TableHead>
        <TableRow>
          <TableCell component="th" scope="row" sx={{ fontWeight: 600 }}>
            Name
          </TableCell>
          <TableCell align="right" sx={{ fontWeight: 600 }}>
            Country
          </TableCell>
          <TableCell align="right" sx={{ fontWeight: 600 }}>
            Continent
          </TableCell>
          {/* <TableCell align="right" sx={{ fontWeight: 800 }}>
            Tourist Rating
          </TableCell> */}
          <TableCell align="right" sx={{ fontWeight: 600 }}>
            Population
          </TableCell>
          <TableCell align="right" sx={{ fontWeight: 600 }}>
            Currency
          </TableCell>
          <TableCell align="right" sx={{ fontWeight: 600 }}>
            Weather
          </TableCell>
          <TableCell align="right" sx={{ fontWeight: 600 }}>
            Temperature
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
export default SearchTable;

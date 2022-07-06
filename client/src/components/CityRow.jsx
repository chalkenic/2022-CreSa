import { TableCell, TableRow, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { numberWithCommas } from "../helpers/CityTable";

const CityRow = ({ city }) => {
  var population = numberWithCommas(city.population);

  var currency = Object.values(city.currencies)[0];

  return (
    <TableRow
      key={city.name.common}
      sx={{
        "&:last-child td, &:last-child th": { border: 0 },
        backgroundColor: "#f6f6f6",
      }}
    >
      <TableCell align="center">{city.capital}</TableCell>
      <TableCell align="center">{city.name.common}</TableCell>
      <TableCell align="center">{city.region}</TableCell>
      {/* <TableCell align="right">{city.rating}</TableCell> */}
      <TableCell align="center">{population}</TableCell>
      <TableCell align="center">{`${currency.name} (${currency.symbol})`}</TableCell>
      <TableCell align="center">{city.Weather}</TableCell>
    </TableRow>
  );
};
export default CityRow;

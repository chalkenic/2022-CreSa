import { Typography } from "@mui/material";
import React from "react";

const CityRow = (state) => {
  console.log(state.results.name.common);
  return (
    <div>
      <Typography>{state.results.capital}</Typography>
    </div>
  );
};
export default CityRow;

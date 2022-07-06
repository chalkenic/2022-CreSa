import { Button, TableCell, TableRow, Typography } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { numberWithCommas } from "../helpers/CityTable";
import CityApiService from "../services/cityapi.service";

const CityRow = ({ city }) => {
  const [weatherData, setWeatherData] = useState();
  const [temperData, setTemperData] = useState();
  useEffect(() => {
    var lat = city.latlng[0];
    var lon = city.latlng[1];

    // setWeatherData(CityApiService.getWeather(city.latlng[0], city.latlng[1]));

    CityApiService.getWeather(city.latlng[0], city.latlng[1]).then(
      (response) => {
        console.log(response.data);
        setWeatherData(response.data.weather[0]);
        setTemperData(response.data.main);
      }
    );
  }, []);

  const handleSaveEntry = (e) => {
    e.preventDefault();
  };

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
      {weatherData !== undefined && (
        <Fragment>
          <TableCell align="center">{city.capital}</TableCell>
          <TableCell align="center">{city.name.common}</TableCell>
          <TableCell align="center">{city.region}</TableCell>
          {/* <TableCell align="right">{city.rating}</TableCell> */}
          <TableCell align="center">{population}</TableCell>
          <TableCell align="center">{`${currency.name} (${currency.symbol})`}</TableCell>
          <TableCell align="center">{`${weatherData.description}`}</TableCell>
          <TableCell align="center">{`${
            temperData.temp
          }${"\u00b0"}C`}</TableCell>
          <TableCell>
            <Button onclick={handleSaveEntry}>Save</Button>
          </TableCell>
        </Fragment>
      )}
    </TableRow>
  );
};
export default CityRow;

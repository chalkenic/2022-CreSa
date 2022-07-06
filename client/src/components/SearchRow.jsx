import { Button, TableCell, TableRow, Typography } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { numberWithCommas } from "../helpers/CityTable";
import CityApiService from "../services/cityapi.service";
import CitiesDatabaseService from "../services/citydb.service";

const SearchRow = ({ city }) => {
  const [weatherData, setWeatherData] = useState();
  const [temperData, setTemperData] = useState();
  const [color, setColor] = useState("#f6f6f6");

  console.log(city);
  useEffect(() => {
    // setWeatherData(CityApiService.getWeather(city.latlng[0], city.latlng[1]));

    CityApiService.getWeather(
      city.capitalInfo.latlng[0],
      city.capitalInfo.latlng[1]
    ).then((response) => {
      setWeatherData(response.data.weather[0]);
      setTemperData(response.data.main);
    });
  }, []);

  const handleSaveEntry = (e) => {
    var currency = Object.values(city.currencies)[0];
    CitiesDatabaseService.create({
      name: city.name.common,
      country: city.capital[0],
      state: city.subregion,
      population: city.population,
      currency: `${currency.name} (${currency.symbol})`,
    }).then(() => {
      setColor("#C1E1C1");
    });
  };

  var population = numberWithCommas(city.population);

  var currency = Object.values(city.currencies)[0];

  return (
    <TableRow
      key={city.name.common}
      sx={{
        "&:last-child td, &:last-child th": { border: 0 },
        backgroundColor: color,
      }}
    >
      {weatherData !== undefined && (
        <>
          <TableCell align="center">{city.capital}</TableCell>
          <TableCell align="center">{city.name.common}</TableCell>
          <TableCell align="center">{city.region}</TableCell>
          {/* <TableCell align="right">{city.rating}</TableCell> */}
          <TableCell align="center">{population}</TableCell>
          <TableCell align="center">{city.cca2}</TableCell>
          <TableCell align="center">{city.cca3}</TableCell>
          <TableCell align="center">{`${currency.name} (${currency.symbol})`}</TableCell>
          <TableCell align="center">{`${weatherData.description}`}</TableCell>
          <TableCell align="center">{`${
            temperData.temp
          }${"\u00b0"}C`}</TableCell>
          <TableCell>
            <Button onClick={handleSaveEntry}>Save</Button>
          </TableCell>
        </>
      )}
    </TableRow>
  );
};
export default SearchRow;

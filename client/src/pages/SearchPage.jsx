import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import CityApiService from "../services/cityapi.service";
import CityRow from "../components/CityRow";
import CityTable from "../components/CityTable";

const SearchPage = (props) => {
  const [cityName, setCityName] = useState("");
  const [results, setResults] = useState([]);
  var cityRows = [];

  const handleNameChange = (e) => {
    setCityName(e.target.value);
  };

  const handleAPISubmit = (e) => {
    e.preventDefault();

    // // var testUrl = CityApiService.get(cityName);
    // // console.log(testUrl);

    CityApiService.get(cityName).then((response) => {
      for (let index = 0; index < response.data.length; index++) {
        setResults((results) => results.concat(response.data[index]));
      }
    });
  };

  useEffect(() => {
    cityRows.length = 0;

    for (let index = 0; index < results.length; index++) {
      cityRows.push(<CityRow results={results[index]}></CityRow>);
    }
    // console.log(results.name.common);
  }, [results]);

  return (
    <Box sx={{ paddingTop: 5 }}>
      <Grid container justifyContent={"center"}>
        {/* <Grid item xs={1}></Grid> */}
        <Grid item xs={10} align="center">
          <Paper elevation={10} sx={{ marginBottom: 5, paddingBlock: 2 }}>
            <Typography variant="h4" align="center">
              City weather Service
            </Typography>
          </Paper>
          <Paper elevation={5}>
            <Typography variant="h5" align="center">
              Find your city by name
            </Typography>
            <form onSubmit={handleAPISubmit}>
              <FormControl sx={{ paddingBottom: 4 }} variant="outlined">
                <TextField
                  inputProps={{ min: 0, style: { textAlign: "center" } }}
                  id="standard-basic"
                  margin="dense"
                  label="City Name"
                  value={cityName}
                  onChange={handleNameChange}
                  variant="standard"
                  sx={{
                    paddingBottom: 2,
                    "& label": {
                      width: "100%",
                      textAlign: "center",
                      transformOrigin: "center",
                      "&.Mui-focused": {
                        transformOrigin: "center",
                      },
                    },
                  }}
                />
                <Button
                  sx={{
                    border: "1px solid #fff",
                    marginTop: "20px",
                    "&:hover": {
                      backgroundColor: "#fff",
                      color: "green",
                      border: "1px solid green",
                    },
                  }}
                  type="submit"
                >
                  Submit
                </Button>
              </FormControl>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={10} align="center" sx={{ marginTop: "10px" }}>
          <CityTable cities={results} />
        </Grid>
      </Grid>
    </Box>
  );
};
export default SearchPage;

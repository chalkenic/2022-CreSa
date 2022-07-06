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
import SearchRow from "../components/SearchRow";
import SearchTable from "../components/SearchTable";

const SearchPage = () => {
  const [cityName, setCityName] = useState("");
  const [results, setResults] = useState([]);
  var cityRows = [];

  const handleNameChange = (e) => {
    setCityName(e.target.value);
  };

  const handleAPISubmit = (e) => {
    e.preventDefault();

    CityApiService.getCountry(cityName).then((response) => {
      for (let index = 0; index < response.data.length; index++) {
        setResults((results) => results.concat(response.data[index]));
      }
    });
  };

  const handleClearTable = () => {
    setResults([]);
  };

  useEffect(() => {
    // cityRows.length = 0;

    for (let index = 0; index < results.length; index++) {
      cityRows.push(<SearchRow results={results[index]}></SearchRow>);
    }
    // console.log(results.name.common);
  }, [results]);

  return (
    <Box sx={{ paddingTop: 5 }}>
      <Grid container justifyContent={"center"}>
        {/* <Grid item xs={1}></Grid> */}
        <Grid item xs={10} align="center">
          <Paper elevation={5}>
            <Typography variant="h5" align="center">
              Find details by capital city
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
                <Box>
                  <Button
                    variant="contained"
                    color="success"
                    sx={{
                      marginRight: 10,
                      color: "success",
                      marginTop: "20px",
                      "&:hover": {
                        backgroundColor: "#fff",
                        color: "green",
                      },
                    }}
                    type="submit"
                  >
                    Submit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={handleClearTable}
                    sx={{
                      marginTop: "20px",
                      color: "error",
                      "&:hover": {
                        backgroundColor: "#red",
                        color: "red",
                      },
                    }}
                  >
                    Clear entries
                  </Button>
                </Box>
              </FormControl>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={12} align="center" sx={{ marginTop: "10px" }}>
          <SearchTable cities={results} />
        </Grid>
      </Grid>
    </Box>
  );
};
export default SearchPage;

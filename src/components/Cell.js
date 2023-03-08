import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Cell = ({
  row,
  col,
  option,
  setOption,
  houseLocations,
  setHouseLocations,
  resourcesLocations,
  setResourcesLocations,
}) => {
  const handleChange = (event) => {
    setOption(row, col, event.target.value);
    if (event.target.value === "House") {
      // remove resource if it exists at this location
      const filteredResourcesLocations = resourcesLocations.filter(
        (resourcesLocation) =>
          resourcesLocation[0] !== row || resourcesLocation[1] !== col
      );
      setResourcesLocations(filteredResourcesLocations);

      // append house location to house array
      setHouseLocations([...houseLocations, [row, col]]);
    } else {
      // remove house if it exists at this location
      const filteredHouseLocations = houseLocations.filter(
        (houseLocation) => houseLocation[0] !== row || houseLocation[1] !== col
      );
      setHouseLocations(filteredHouseLocations);

      // append resource location to resource array
      setResourcesLocations([...resourcesLocations, [row, col]]);
    }
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Select</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={option}
        label="Service"
        onChange={handleChange}
      >
        <MenuItem value={"House"}>House</MenuItem>
        <MenuItem value={"Restaurant"}>Restaurant</MenuItem>
        <MenuItem value={"Gym"}>Gym</MenuItem>
        <MenuItem value={"Hospital"}>Hospital</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Cell;

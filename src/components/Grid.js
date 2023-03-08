import React, { useState } from "react";
import Cell from "./Cell";
import { minDistance } from "../utils/calculateDistance";
import { Button } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import "./Grid.css";

const Grid = ({ rows, cols }) => {
  const [grid, setGrid] = useState(
    new Array(rows).fill(null).map(() => new Array(cols).fill(""))
  );

  const [houseLocations, setHouseLocations] = useState([]);
  const [resourcesLocations, setResourcesLocations] = useState([]);
  const [bestHouseLocation, setBestHouseLocation] = useState([]);

  const setOption = (row, col, option) => {
    const newGrid = [...grid];
    newGrid[row][col] = option;
    setGrid(newGrid);
  };

  const handleRecommend = () => {
    let bestHouse = null;
    let bestHouseScore = null;
    houseLocations?.map((houseLocation) => {
      let houseScore = null;
      resourcesLocations?.map((resourcesLocation) => {
        let grid = [
          ["", "", "", "", ""],
          ["", "", "", "", ""],
          ["", "", "", "", ""],
          ["", "", "", "", ""],
          ["", "", "", "", ""],
        ];
        grid[houseLocation[0]][houseLocation[1]] = "s";
        grid[resourcesLocation[0]][resourcesLocation[1]] = "d";
        const score = minDistance(grid);
        houseScore += score;
      });
      if (bestHouseScore) {
        if (houseScore < bestHouseScore) {
          bestHouseScore = houseScore;
          bestHouse = houseLocation;
        }
      } else {
        bestHouseScore = houseScore;
        bestHouse = houseLocation;
      }
    });
    setBestHouseLocation(bestHouse);
  };

  return (
    <div>
      <table>
        <tbody>
          {grid.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row?.map((option, colIndex) => (
                <td key={colIndex}>
                  <Cell
                    row={rowIndex}
                    col={colIndex}
                    option={option}
                    setOption={setOption}
                    houseLocations={houseLocations}
                    setHouseLocations={setHouseLocations}
                    resourcesLocations={resourcesLocations}
                    setResourcesLocations={setResourcesLocations}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="button-recommend">
        <Button
          variant="contained"
          style={{ backgroundColor: "darkolivegreen" }}
          onClick={handleRecommend}
        >
          Recommend
        </Button>
      </div>

      {bestHouseLocation && (
        <div className="button-recommend">
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            <strong>
              {`House at row ${bestHouseLocation[0]} and col ${bestHouseLocation[1]} is a good option.`}
            </strong>
          </Alert>
        </div>
      )}
    </div>
  );
};
export default Grid;

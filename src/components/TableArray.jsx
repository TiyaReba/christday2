import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const TableArray = () => {
  const [names, setNames] = useState(["ISC", "Tiya", "Midhun"]);
  const [name, setName] = useState("");

  const inputHandler = (e) => {
    setName(e.target.value);
  };

  const addHandler = () => {
    setNames((names) => [...names, name]);
    setName("");
  };

  const clearHandler = () => {
    setNames([]);
  };

  return (
    <div style={{ paddingTop: "100px" }}>
      <Typography variant="h3">Array</Typography>
      <br />
      <TextField
        variant="outlined"
        placeholder="Name"
        onChange={inputHandler}
        value={name}
      />
      <br />
      <br />
      <Button variant="contained" color="success" onClick={addHandler}>
        Submit
      </Button>
      &nbsp;
      <Button variant="contained" color="error" onClick={clearHandler}>
        Clear All
      </Button>
      <br />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <h2>Names</h2>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {names.map((value, index) => {
              return (
                <TableRow>
                  <TableCell key={index}>{value}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableArray;

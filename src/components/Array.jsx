import {
  Table,
  Button,
  TableHead,
  TableContainer,
  TableCell,
  TableRow,
  TableBody,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Rowprop from "./Rowprop";

const Array = () => {
  var [numbers, setNumbers] = useState([]);
  
  const buttonHandler = () => {
    let n = numbers.length + 1;
    setNumbers((numbers) => [...numbers, n]);
  };

  const clearHandler = () => {
    setNumbers([]);
  };

  //   useEffect(() => {
  //     setNumbers([1, 2, 3]);
  //   }, [setNumbers]);
  return (
    <div>
        <br/><br/><br/>
      <h1>Array</h1>
      <Button variant="contained" onClick={buttonHandler}>
        New Value
      </Button>
      &nbsp;
      <Button variant="contained" onClick={clearHandler}>
        Clear
      </Button>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Numbers</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {numbers.map((value, index) => {
              return (
                <TableRow>
                  {/* <TableCell key={index}>
                    {value} */}
                    <Rowprop data={{ index, value }} />
                  {/* </TableCell> */}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Array;

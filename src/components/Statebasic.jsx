import React, { useState } from "react";
import { Button, Divider, TextField, Typography } from "@mui/material";

const Statebasic = () => {
  var [pname, setPname] = useState("Class");
  var [val, setval] = useState();
  const changeValue = () => {
    setPname(val);
    setval("");
  };
  const inputHandler = (e) => {
    setval(e.target.value);
    console.log(val);
  };
  return (
    <div>
      <Typography variant="h1">Welcome {pname}</Typography>
      <br />
      <Divider />
      <br />
      <TextField variant="outlined" onChange={inputHandler} />
      <br />
      <br />
      <Button variant="contained" onClick={changeValue}>
        Change
      </Button>
    </div>
  );
};

export default Statebasic;

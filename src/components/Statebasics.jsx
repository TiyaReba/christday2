import { Button, Divider, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Statebasics = () => {
  var [pname, setPname] = useState("Class");
  var [val, setval] = useState("");

  const changeName = () => {
    setPname(val);
    setval("");
  };

  const inputHandler = (e) => {
    setval(e.target.value);
    console.log(val);
  };

  return (
    <div style={{ paddingTop: "200px" }}>
      <Typography variant="h1">Welcome {pname}</Typography>
      <br />
      <Divider />
      <br />
      <TextField value={val} onChange={inputHandler} />
      <br />
      <br />
      <Button variant="contained" onClick={changeName}>
        Change
      </Button>
    </div>
  );
};

export default Statebasics;

import { Typography } from "@mui/material";
import React from "react";

const Rowprop = (prop) => {
  var data = prop.data;
  return (
    <Typography key={data.index} variant="h2">
      {data.value}
    </Typography>
  );
};

export default Rowprop;

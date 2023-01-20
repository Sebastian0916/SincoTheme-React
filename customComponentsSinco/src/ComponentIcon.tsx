import React from "react";
import { Home } from "@mui/icons-material";
import { Stack } from "@mui/material";

const ComponentIcon = () => {
  return (
    <>
    <Stack alignItems='center' gap={3}>
      <div>
        <Home fontSize="small" color="primary" />
        <Home fontSize="medium" color="primary" />
        <Home fontSize="large" color="primary" />
      </div>
      <div>
        <Home fontSize="small" color="secondary" />
        <Home fontSize="medium" color="secondary" />
        <Home fontSize="large" color="secondary" />
      </div>
      <div>
        <Home fontSize="small" color="error" />
        <Home fontSize="medium" color="error" />
        <Home fontSize="large" color="error" />
      </div>
      <div>
        <Home fontSize="small" color="info" />
        <Home fontSize="medium" color="info" />
        <Home fontSize="large" color="info" />
      </div>
      <div>
        <Home fontSize="small" color="success" />
        <Home fontSize="medium" color="success" />
        <Home fontSize="large" color="success" />
      </div>
      <div>
        <Home fontSize="small" color="warning" />
        <Home fontSize="medium" color="warning" />
        <Home fontSize="large" color="warning" />
      </div>
      </Stack>
    </>
  );
};

export default ComponentIcon;

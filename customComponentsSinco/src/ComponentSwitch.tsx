import { Switch,Stack } from "@mui/material";
import React from "react";
const label = { inputProps: { "aria-label": "Switch demo" } };

const ComponentSwitch = () => {
  return (
    <>
    <Stack alignItems='center'>
      <div>
        <div>
          <Switch size="small" {...label} defaultChecked />
          <Switch size="medium" {...label} />
        </div>
        <div>
          <Switch size="small" color="secondary" {...label} defaultChecked />
          <Switch size="medium" color="secondary" {...label} />
        </div>
        <div>
          <Switch size="small" color="error" {...label} defaultChecked />
          <Switch size="medium" color="error" {...label} />
        </div>
        <div>
          <Switch size="small" color="info" {...label} defaultChecked />
          <Switch size="medium" color="info" {...label} />
        </div>
        <div>
          <Switch size="small" color="success" {...label} defaultChecked />
          <Switch size="medium" color="success" {...label} />
        </div>
        <div>
          <Switch size="small" color="warning"  {...label} defaultChecked />
          <Switch size="medium" color="warning" {...label} />
        </div>
      </div>
      </Stack>
    </>
  );
};

export default ComponentSwitch;

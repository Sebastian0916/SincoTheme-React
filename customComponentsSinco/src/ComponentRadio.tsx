import { FormControlLabel, Radio, RadioGroup,Stack } from "@mui/material";
import React from "react";

const ComponentRadio = () => {
  return (
    <>
    <Stack alignItems='center'>
      <div>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value="male"
            control={<Radio size="small" color="primary" />}
            label="Male"
          />
          <FormControlLabel
            value="female"
            control={<Radio size="medium" color="primary"/>}
            label="Female"
          />
        </RadioGroup>
      </div>
      <div>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value="male"
            control={<Radio size="small" color="secondary" />}
            label="Male"
          />
          <FormControlLabel
            value="female"
            control={<Radio size="medium" color="secondary"/>}
            label="Female"
          />
        </RadioGroup>
      </div>
      <div>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value="male"
            control={<Radio size="small" color="error" />}
            label="Male"
          />
          <FormControlLabel
            value="female"
            control={<Radio size="medium" color="error"/>}
            label="Female"
          />
        </RadioGroup>
      </div>
      <div>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value="male"
            control={<Radio size="small" color="info" />}
            label="Male"
          />
          <FormControlLabel
            value="female"
            control={<Radio size="medium" color="info"/>}
            label="Female"
          />
        </RadioGroup>
      </div>
      <div>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value="male"
            control={<Radio size="small" color="success" />}
            label="Male"
          />
          <FormControlLabel
            value="female"
            control={<Radio size="medium" color="success"/>}
            label="Female"
          />
        </RadioGroup>
      </div>
      <div>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value="male"
            control={<Radio size="small" color="warning" />}
            label="Male"
          />
          <FormControlLabel
            value="female"
            control={<Radio size="medium" color="warning"/>}
            label="Female"
          />
        </RadioGroup>
      </div>

      </Stack>
    </>
  );
};

export default ComponentRadio;

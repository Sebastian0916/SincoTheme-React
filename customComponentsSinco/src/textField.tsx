import { Stack, TextField } from "@mui/material";
import React from "react";

const ComponetTextField = () => {
  return (
    <div>
      <Stack mt={5} gap={4} alignItems="center">
        <div>
          <TextField id="standard-basic" label="outlined" variant="outlined" />
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            size="small"
          />
        </div>
        <div>
          <TextField id="standard-basic" label="outlined" variant="filled" />
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="filled"
            size="small"
          />
        </div>
        <div>
          <TextField id="standard-basic" label="outlined" variant="standard" />
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="standard"
            size="small"
          />
        </div>
      </Stack>
    </div>
  );
};

export default ComponetTextField;

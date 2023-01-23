import React from "react";
import Button from "@mui/material/Button";
import { IconButton, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import { PhotoCamera } from "@mui/icons-material";
export default function ComponentButton() {
  return (
    <Stack mt={3} ml={50} gap={2}>
      <div>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
        >
          <input hidden accept="image/*" type="file" />
          <PhotoCamera />
        </IconButton>

        <br></br>
        <Button variant="outlined" size="medium" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
        <br />
        <Button size="small" variant="contained">
          Hola
        </Button>
        <Button size="medium" variant="contained">
          Hola
        </Button>
        <Button size="large" variant="contained">
          Hola
        </Button>
        <Button size="small" variant="text">
          Hola
        </Button>
        <Button size="medium" variant="text">
          Hola
        </Button>
        <Button size="large" variant="text">
          Hola
        </Button>
        <Button size="small" variant="outlined">
          Hola
        </Button>
        <Button size="medium" variant="outlined">
          Hola
        </Button>
        <Button size="large" variant="outlined">
          Hola
        </Button>
      </div>
      <div>
        <Button size="small" variant="contained">
          Hola
        </Button>
        <Button size="medium" variant="contained" color="secondary">
          Hola
        </Button>
        <Button size="large" variant="contained" color="secondary">
          Hola
        </Button>
        <Button size="small" variant="text" color="secondary">
          Hola
        </Button>
        <Button size="medium" variant="text" color="secondary">
          Hola
        </Button>
        <Button size="large" variant="text" color="secondary">
          Hola
        </Button>
        <Button size="small" variant="outlined" color="secondary">
          Hola
        </Button>
        <Button size="medium" variant="outlined" color="secondary">
          Hola
        </Button>
        <Button size="large" variant="outlined" color="secondary">
          Hola
        </Button>
      </div>
      <div>
        <Button size="small" variant="contained" color="error">
          Hola
        </Button>
        <Button size="medium" variant="contained" color="error">
          Hola
        </Button>
        <Button size="large" variant="contained" color="error">
          Hola
        </Button>
        <Button size="small" variant="text" color="error">
          Hola
        </Button>
        <Button size="medium" variant="text" color="error">
          Hola
        </Button>
        <Button size="large" variant="text" color="error">
          Hola
        </Button>
        <Button size="small" variant="outlined" color="error">
          Hola
        </Button>
        <Button size="medium" variant="outlined" color="error">
          Hola
        </Button>
        <Button size="large" variant="outlined" color="error">
          Hola
        </Button>
      </div>
      <div>
        <Button size="small" variant="contained" color="info">
          Hola
        </Button>
        <Button size="medium" variant="contained" color="info">
          Hola
        </Button>
        <Button size="large" variant="contained" color="info">
          Hola
        </Button>
        <Button size="small" variant="text" color="info">
          Hola
        </Button>
        <Button size="medium" variant="text" color="info">
          Hola
        </Button>
        <Button size="large" variant="text" color="info">
          Hola
        </Button>
        <Button size="small" variant="outlined" color="info">
          Hola
        </Button>
        <Button size="medium" variant="outlined" color="info">
          Hola
        </Button>
        <Button size="large" variant="outlined" color="info">
          Hola
        </Button>
      </div>
      <div>
        <Button size="small" variant="contained" color="success">
          Hola
        </Button>
        <Button size="medium" variant="contained" color="success">
          Hola
        </Button>
        <Button size="large" variant="contained" color="success">
          Hola
        </Button>
        <Button size="small" variant="text" color="success">
          Hola
        </Button>
        <Button size="medium" variant="text" color="success">
          Hola
        </Button>
        <Button size="large" variant="text" color="success">
          Hola
        </Button>
        <Button size="small" variant="outlined" color="success">
          Hola
        </Button>
        <Button size="medium" variant="outlined" color="success">
          Hola
        </Button>
        <Button size="large" variant="outlined" color="success">
          Hola
        </Button>
      </div>
      <div>
        <Button size="small" variant="contained" color="warning">
          Hola
        </Button>
        <Button size="medium" variant="contained" color="warning">
          Hola
        </Button>
        <Button size="large" variant="contained" color="warning">
          Hola
        </Button>
        <Button size="small" variant="text" color="warning">
          Hola
        </Button>
        <Button size="medium" variant="text" color="warning">
          Hola
        </Button>
        <Button size="large" variant="text" color="warning">
          Hola
        </Button>
        <Button size="small" variant="outlined" color="warning">
          Hola
        </Button>
        <Button size="medium" variant="outlined" color="warning">
          Hola
        </Button>
        <Button size="large" variant="outlined" color="warning">
          Hola
        </Button>
      </div>
    </Stack>
  );
}

import { IconButton, Stack } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const componentIconButton = () => {
  return (
    <>
    <Stack alignItems='center' gap={3}>
    <div>
      <IconButton aria-label="delete"  color="primary">
        <DeleteIcon fontSize="small" />
      </IconButton>
      <IconButton aria-label="delete"  color="primary">
        <DeleteIcon  fontSize="medium"/>
      </IconButton>
      <IconButton aria-label="delete" size="large" color="primary">
        <DeleteIcon  fontSize="large"/>
      </IconButton>
    </div>
    <div>
      <IconButton aria-label="delete"  color="secondary">
        <DeleteIcon fontSize="small" />
      </IconButton>
      <IconButton aria-label="delete"  color="secondary">
        <DeleteIcon  fontSize="medium"/>
      </IconButton>
      <IconButton aria-label="delete" size="large" color="secondary">
        <DeleteIcon  fontSize="large"/>
      </IconButton>
    </div>
    <div>
      <IconButton aria-label="delete"  color="error">
        <DeleteIcon fontSize="small" />
      </IconButton>
      <IconButton aria-label="delete"  color="error">
        <DeleteIcon  fontSize="medium"/>
      </IconButton>
      <IconButton aria-label="delete" size="large" color="error">
        <DeleteIcon  fontSize="large"/>
      </IconButton>
    </div>
    <div>
      <IconButton aria-label="delete"  color="info">
        <DeleteIcon fontSize="small" />
      </IconButton>
      <IconButton aria-label="delete"  color="info">
        <DeleteIcon  fontSize="medium"/>
      </IconButton>
      <IconButton aria-label="delete" size="large" color="info">
        <DeleteIcon  fontSize="large"/>
      </IconButton>
    </div>
    <div>
      <IconButton aria-label="delete"  color="success">
        <DeleteIcon fontSize="small" />
      </IconButton>
      <IconButton aria-label="delete"  color="success">
        <DeleteIcon  fontSize="medium"/>
      </IconButton>
      <IconButton aria-label="delete" size="large" color="success">
        <DeleteIcon  fontSize="large"/>
      </IconButton>
    </div>
    <div>
      <IconButton aria-label="delete"  color="warning">
        <DeleteIcon fontSize="small" />
      </IconButton>
      <IconButton aria-label="delete"  color="warning">
        <DeleteIcon  fontSize="medium"/>
      </IconButton>
      <IconButton aria-label="delete" size="large" color="warning">
        <DeleteIcon  fontSize="large"/>
      </IconButton>
    </div>
    </Stack>
    </>
  );
};

export default componentIconButton;

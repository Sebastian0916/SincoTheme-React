import { Fab, Stack } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";

const FabComponent = () => {
  return (
    <>
      <Stack alignItems="center" gap={2} mt={2}>
        <div>
          <Fab size="small" color="primary" aria-label="add">
            <AddIcon />
          </Fab>
          <Fab size="medium" color="primary" aria-label="add">
            <AddIcon />
          </Fab>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
          <Fab size="small" variant="extended" color="primary" aria-label="add">
            <AddIcon />
            Fab
          </Fab>
          <Fab
            size="medium"
            color="primary"
            variant="extended"
            aria-label="add"
          >
            <AddIcon />
            Fab
          </Fab>
          <Fab color="primary" variant="extended" aria-label="add">
            <AddIcon />
            Fab
          </Fab>
        </div>
        <div>
          <Fab size="small" color="secondary" aria-label="add">
            <AddIcon />
          </Fab>
          <Fab size="medium" color="secondary" aria-label="add">
            <AddIcon />
          </Fab>
          <Fab color="secondary" aria-label="add">
            <AddIcon />
          </Fab>
          <Fab
            size="small"
            variant="extended"
            color="secondary"
            aria-label="add"
          >
            <AddIcon />
            Fab
          </Fab>
          <Fab
            size="medium"
            color="secondary"
            variant="extended"
            aria-label="add"
          >
            <AddIcon />
            Fab
          </Fab>
          <Fab color="secondary" variant="extended" aria-label="add">
            <AddIcon />
            Fab
          </Fab>
        </div>
        <div>
          <Fab size="small" color="error" aria-label="add">
            <AddIcon />
          </Fab>
          <Fab size="medium" color="error" aria-label="add">
            <AddIcon />
          </Fab>
          <Fab color="error" aria-label="add">
            <AddIcon />
          </Fab>
          <Fab size="small" variant="extended" color="error" aria-label="add">
            <AddIcon />
            Fab
          </Fab>
          <Fab size="medium" color="error" variant="extended" aria-label="add">
            <AddIcon />
            Fab
          </Fab>
          <Fab color="error" variant="extended" aria-label="add">
            <AddIcon />
            Fab
          </Fab>
        </div>
        <div>
          <Fab size="small" color="info" aria-label="add">
            <AddIcon />
          </Fab>
          <Fab size="medium" color="info" aria-label="add">
            <AddIcon />
          </Fab>
          <Fab color="info" aria-label="add">
            <AddIcon />
          </Fab>
          <Fab size="small" variant="extended" color="info" aria-label="add">
            <AddIcon />
            Fab
          </Fab>
          <Fab size="medium" color="info" variant="extended" aria-label="add">
            <AddIcon />
            Fab
          </Fab>
          <Fab color="info" variant="extended" aria-label="add">
            <AddIcon />
            Fab
          </Fab>
        </div>
        <div>
          <Fab size="small" color="success" aria-label="add">
            <AddIcon />
          </Fab>
          <Fab size="medium" color="success" aria-label="add">
            <AddIcon />
          </Fab>
          <Fab color="success" aria-label="add">
            <AddIcon />
          </Fab>
          <Fab size="small" variant="extended" color="success" aria-label="add">
            <AddIcon />
            Fab
          </Fab>
          <Fab
            size="medium"
            color="success"
            variant="extended"
            aria-label="add"
          >
            <AddIcon />
            Fab
          </Fab>
          <Fab color="success" variant="extended" aria-label="add">
            <AddIcon />
            Fab
          </Fab>
        </div>
        <div>
          <Fab size="small" color="warning" aria-label="add">
            <AddIcon />
          </Fab>
          <Fab size="medium" color="warning" aria-label="add">
            <AddIcon />
          </Fab>
          <Fab color="warning" aria-label="add">
            <AddIcon />
          </Fab>
          <Fab size="small" variant="extended" color="warning" aria-label="add">
            <AddIcon />
            Fab
          </Fab>
          <Fab
            size="medium"
            color="warning"
            variant="extended"
            aria-label="add"
          >
            <AddIcon />
            Fab
          </Fab>
          <Fab color="warning" variant="extended" aria-label="add">
            <AddIcon />
            Fab
          </Fab>
        </div>
      </Stack>
    </>
  );
};

export default FabComponent;

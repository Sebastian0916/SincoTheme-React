import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { Stack } from "@mui/material";

export default function ComponetCheckbox() {
  return (
    <>
      <Stack mt={2}  alignItems="center">
        <div>
          <Checkbox defaultChecked size="small" />
          <Checkbox defaultChecked />
          <Checkbox
            defaultChecked
            sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
          />
        </div>
        <div>
          <Checkbox defaultChecked size="small" color="secondary" />
          <Checkbox defaultChecked color="secondary" />
          <Checkbox
            color="secondary"
            defaultChecked
            sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
          />
        </div>
        <div>
          <Checkbox defaultChecked size="small" color="error" />
          <Checkbox defaultChecked color="error" />
          <Checkbox
            color="error"
            defaultChecked
            sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
          />
        </div>
        <div>
          <Checkbox defaultChecked size="small" color="info" />
          <Checkbox defaultChecked color="info" />
          <Checkbox
            color="info"
            defaultChecked
            sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
          />
        </div>
        <div>
          <Checkbox defaultChecked size="small" color="success" />
          <Checkbox color="success" defaultChecked />
          <Checkbox
            defaultChecked
            color="success"
            sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
          />
        </div>
        <div>
          <Checkbox defaultChecked size="small" color="warning" />
          <Checkbox defaultChecked color="warning" />
          <Checkbox
            color="warning"
            defaultChecked
            sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
          />
        </div>
      </Stack>
    </>
  );
}

import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { Stack } from "@mui/material";

export default function ComponetCheckbox() {
  return (
    <>
      <Stack mt={2} alignItems="center">
        <div>
          <Checkbox defaultChecked />
          <Checkbox defaultChecked size="medium" />
          <Checkbox
            defaultChecked
            sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
          />
        </div>
        <div>
          <Checkbox defaultChecked color="secondary" />
          <Checkbox defaultChecked size="medium" color="secondary" />
          <Checkbox
            color="secondary"
            defaultChecked
            sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
          />
        </div>
        <div>
          <Checkbox defaultChecked color="error" />
          <Checkbox defaultChecked size="medium" color="error" />
          <Checkbox
            color="error"
            defaultChecked
            sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
          />
        </div>
        <div>
          <Checkbox defaultChecked color="info" />
          <Checkbox defaultChecked size="medium" color="info" />
          <Checkbox
            color="info"
            defaultChecked
            sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
          />
        </div>
        <div>
          <Checkbox color="success" defaultChecked />
          <Checkbox defaultChecked size="medium" color="success" />
          <Checkbox
            defaultChecked
            color="success"
            sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
          />
        </div>
        <div>
          <Checkbox defaultChecked color="warning" />
          <Checkbox defaultChecked size="medium" color="warning" />
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

import React from "react";
import ComponentButton from "./button";
import ComponetCheckbox from "./Checkbox";
import ComponentIcon from "./ComponentIcon";
import ComponentIconButton from "./componentIconButton";
import ComponentMenu from "./ComponentMenu";
import ComponentTable from "./componentTable";
import ComponetChip from "./ComponetChip";
import FabComponent from "./FabComponent";
import ComponetTextField from "./textField";
import ComponentRadio from "./ComponentRadio";
import ComponentSwitch from "./ComponentSwitch";
import Paper from "@mui/material/Paper";
import AppBarComponent from "./appBar";
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import MailIcon from '@mui/icons-material/Mail';

function App() {
  return (
    <div>
      <ComponentButton /> 
      {/* <ComponetCheckbox /> */}
      {/* <AppBarComponent /> */}
      {/* <Badge badgeContent={4} color="secondary">
        <MailIcon color="action" />
      </Badge>
      <Badge badgeContent={4} color="success">
        <MailIcon color="action" />
      </Badge>
      <ComponentIcon />
      <ComponentIconButton />
      <ComponentMenu />
      <ComponentRadio />
      <ComponentSwitch />
      <ComponentTable />
      <ComponetChip />
      <FabComponent />
      <ComponetTextField />
      <Paper elevation={1} sx={{display: "flex", width: 120, height: 120}}></Paper>  */}
    </div>
  );
}
export default App;

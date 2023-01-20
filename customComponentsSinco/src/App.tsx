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
function App() {
  return (
    <div>
      <ComponentButton />
      <ComponetCheckbox />
      <ComponentIcon />
      <ComponentIconButton />
      <ComponentMenu />
      <ComponentRadio />
      <ComponentSwitch />
      <ComponentTable />
      <ComponetChip />
      <FabComponent />
      <ComponetTextField />
    </div>
  );
}
export default App;

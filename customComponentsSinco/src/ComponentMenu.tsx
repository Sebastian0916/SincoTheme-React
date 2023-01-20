import { Check } from "@mui/icons-material";
import {
  Divider,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Stack,
} from "@mui/material";
import React from "react";

const ComponentMenu = () => {
  return (
    <>
      <Stack alignItems='center'>
        <div>
          <MenuList dense>
            <MenuItem>
              <ListItemText inset>Single</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemText inset>1.15</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemText inset>Double</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Check />
              </ListItemIcon>
              Custom: 1.2
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemText>Add space before paragraph</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemText>Add space after paragraph</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemText>Custom spacing...</ListItemText>
            </MenuItem>
          </MenuList>
        </div>
      </Stack>
    </>
  );
};

export default ComponentMenu;

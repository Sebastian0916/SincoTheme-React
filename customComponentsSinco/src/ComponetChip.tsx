import React from "react";
import { Chip, Avatar, Stack } from "@mui/material";
const ComponetChip = () => {
  return (
    <>
      <Stack mt={2} gap={2} alignItems="center">
        <div style={{ display: "flex", gap: 10 }}>
          <Chip color="primary" label="chip" size="medium" />
          <Chip label="chip" color="primary" />
          <Chip
            avatar={<Avatar>M</Avatar>}
            color="primary"
            size="medium"
            label="Avatar"
          />
          <Chip
            color="primary"
            avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
            label="Avatar"
          />
          <Chip variant="outlined" color="primary" label="chip" size="medium" />
          <Chip label="chip" variant="outlined" color="primary" />
          <Chip
            variant="outlined"
            avatar={<Avatar>M</Avatar>}
            color="primary"
            size="medium"
            label="Avatar"
          />
          <Chip
            variant="outlined"
            color="primary"
            avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
            label="Avatar"
          />
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <Chip color="secondary" label="chip" size="medium" />
          <Chip label="chip" color="secondary" />
          <Chip
            avatar={<Avatar>M</Avatar>}
            color="secondary"
            size="medium"
            label="Avatar"
          />
          <Chip
            color="secondary"
            avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
            label="Avatar"
          />
          <Chip variant="outlined" color="secondary" label="chip" size="medium" />
          <Chip label="chip" variant="outlined" color="secondary" />
          <Chip
            variant="outlined"
            avatar={<Avatar>M</Avatar>}
            color="secondary"
            size="medium"
            label="Avatar"
          />
          <Chip
            variant="outlined"
            color="secondary"
            avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
            label="Avatar"
          />
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <Chip color="error" label="chip" size="medium" />
          <Chip label="chip" color="error" />
          <Chip
            avatar={<Avatar>M</Avatar>}
            color="error"
            size="medium"
            label="Avatar"
          />
          <Chip
            color="error"
            avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
            label="Avatar"
          />
          <Chip variant="outlined" color="error" label="chip" size="medium" />
          <Chip label="chip" variant="outlined" color="error" />
          <Chip
            variant="outlined"
            avatar={<Avatar>M</Avatar>}
            color="error"
            size="medium"
            label="Avatar"
          />
          <Chip
            variant="outlined"
            color="error"
            avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
            label="Avatar"
          />
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <Chip color="info" label="chip" size="medium" />
          <Chip label="chip" color="info" />
          <Chip
            avatar={<Avatar>M</Avatar>}
            color="info"
            size="medium"
            label="Avatar"
          />
          <Chip
            color="info"
            avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
            label="Avatar"
          />
          <Chip variant="outlined" color="info" label="chip" size="medium" />
          <Chip label="chip" variant="outlined" color="info" />
          <Chip
            variant="outlined"
            avatar={<Avatar>M</Avatar>}
            color="info"
            size="medium"
            label="Avatar"
          />
          <Chip
            variant="outlined"
            color="info"
            avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
            label="Avatar"
          />
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <Chip color="success" label="chip" size="medium" />
          <Chip label="chip" color="success" />
          <Chip
            avatar={<Avatar>M</Avatar>}
            color="success"
            size="medium"
            label="Avatar"
          />
          <Chip
            color="success"
            avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
            label="Avatar"
          />
          <Chip variant="outlined" color="success" label="chip" size="medium" />
          <Chip label="chip" variant="outlined" color="success" />
          <Chip
            variant="outlined"
            avatar={<Avatar>M</Avatar>}
            color="success"
            size="medium"
            label="Avatar"
          />
          <Chip
            variant="outlined"
            color="success"
            avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
            label="Avatar"
          />
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <Chip color="warning" label="chip" size="medium" />
          <Chip label="chip" color="warning" />
          <Chip
            avatar={<Avatar>M</Avatar>}
            color="warning"
            size="medium"
            label="Avatar"
          />
          <Chip
            color="warning"
            avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
            label="Avatar"
          />
          <Chip variant="outlined" color="warning" label="chip" size="medium" />
          <Chip label="chip" variant="outlined" color="warning" />
          <Chip
            variant="outlined"
            avatar={<Avatar>M</Avatar>}
            color="warning"
            size="medium"
            label="Avatar"
          />
          <Chip
            variant="outlined"
            color="warning"
            avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
            label="Avatar"
          />
        </div>
      </Stack>
    </>
  );
};

export default ComponetChip;

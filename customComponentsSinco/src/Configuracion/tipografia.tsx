import { TypographyOptions } from "@mui/material/styles/createTypography";
import { textTransform } from "@mui/system";

const Typography: TypographyOptions = {
  fontFamily: "sans-serif",
  h1: {
    fontFamily: "Nunito",
    fontSize: "40px",
    fontWeight: "300",
    lineHeight: "140%",
  },
  h2: {
    fontFamily: "Nunito",
    fontSize: "32px",
    fontWeight: "400",
    lineHeight: "",
  },
  h3: {
    fontFamily: "Nunito",
    fontSize: "28px",
    fontWeight: "500",
    lineHeight: "",
  },
  h4: {
    fontFamily: "Nunito",
    fontSize: "24px",
    fontWeight: "600",
    lineHeight: "",
  },
  h5: {
    fontFamily: "Nunito",
    fontSize: "20px",
    fontWeight: "600",
    lineHeight: "",
  },
  h6: {
    fontFamily: "Nunito",
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "",
  },
  subtitle1: {
    fontFamily: "Roboto",
    fontSize: "13px",
    fontWeight: "400",
    lineHeight: "",
  },
  subtitle2: {
    fontFamily: "Roboto",
    fontSize: "12px",
    fontWeight: "500",
    lineHeight: "",
  },
  body1: {
    fontFamily: "Roboto",
    fontSize: "13px",
    fontWeight: "400",
    lineHeight: "",
  },
  body2: {
    fontFamily: "Roboto",
    fontSize: "13px",
    fontWeight: "400",
    lineHeight: "",
  },
  caption: {
    fontFamily: "Roboto",
    fontSize: "10px",
    fontWeight: "500",
    lineHeight: "",
  },
  overline: {
    fontFamily: "Roboto",
    fontSize: "10px",
    fontWeight: "400",
    lineHeight: "",
  },
  button: {
    textTransform: "none",
  },
};
export const typography = Typography;

import { Components } from "@mui/material";

// CONFIGURACION COMPONENTES

// INPUTS
export const Componentes: Components = {
  // AUTOCOMPLETE
  MuiAutocomplete: {
    styleOverrides: {
      tagSizeSmall: {
        root: {
          "& .MuiAutocomplete-inputRoot": {
            height: 46,
          },
        },
      },
      tagSizeMedium: {
        root: {
          "& .MuiAutocomplete-inputRoot": {
            height: 46,
          },
        },
      },
    },
  },
  // BUTTON
  MuiButton: {
    styleOverrides: {
      sizeSmall: {
        "& .MuiButton-startIcon>*:nth-of-type(1)": {
          fontSize: "14px",
        },
        containedSizeSmall: {
          fontSize: 13,
          lineHeight: "18px",
        },
        containedSizeMedium: {
          fontSize: 14,
          lineHeight: "20px",
        },
        containedSizeLarge: {
          fontSize: 14,
          lineHeight: "23px",
        },
        textSizeSmall: {
          fontSize: 13,
          lineHeight: "18px",
        },
        textSizeMedium: {
          fontSize: 14,
          lineHeight: "20px",
        },
        textSizeLarge: {
          fontSize: 14,
          lineHeight: "23px",
        },
        outlinedSizeSmall: {
          fontSize: 13,
          lineHeight: "18px",
        },
        outlinedSizeMedium: {
          fontSize: 14,
          lineHeight: "20px",
        },
        outlinedSizeLarge: {
          fontSize: 14,
          lineHeight: "23px",
        },
        root: {
          textTransform: "none",
          minWidth: "unset",
        },
      },
    },
    defaultProps: {
      size: "small",
    },
  },

  // BUTTON GROUP
  MuiButtonGroup: {
    styleOverrides: {
      root: {
        fontSize: "13px",
        fontWeight: 400,
      },
    },
    defaultProps: {
      size: "small",
    },
  },

  // ICON BUTTON
  MuiIconButton: {
    styleOverrides: {
      sizeSmall: {
        width: 40,
        height: 40,
      },
    },
  },

  // CHECKBOX
  MuiCheckbox: {
    styleOverrides: {
      root: {
        ".MuiSvgIcon-fontSizeSmall": {
          fontSize: 16,
        },
        ".MuiSvgIcon-fontSizeMedium": {
          fontSize: 20,
        },
      },
    },
    defaultProps: {
      size: "small",
    },
  },
  // FLOATING ACTION BUTTON
  MuiFab: {
    styleOverrides: {
      sizeSmall: {
        "&.MuiButtonBase-root.MuiFab-circular": {
          height: 36,
          width: 36,
        },
        "&.MuiButtonBase-root.MuiFab-extended": {
          height: 32,
          width: 72,
          fontSize: 13,
        },
      },
      sizeMedium: {
        "&.MuiButtonBase-root.MuiFab-circular": {
          height: 48,
          width: 48,
        },
        "&.MuiButtonBase-root.MuiFab-extended": {
          height: 38,
          width: 86,
        },
      },
      root: {
        root: {
          "&.MuiButtonBase-root.MuiFab-circular": {
            height: 56,
            width: 56,
          },
          "&.MuiButtonBase-root.MuiFab-extended": {
            height: 48,
            width: 88,
          },
        },
      },
    },
    defaultProps: {
      size: "small",
    },
  },
  // RADIOGROUP
  MuiRadio: {
    styleOverrides: {
      root: {
        "& .MuiSvgIcon-fontSizeSmall": {
          fontSize: "px",
        },
        "& .MuiSvgIcon-fontSizeMedium": {
          fontSize: "px",
        },
        padding: "4px",
      },
    },
    defaultProps: {
      size: "small",
    },
  },
  // RATING
  MuiRating: {
    styleOverrides: {
      sizeSmall: {
        width: "15px",
        height: "14.25px",
        fontSize: "14px",
      },
    },
    defaultProps: {
      size: "small",
    },
  },
  // SLIDER
  MuiSlider: {
    styleOverrides: {
      sizeSmall: {
        width: "146px",
        height: "2px",
      },
    },
    defaultProps: {
      size: "small",
    },
  },
  // SWITCH
  MuiSwitch: {
    defaultProps: {
      size: "small",
    },
  },
  // TEXTFIELD INPUT BASE
  MuiTextField: {
    defaultProps: {
      InputProps: {
        sx: {
          width: 220,
        },
      },
      size: "small",
    },
  },
  // INPUT LABEL
  MuiInputLabel: {
    styleOverrides: {
      filled: {
        "&.Mui-focused": {
          top: -4,
        },
      },
      standard: {
        "&.Mui-focused": {
          top: 3,
        },
      },
      outlined: {
        "&.MuiInputLabel-outlined": {
          top: 0,
        },
        "&.Mui-focused": {
          top: 3,
        },
      },
      root: {
        "&.MuiInputLabel-root": {
          top: 0,
        },
      },
      sizeSmall: {
        "&.MuiInputLabel-root": {
          top: -1,
          "&.Mui-focused": {
            top: 0,
          },
          "&.MuiInputLabel-outlined": {
            top: 0,
            "&.Mui-focused": {
              top: 3,
            },
          },
        },
      },
    },
  },
  // INPUT BASE
  MuiInputBase: {
    styleOverrides: {
      root: {
        "& .MuiFilledInput-input": {
          height: 14,
        },
        "& .MuiOutlinedInput-input": {
          height: 14,
        },
      },
      sizeSmall: {
        ".MuiInputBase-inputSizeSmall	": {
          height: 13,
        },
        "& .MuiFilledInput-input": {
          height: 13,
        },
        "& .MuiOutlinedInput-input": {
          height: 15,
        },
      },
    },
    defaultProps: {
      size: "small",
    },
  },
  // FORM CONTROL
  MuiFormControl: {
    defaultProps: {
      size: "small",
    },
  },
  // TOGGLE BUTTON
  MuiToggleButton: {
    defaultProps: {
      size: "small",
    },
  },
  //TOGGLE BUTTON GROUP
  MuiToggleButtonGroup: {
    defaultProps: {
      size: "small",
    },
  },
  // SNACKBAR
  MuiSnackbar: {
    styleOverrides: {
      root: {
        fontSize: "14px",
        fontWeight: 400,
      },
    },
  },

  // DATA DISPLAY.

  // AVATAR
  MuiAvatar: {
    styleOverrides: {
      root: {
        width: "32px",
        height: "32px",
        fontSize: "13px",
      },
    },
  },
  // CHIP
  MuiChip: {
    styleOverrides: {
      sizeSmall: {
        fontSize: 12,
      },
      sizeMedium: {
        fontSize: 12,
      },
      root: {
        borderRadius: 4,
        "&.MuiChip-colorError": {
          backgroundColor: "#B51E1E",
        },
        "&.MuiChip-outlinedError": {
          backgroundColor: "#fff",
        },
        "& .MuiChip-avatarColorError": {
          backgroundColor: "#D14343",
          color: "#fff",
        },
        "&.MuiChip-outlinedInfo": {
          backgroundColor: "#fff",
        },
        "& .MuiChip-avatarColorInfo": {
          backgroundColor: "#1172A3",
          color: "#fff",
        },

        "&.MuiChip-outlinedSuccess": {
          backgroundColor: "#fff",
        },
        "& .MuiChip-avatarColorSuccess": {
          backgroundColor: "#60A918",
          color: "#fff",
        },
        "&.MuiChip-outlinedWarning": {
          backgroundColor: "#fff",
        },
        "& .MuiChip-avatarColorWarning": {
          backgroundColor: "#F85500",
          color: "#fff",
        },
      },
    },
    defaultProps: {
      size: "small",
    },
  },
  // ICON
  MuiIcon: {
    defaultProps: {
      fontSize: "small",
    },
  },
  // SVG ICON
  MuiSvgIcon: {
    styleOverrides: {
      fontSizeSmall: {
        fontSize: "14px",
      },
    },
    defaultProps: {
      fontSize: "small",
    },
  },
  // TABLE ROW
  MuiTableRow: {
    styleOverrides: {
      root: {
        sx: {
          heigth: 28,
        },
      },
    },
  },
  // FEEDBACK.

  // ALERT
  MuiAlert: {
    styleOverrides: {
      root: {
        fontSize: "13px",
      },
    },
  },
  // ALERT TITLE
  MuiAlertTitle: {
    styleOverrides: {
      root: {
        fontSize: "13px",
      },
    },
  },
  // BACKDROP
  MuiBackdrop: {
    styleOverrides: {
      root: {
        backgroundColor: "rgba(16, 24, 64, 0.5)",
      },
    },
  },

  // NAVIGATION.

  // MENU
  MuiMenuItem: {
    styleOverrides: {
      dense: {
        height: 28,
        width: 106,
      },
    },
  },
  // TAB
  MuiTab: {
    styleOverrides: {
      root: {
        textTransform: "none",
      },
    },
  },
};

export const components = Componentes;

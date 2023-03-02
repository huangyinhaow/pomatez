import { blackA, blue, mauve } from "@radix-ui/colors";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { keyframes, styled } from "../../theme";

export const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

export const slideRightAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

export const slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

export const slideLeftAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const contentStyles = {
  minWidth: "max-content",
  backgroundColor: "white",
  borderRadius: "$md",
  padding: "0.6rem",
  boxShadow:
    "0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
  animationDuration: "400ms",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  willChange: "transform, opacity",
  '&[data-state="open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },
};

export const StyledDropdownMenuContent = styled(
  DropdownMenu.Content,
  contentStyles
);
export const StyledDropdownMenuSubContent = styled(
  DropdownMenu.SubContent,
  contentStyles
);

export const StyledDropdownMenuArrow = styled(DropdownMenu.Arrow, {
  fill: "$white",
});

const itemStyles = {
  all: "unset",
  fontSize: "$sm",
  color: "$gray11",
  borderRadius: "$sm",
  display: "flex",
  alignItems: "center",
  height: "$7",
  padding: "0 5px",
  position: "relative",
  paddingLeft: "$2",
  userSelect: "none",

  "&[data-disabled]": {
    color: "$gray8",
    pointerEvents: "none",
  },

  "&[data-highlighted]": {
    backgroundColor: "$blue9",
    color: "$blue1",
  },
};

export const StyledDropdownMenuItem = styled(
  DropdownMenu.Item,
  itemStyles
);
export const StyledDropdownMenuCheckboxItem = styled(
  DropdownMenu.CheckboxItem,
  itemStyles
);
export const StyledDropdownMenuRadioItem = styled(
  DropdownMenu.RadioItem,
  itemStyles
);
export const StyledDropdownMenuSubTrigger = styled(
  DropdownMenu.SubTrigger,
  {
    '&[data-state="open"]': {
      backgroundColor: blue.blue4,
      color: blue.blue11,
    },
    ...itemStyles,
  }
);

export const StyledDropdownMenuLabel = styled(DropdownMenu.Label, {
  paddingLeft: 25,
  fontSize: 12,
  lineHeight: "25px",
  color: mauve.mauve11,
});

export const StyledDropdownMenuSeparator = styled(
  DropdownMenu.Separator,
  {
    height: 1,
    backgroundColor: "$gray6",
    margin: 5,
  }
);

export const StyledDropdownMenuItemIndicator = styled(
  DropdownMenu.ItemIndicator,
  {
    position: "absolute",
    left: 0,
    width: 25,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  }
);

export const StyledRightSlot = styled("div", {
  marginLeft: "auto",
  paddingLeft: 20,
  color: mauve.mauve11,
  "[data-highlighted] > &": { color: "white" },
  "[data-disabled] &": { color: mauve.mauve8 },
});

export const StyledIconButton = styled("button", {
  all: "unset",
  fontFamily: "inherit",
  borderRadius: "100%",
  height: 35,
  width: 35,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: blue.blue11,
  backgroundColor: "white",
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  "&:hover": { backgroundColor: blue.blue3 },
  "&:focus": { boxShadow: `0 0 0 2px black` },
});

import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

import { blackA, mauve } from "@radix-ui/colors";

import { styled } from "@stitches/react";

const SCROLLBAR_SIZE = 10;

const StyledScrollArea = styled(ScrollAreaPrimitive.Root, {
  width: '100%',
  height: '74%',
  borderRadius: 4,
  overflow: "hidden",
  overflowX : "hidden",
  overflowY: "hidden"
});

const StyledViewport = styled(ScrollAreaPrimitive.Viewport, {
  width: "100%",
  height: "50%",
  borderRadius: "inherit"
});

const StyledScrollbar = styled(ScrollAreaPrimitive.Scrollbar, {
  display: "flex",
  // ensures no selection
  userSelect: "none",
  // disable browser handling of all panning and zooming gestures on touch devices
  touchAction: "none",
  padding: 2,
  background: blackA.blackA6,
  transition: "background 160ms ease-out",
  "&:hover": { background: blackA.blackA8 },
  '&[data-orientation="vertical"]': { width: SCROLLBAR_SIZE },
  '&[data-orientation="horizontal"]': {
    flexDirection: "column",
    height: SCROLLBAR_SIZE
  }
});

const StyledThumb = styled(ScrollAreaPrimitive.Thumb, {
  flex: 1,
  background: mauve.mauve10,
  borderRadius: SCROLLBAR_SIZE,
  // increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "50%",
    minWidth: '100%',
    minHeight: "50%"
  }
});

const StyledCorner = styled(ScrollAreaPrimitive.Corner, {
  background: blackA.blackA8
});

// Exports
export const ScrollArea = StyledScrollArea;
export const ScrollAreaViewport = StyledViewport;
export const ScrollAreaScrollbar = StyledScrollbar;
export const ScrollAreaThumb = StyledThumb;
export const ScrollAreaCorner = StyledCorner;

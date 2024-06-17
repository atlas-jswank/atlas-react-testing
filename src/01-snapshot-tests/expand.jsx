import React from "react";
import "../global.css";
import {
  DownChevron,
  RightChevron,
  StyledExpand,
  StyledExpandContent,
} from "./styled";

export default function Expand({ title, defaultOpen = false, children }) {
  const [showing, setShowing] = React.useState(defaultOpen);
  const icon = showing ? <DownChevron /> : <RightChevron />;
  return (
    <StyledExpand>
      <p data-testid="expand-icon" onClick={() => setShowing(!showing)}>
        {icon} {title}
      </p>
      {showing && <StyledExpandContent>{children}</StyledExpandContent>}
    </StyledExpand>
  );
}

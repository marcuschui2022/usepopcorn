import { useState } from "react";
import PropTypes from "prop-types";

TextExpander.prototype = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  collapsedNumWords: PropTypes.number,
  buttonColor: PropTypes.string,
  expanded: PropTypes.bool,
  expandButtonText: PropTypes.string,
  collapseButtonText: PropTypes.string,
};
export default function TextExpander({
  children,
  className = "text-expander-box",
  collapsedNumWords = 65,
  buttonColor = "blue",
  expanded = false,
  expandButtonText = "Show more",
  collapseButtonText = "Collapse",
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  function handleOnClick() {
    setIsExpanded(!isExpanded);
  }

  const spanStyle = {
    color: buttonColor,
    cursor: "pointer",
  };

  return (
    <div className={className}>
      <span>
        {isExpanded
          ? children
          : children.slice(0, collapsedNumWords).trim() + "..."}
      </span>
      <span style={spanStyle} onClick={handleOnClick}>
        {isExpanded ? ` ${collapseButtonText}` : ` ${expandButtonText}`}
      </span>
    </div>
  );
}

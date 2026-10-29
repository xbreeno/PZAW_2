import { useState } from "react";
import type { CollapsibleSection as CollapsibleSectionTypes } from "../interfaces";

export function CollapsibleSection({ title, children }: CollapsibleSectionTypes) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mb-4 w-100">
      <h2 
        onClick={() => setIsOpen(!isOpen)} 
        style={{ cursor: "pointer" }}
        className="fs-4 mb-3"
      >
        {isOpen ? "▾ " : "▸ "} {title}
      </h2>
      {isOpen && <div>{children}</div>}
    </div>
  );
}
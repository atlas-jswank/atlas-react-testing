import React from "react";
import "../global.css";

export default function Expand({ title, defaultOpen = false, children }) {
  const [showing, setShowing] = React.useState(defaultOpen);
  const icon = showing ? <DownChevron /> : <RightChevron />;
  return (
    <div className="bg-[#f7f0dc] rounded-3xl	border-2 border-[#00003c] text-[#00003c] p-2 m-4">
      <p
        data-testid="expand-icon"
        onClick={() => setShowing(!showing)}
        className="flex items-center cursor-pointer p-2 font-bold"
      >
        {icon} {title}
      </p>
      {showing && <div className="ml-10 pb-4">{children}</div>}
    </div>
  );
}

function RightChevron() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
  );
}

function DownChevron() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

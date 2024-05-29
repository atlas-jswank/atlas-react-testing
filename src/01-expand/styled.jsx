import styled from "styled-components";

export const StyledExpand = styled.div`
  background-color: #f7f0dc;
  border-radius: 30px;
  border: 3px solid #00003c;
  color: #00003c;
  padding: 0.5rem;
  margin: 1rem;

  & > p {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 0.5rem;
    font-weight: bold;
  }
  & svg {
    width: 24px;
    margin-right: 0.5rem;
  }
`;

export const StyledExpandContent = styled.div`
  margin-left: 45px;
  padding-bottom: 1rem;
`;

export function RightChevron() {
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

export function DownChevron() {
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

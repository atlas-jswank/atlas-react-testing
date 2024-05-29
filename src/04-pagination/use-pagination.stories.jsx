/* v8 ignore start */
import { usePagination } from "./use-pagination";
import "./pagination.css";
function TestComponent() {
  const { currentData, next, previous, hasNext, hasPrevious } = usePagination({
    data: ["one", "two", "three", "four", "five", "six", "seven"],
    pageSize: 3,
  });
  return (
    <div>
      <ul>
        {currentData.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button disabled={!hasPrevious} onClick={previous}>
        Previous
      </button>
      <button disabled={!hasNext} onClick={next}>
        Next
      </button>
    </div>
  );
}

export default {
  title: "Atlas/04 Pagination",
  component: TestComponent,
  parameters: {
    layout: "centered",
  },
};

export const Default = {};
/* v8 ignore stop */

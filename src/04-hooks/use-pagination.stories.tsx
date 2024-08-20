/* v8 ignore start */
import { usePagination } from "./use-pagination";

function TestComponent() {
  const { currentData, next, previous, hasNext, hasPrevious } = usePagination({
    data: ["one", "two", "three", "four", "five", "six", "seven"],
    pageSize: 3,
  });
  return (
    <div>
      <ul className="border-[#00003c] border-2 rounded-3xl p-0 bg-white mb-4">
        {currentData.map((item) => (
          <li
            key={item}
            className="p-4 list-none border-b-2 border-b-[#00003c] ml-0 last:border-b-0"
          >
            {item}
          </li>
        ))}
      </ul>
      <button
        className="btn bg-[#00003c]"
        disabled={!hasPrevious}
        onClick={previous}
      >
        Previous
      </button>
      <button className="btn bg-[#00003c]" disabled={!hasNext} onClick={next}>
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

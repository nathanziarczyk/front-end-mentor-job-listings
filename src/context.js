import data from "./data.json";

const jobs = data.map((job) => {
  const ft = [job.role, job.level, ...job.languages, ...job.tools];
  return { ...job, ft };
});

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_FILTER":
      if (!state.filters.includes(payload)) {
        const filters = [...state.filters, payload];
        console.log({ filters });
        const newJobs = state.jobs.filter((job) => {
          return filters.every((filter) => job.ft.includes(filter));
        });
        return {
          ...state,
          ft: filters,
          jobs: newJobs,
        };
      }
      return state;

    case "REMOVE_FILTER":
      return state;

    case "RESET_FILTER":
      return state;

    default:
      console.error("Action type is niet gedefiniëerd");
      break;
  }
};

export const initialState = { jobs, filters: [] };

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
        const newJobs = state.jobs.filter((job) => {
          return filters.every((filter) => job.ft.includes(filter));
        });
        return {
          ...state,
          filters,
          jobs: newJobs,
        };
      } else {
        const filters = state.filters.filter((filter) => filter !== payload);
        const newJobs = initialState.jobs.filter((job) => {
          return filters.every((filter) => job.ft.includes(filter));
        });
        return { ...state, filters, jobs: newJobs };
      }

    case "REMOVE_FILTER":
      const filters = state.filters.filter((filter) => filter !== payload);
      const newJobs = initialState.jobs.filter((job) => {
        return filters.every((filter) => job.ft.includes(filter));
      });
      return { ...state, filters, jobs: newJobs };

    case "RESET_FILTER":
      return { jobs, filters: [] };

    default:
      console.error("Action type is niet gedefiniëerd");
      return state;
  }
};

export const initialState = { jobs, filters: [] };

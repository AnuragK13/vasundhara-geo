import data from "../data/mockData.json";

export const fetchProjects = async (page = 1, limit = 50) => {
  const start = (page - 1) * limit;
  const end = start + limit;

  return {
    total: data.length,
    projects: data.slice(start, end),
  };
};

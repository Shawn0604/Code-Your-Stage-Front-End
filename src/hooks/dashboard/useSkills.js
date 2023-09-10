// const useSkills = (studentId) => {
//   // finish it by yourself
// };

// export default useSkills;

import useSWRFetch from "../useSWRFetch";

const useSkills = (studentId) => {
  const { data } = useSWRFetch(
    `https://api.projectszero.tech/skills/${studentId}`
  );
  return {
    labels: [
      "UIUX",
      "backend",
      "business analysis",
      "design thinking",
      "frontend"
    ],
    values: data?Object.values(data):[0,0,0,0,0]
  };
};

export default useSkills;
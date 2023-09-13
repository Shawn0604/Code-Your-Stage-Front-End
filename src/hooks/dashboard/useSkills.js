import useSWRFetch from "../useSWRFetch";

const useSkills = (studentId) => {
  try {
    const { data } = useSWRFetch(`https://api.projectszero.tech/skills/${studentId}`);

    return {
      labels: [
        "UIUX",
        "backend",
        "business analysis",
        "design thinking",
        "frontend"
      ],
      
      values:data?Object.values(data):[0,0,0,0,0]
    };
  } catch (error) {
    console.error("發送錯誤:", error);
    throw error;
  };
};
export default useSkills;
import axios from "axios";
import { useCookies } from "react-cookie";

const usePostSkills = () => {
  const [, setCookie] = useCookies(["studentId"]);
  return async (studentId, skills) => {
    try {
      await axios.post(`https://api.projectszero.tech/skills/${studentId}`,skills);

      setCookie("studentId", studentId);
      alert("送出成功");
    } catch (error) {
      console.error("發送錯誤:", error);
      alert("發送錯誤，請檢查網絡連接或解決程式碼");
    }
  };
};

export default usePostSkills;

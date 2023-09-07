import DoughnutChart from "../../charts/DoughnutChart";
// import { academyStats } from "../../data/mockData";
import useAcademystats from "../../hooks/dashboard/useAcademystats";

function Academy() {
  const { labels, values } = useAcademystats();
  const departmentToAcademy = {
    "心理所一般組": "學院", 
    "創新領域學士學位學程":"社會科學院", 
    "電機工程學系": "電資學院",
    "數學系":"理學院", 
    "生物機電工程學系": "電資學院",
    "經濟學系": "文學院",
    "科際整合法律學研究所": "文學院",
    "物理學系": "理學院", 
    "材料科學與工程學系": "理學院", 
    "工商管理學系 科技管理組": "管理學院",
    "工商管理學系":"管理學院" , 
    "會計學系":"商學院" , 
    "心理學系":"文學院" , 
    "物理治療學系":"社會科學院" , 
    "國際企業學系": "管理學院", 
    "工程科學及海洋工程學系": "電資學院", 
    "醫學工程學系":"醫學院" ,
    "戲劇學系": "表藝學院", 
    "資訊管理學系": "電資學院", 
    "資訊工程學系":"電資學院" , 
    "生醫電資所": "電資學院", 
    "外國語文學系 / 圖書資訊學系":"文學院" ,
    "歷史學系": "文學院",
    "資訊工程研究所": "電資學院", 
    "經濟系": "文學院", 
    "外國語文學系/社會學系": "文學院"};
    const academyTotals = {};

    // 遍历每个科系，将人数累加到对应学院的总人数中
    labels.forEach((department, index) => {
      const academy = departmentToAcademy[department];
      const value = values[index];
  
      if (!academyTotals[academy]) {
        academyTotals[academy] = 0;
      }
  
      academyTotals[academy] += value;
    });
  
    // 将学院和总人数分别存储到新的数组中
    const academies = Object.keys(academyTotals);
    const academyValues = Object.values(academyTotals);
  
  // const academies = labels.map(labels => departmentToAcademy[labels]);

  // 將科系轉換為學院
  // const s= departmentToAcademy[labels];
  // const { labels, values } = academyStats;
  // 生成隨機色碼的函式
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i += 1) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const chartData = {
    labels:academies,
    datasets: [
      {
        label: "Distribution of colleges",
        data: academyValues,
        backgroundColor: academies?.map(() => getRandomColor()),
        borderWidth: 0
      }
    ]
  };

  return (
    <div className="flex flex-col col-span-full bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          Distribution of colleges
        </h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      {academies && <DoughnutChart data={chartData} width={389} height={260} />}
    </div>
  );
}

export default Academy;

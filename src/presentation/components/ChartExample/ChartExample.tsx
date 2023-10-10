import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
// import "./styles.css";
import { Pie } from "react-chartjs-2";


const Data = [
    {
      id: 1,
      year: 2016,
      userGain: 80000,
      userLost: 823
    },
    {
      id: 2,
      year: 2017,
      userGain: 45677,
      userLost: 345
    },
    {
      id: 3,
      year: 2018,
      userGain: 78888,
      userLost: 555
    },
    {
      id: 4,
      year: 2019,
      userGain: 90000,
      userLost: 4555
    },
    {
      id: 5,
      year: 2020,
      userGain: 4300,
      userLost: 234
    }
  ];

Chart.register(CategoryScale);
 
export default function ChartExample() {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year), 
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
        //   &quot;#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });
 
  return (
    <div className="App">
      <PieChart chartData={chartData} />
    </div>
  );
}


function PieChart({ chartData }: any) {
    return (
      <div className="chart-container">
        <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
        <Pie
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Users Gained between 2016-2020"
              }
            }
          }}
        />
      </div>
    );
  }
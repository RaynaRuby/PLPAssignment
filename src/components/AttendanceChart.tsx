import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register chart components for Pie chart
ChartJS.register(ArcElement, Tooltip, Legend);

type AttendanceChartProps = {
  attendedClasses: number;
  missedClasses: number;
  percentage: number;
  module: string;
  weeklyAttendance: number[]; // Represents attendance for different weeks
};

const AttendanceChart: React.FC<AttendanceChartProps> = ({
  attendedClasses,
  missedClasses,
  percentage,
  module,
  weeklyAttendance,
}) => {
  const data = {
    labels: ["Attended", "Missed"],
    datasets: [
      {
        data: [attendedClasses, missedClasses],
        backgroundColor: ["rgba(75, 192, 192, 0.6)", "rgba(255, 99, 132, 0.6)"],
        hoverBackgroundColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: `${module} Attendance Overview`,
        font: { size: 18 },
        padding: { bottom: 20 },
      },
      legend: {
        position: "top" as const,
        labels: {
          font: { size: 14 },
        },
      },
    },
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
      {/* Pie chart */}
      <div className="w-full mb-6">
        <Pie data={data} options={options} />
      </div>

      {/* Attendance details */}
      <div className="mt-6 border-t pt-4">
        <p className="text-lg font-semibold text-gray-800">Attendance Details:</p>
        <ul className="text-sm text-gray-600 mt-2">
          <li className="flex justify-between">
            <span>Attended Classes:</span>
            <span className="font-medium text-green-600">{attendedClasses}</span>
          </li>
          <li className="flex justify-between mt-2">
            <span>Missed Classes:</span>
            <span className="font-medium text-red-600">{missedClasses}</span>
          </li>
          <li className="flex justify-between mt-2">
            <span>Attendance Percentage:</span>
            <span className={`font-medium ${percentage < 80 ? "text-red-600" : "text-green-600"}`}>
              {percentage}%
            </span>
          </li>
        </ul>
      </div>

      {/* Weekly Attendance */}
      <div className="mt-6 border-t pt-4">
        <p className="text-lg font-semibold text-gray-800">Weekly Attendance:</p>
        <ul className="text-sm text-gray-600 mt-2">
          {weeklyAttendance.map((week, index) => (
            <li key={index} className="flex justify-between">
              <span>Week {index + 1}:</span>
              <span className="font-medium text-blue-600">{week} classes attended</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AttendanceChart;

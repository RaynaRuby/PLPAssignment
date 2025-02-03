// pages/attendance.tsx
"use client";
import { useState } from "react";
import AttendanceChart from "@/components/AttendanceChart";

type ModuleAttendance = {
  moduleName: string;
  attendedClasses: number;
  missedClasses: number;
  percentage: number;
  weeklyAttendance: number[]; // Array of attendance for each week
};

const modules: ModuleAttendance[] = [
  {
    moduleName: "Designing User Experience",
    attendedClasses: 15,
    missedClasses: 5,
    percentage: 75,
    weeklyAttendance: [4, 4, 3, 4], // Attendance for 4 weeks
  },
  {
    moduleName: "Full Stack Development",
    attendedClasses: 20,
    missedClasses: 0,
    percentage: 100,
    weeklyAttendance: [5, 5, 5, 5],
  },
  {
    moduleName: "Fundamentals for IT Professionals",
    attendedClasses: 18,
    missedClasses: 2,
    percentage: 90,
    weeklyAttendance: [5, 5, 4, 4],
  },
  {
    moduleName: "Modern Artifical Intelligence",
    attendedClasses: 20,
    missedClasses: 0,
    percentage: 100,
    weeklyAttendance: [5, 5, 5, 5],
  },
  {
    moduleName: "Machine Learning",
    attendedClasses: 20,
    missedClasses: 0,
    percentage: 100,
    weeklyAttendance: [5, 5, 5, 5],
  },
  {
    moduleName: "Deep Learning",
    attendedClasses: 10,
    missedClasses: 10,
    percentage: 50,
    weeklyAttendance: [3, 3, 3, 1],
  },
];

const AttendancePage = () => {
  const [selectedModule, setSelectedModule] = useState<ModuleAttendance | null>(null);

  const handleModuleClick = (module: ModuleAttendance) => {
    setSelectedModule(module);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-400 to-orange-400 p-8"> {/* Updated gradient here */}
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-xl space-y-6">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Attendance Overview</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map((module, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg cursor-pointer"
              onClick={() => handleModuleClick(module)}
            >
              <h2
                className={`text-xl font-semibold ${module.percentage < 80 ? 'text-red-500' : 'text-green-800'}`}
              >
                {module.moduleName}
              </h2>
              <p className="text-sm text-gray-500">
                {module.attendedClasses} / {module.attendedClasses + module.missedClasses} classes attended
              </p>
              <p className={`text-sm ${module.percentage < 80 ? 'text-red-500' : 'text-green-500'}`}>
                Attendance: {module.percentage}%
              </p>
            </div>
          ))}
        </div>

        {/* If a module is selected, show the chart */}
        {selectedModule && (
          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-4">Attendance Chart for {selectedModule.moduleName}</h2>
            <AttendanceChart
              attendedClasses={selectedModule.attendedClasses}
              missedClasses={selectedModule.missedClasses}
              percentage={selectedModule.percentage}
              module={selectedModule.moduleName}
              weeklyAttendance={selectedModule.weeklyAttendance}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AttendancePage;

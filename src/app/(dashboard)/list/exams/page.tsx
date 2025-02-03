"use client";

import { useState } from "react";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { examsData } from "@/lib/data";
import ExamModal from "@/components/ExamModal"; // Make sure to import ExamModal

type Exam = {
  id: number;
  subject: string;
  class: string;
  time: string;
  date: string;
};

const columns = [
  {
    header: "Subject Name",
    accessor: "subject",
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },
  {
    header: "Time",
    accessor: "time",
    className: "hidden md:table-cell",
  },
];

const ExamListPage = () => {
  const [modalOpen, setModalOpen] = useState(false); // State to track modal visibility
  const [examDetails, setExamDetails] = useState<Exam | null>(null); // State to store exam details
  
  const handleExamClick = (exam: Exam) => {
    setExamDetails(exam);
    setModalOpen(true); // Open modal when exam is clicked
  };

  const renderRow = (item: Exam) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight cursor-pointer"
      onClick={() => handleExamClick(item)} // Handle the row click
    >
      <td className="flex items-center gap-4 p-6 font-medium text-lg text-gray-800">{item.subject}</td>
      <td className="hidden md:table-cell text-gray-600">{item.class}</td>
      <td className="hidden md:table-cell">{item.date}</td>
      <td className="hidden md:table-cell">{item.time}</td>
    </tr>
  );

  return (
    <div className="bg-gradient-to-r from-pink-200 via-orange-300 to-purple-600 min-h-screen p-8">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-xl space-y-6">
        {/* TOP */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">All Exams</h1>
          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
            <TableSearch />
          </div>
        </div>

        {/* LIST */}
        <Table columns={columns} renderRow={renderRow} data={examsData} />
        {/* PAGINATION */}
        <Pagination />
      </div>

      {/* Modal Popup */}
      {examDetails && (
        <ExamModal
          isOpen={modalOpen}
          exam={examDetails}
          onClose={() => setModalOpen(false)} // Close modal when clicked
        />
      )}
    </div>
  );
};

export default ExamListPage;

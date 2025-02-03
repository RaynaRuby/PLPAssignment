"use client";

import { useState } from "react";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import LecturerModal from "@/components/LecturerModal"; // Import the modal component
import { role, subjectsData } from "@/lib/data";

type Subject = {
  id: number;
  name: string;
  teachers: string[];
  desc: string;
  email: string;
  phone: string;
  subjects: string[];
  classes: string[];
};

const columns = [
  {
    header: "Subject Name",
    accessor: "name",
  },
  {
    header: "Teachers",
    accessor: "teachers",
    className: "hidden md:table-cell",
  },
];

const SubjectListPage = () => {
  const [modalOpen, setModalOpen] = useState(false); // State to track modal visibility
  const [lecturerDetails, setLecturerDetails] = useState<any>(null); // State to store lecturer details

  const handleLecturerClick = (lecturer: any) => {
    setLecturerDetails(lecturer);
    setModalOpen(true); // Open modal when lecturer is clicked
  };

  const renderRow = (item: Subject) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight transition-all duration-200 ease-in-out"
    >
      <td className="flex items-center gap-4 p-6 font-medium text-lg text-gray-800">{item.name}</td>
      <td className="hidden md:table-cell text-gray-600">
        {item.teachers.map((teacher, index) => (
          <span
            key={index}
            onClick={() => handleLecturerClick(item)}
            className="text-blue-600 cursor-pointer hover:underline"
          >
            {teacher}
            {index < item.teachers.length - 1 && ", "}
          </span>
        ))}
      </td>
    </tr>
  );

  return (
    <div className="bg-gradient-to-r from-purple-200 via-pink-100 to-yellow-200 min-h-screen p-8">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-xl space-y-6">
        {/* TOP */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">All Subjects</h1>
          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
            <TableSearch />
          </div>
        </div>

        {/* LIST */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <Table columns={columns} renderRow={renderRow} data={subjectsData} />
        </div>

        {/* PAGINATION */}
        <div className="mt-6">
          <Pagination />
        </div>
      </div>

      {/* Modal Popup */}
      <LecturerModal
        isOpen={modalOpen}
        lecturer={lecturerDetails}
        onClose={() => setModalOpen(false)} // Close modal when clicked
      />
    </div>
  );
};

export default SubjectListPage;

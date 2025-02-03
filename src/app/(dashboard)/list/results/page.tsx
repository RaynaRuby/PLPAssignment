"use client";
import { useState } from "react";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { resultsData, role } from "@/lib/data";
import Image from "next/image";

type Result = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  student: string;
  type: "exam" | "assignment";
  date: string;
  score: number;
};

const columns = [
  {
    header: "Module Name",
    accessor: "subject",
  },
  {
    header: "Score",
    accessor: "score",
    className: "hidden md:table-cell",
  },
  {
    header: "Lecturer",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },
  {
    header: "Class",
    accessor: "class",
    className: "hidden md:table-cell",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },
];

const ResultListPage = () => {
  const renderRow = (item: Result) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight transition-all duration-200 ease-in-out"
    >
      <td className="flex items-center gap-4 p-6 font-medium text-lg text-gray-800">{item.subject}</td>
      <td className="hidden md:table-cell text-gray-600">{item.score}</td>
      <td className="hidden md:table-cell text-gray-600">{item.teacher}</td>
      <td className="hidden md:table-cell text-gray-600">{item.class}</td>
      <td className="hidden md:table-cell text-gray-600">{item.date}</td>
    </tr>
  );

  return (
    <div className="bg-gradient-to-r from-teal-400 via-purple-500 to-indigo-600 min-h-screen p-8">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-xl space-y-6">
        {/* TOP */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">All Results</h1>
          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
            <TableSearch />
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-lamaYellow hover:bg-lamaYellowLight cursor-pointer transition-all duration-200 ease-in-out">
                <Image src="/filter.png" alt="Filter" width={16} height={16} />
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-lamaYellow hover:bg-lamaYellowLight cursor-pointer transition-all duration-200 ease-in-out">
                <Image src="/sort.png" alt="Sort" width={16} height={16} />
              </div>
            </div>
          </div>
        </div>

        {/* LIST */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <Table columns={columns} renderRow={renderRow} data={resultsData} />
        </div>

        {/* PAGINATION */}
        <div className="mt-6">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default ResultListPage;

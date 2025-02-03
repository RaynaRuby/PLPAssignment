import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { assignmentsData, role } from "@/lib/data";
import Image from "next/image";

type Assignment = {
  id: number;
  subject: string;
  class: string;
  assignment: string;
  dueDate: string;
};

const columns = [
  {
    header: "Subject Name",
    accessor: "name",
  },
  {
    header: "Assignment",
    accessor: "assignment",
    className: "hidden md:table-cell",
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Due Date",
    accessor: "dueDate",
    className: "hidden md:table-cell",
  },
];

const AssignmentListPage = () => {
  const renderRow = (item: Assignment) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">{item.subject}</td>
      <td className="hidden md:table-cell">{item.assignment}</td>
      <td>{item.class}</td>
      <td className="hidden md:table-cell">{item.dueDate}</td>
    </tr>
  );

  return (
    <div className="bg-gradient-to-r from-orange-400 via-yellow-300 to-teal-400 min-h-screen p-8">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-xl space-y-6">
        {/* TOP */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">All Assignments</h1>
          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
            <TableSearch />
          </div>
        </div>

        {/* LIST */}
        <Table columns={columns} renderRow={renderRow} data={assignmentsData} />
        {/* PAGINATION */}
        <Pagination />
      </div>
    </div>
  );
};

export default AssignmentListPage;

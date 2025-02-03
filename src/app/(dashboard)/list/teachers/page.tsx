import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, teachersData } from "@/lib/data";

type Teacher = {
  id: number;
  teacherId: string;
  name: string;
  email?: string;
  phone: string;
  subjects: string[];
  classes: string[];
  desc: string;
};

const columns = [
  {
    header: "Name",
    accessor: "name",
  },
  {
    header: "Modules",
    accessor: "modules",
    className: "hidden md:table-cell",
  },
  {
    header: "Classes",
    accessor: "classes",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Email",
    accessor: "email",
    className: "hidden lg:table-cell",
  },
];

const TeacherListPage = () => {
  const renderRow = (item: Teacher) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item?.desc}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.subjects.join(",")}</td>
      <td className="hidden md:table-cell">{item.classes.join(",")}</td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden md:table-cell">{item.email}</td>
    </tr>
  );

  return (
    <div className="bg-gradient-to-r from-lime-300 via-lime-200 to-lavender-300 min-h-screen p-8">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-xl space-y-6">
        {/* TOP */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">All Teachers</h1>
          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
            <TableSearch />
          </div>
        </div>

        {/* LIST */}
        <Table columns={columns} renderRow={renderRow} data={teachersData} />
        
        {/* PAGINATION */}
        <Pagination />
      </div>
    </div>
  );
};

export default TeacherListPage;

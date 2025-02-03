import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { eventsData, role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Event = {
  id: number;
  title: string;
  venue: string;
  date: string;
  startTime: string;
  endTime: string;
};

const columns = [
  {
    header: "Title",
    accessor: "title",
  },
  {
    header: "Venue",
    accessor: "venue",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },
  {
    header: "Start Time",
    accessor: "startTime",
    className: "hidden md:table-cell",
  },
  {
    header: "End Time",
    accessor: "endTime",
    className: "hidden md:table-cell",
  },
];

const EventListPage = () => {
  const renderRow = (item: Event) => (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
      <Link href={`/list/events/${item.id}`} passHref>
        <td className="flex items-center gap-4 p-4 cursor-pointer">{item.title}</td>
      </Link>
      <td>{item.venue}</td>
      <td className="hidden md:table-cell">{item.date}</td>
      <td className="hidden md:table-cell">{item.startTime}</td>
      <td className="hidden md:table-cell">{item.endTime}</td>
    </tr>
  );

  return (
    <div className="bg-gradient-to-r from-blue-400 via-pink-500 to-purple-600 min-h-screen p-8">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-xl space-y-6">
        {/* TOP */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">All Events</h1>
          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
            <TableSearch />
            <div className="flex items-center gap-4 self-end">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                <Image src="/filter.png" alt="" width={14} height={14} />
              </div>
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                <Image src="/sort.png" alt="" width={14} height={14} />
              </div>
            </div>
          </div>
        </div>

        {/* LIST */}
        <Table columns={columns} renderRow={renderRow} data={eventsData} />
        {/* PAGINATION */}
        <Pagination />
      </div>
    </div>
  );
};

export default EventListPage;

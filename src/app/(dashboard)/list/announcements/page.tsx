"use client";
import { useState } from "react";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { announcementsData } from "@/lib/data";
import Image from "next/image";

type Announcement = {
  id: number;
  module: string;
  title: string;
  class: string;
  date: string;
  details: string;  // Add a details field for full announcement content
};

const columns = [
  {
    header: "Title",
    accessor: "title",
  },
  {
    header: "Module",
    accessor: "module",
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
];

const AnnouncementListPage = () => {
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<Announcement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = (announcement: Announcement) => {
    setSelectedAnnouncement(announcement);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAnnouncement(null);
  };

  const renderRow = (item: Announcement) => (
    <tr
      key={item.id}
      className="border-b border-gray-300 even:bg-gray-50 text-sm hover:bg-lamaPurpleLight transition-all duration-200 ease-in-out cursor-pointer"
      onClick={() => openModal(item)} // Open modal on row click
    >
      <td className="p-6 font-semibold text-md text-gray-800">{item.title}</td>
      <td className="text-gray-600">{item.module}</td>
      <td className="text-gray-600">{item.class}</td>
      <td className="hidden md:table-cell text-gray-500">{item.date}</td>
    </tr>
  );

  const renderDetails = (details: string) => {
    return details.split("\n").map((line, index) => (
      <p key={index} className="text-gray-700">{line}</p>
    ));
  };

  return (
    <div className="bg-gradient-to-r from-blue-400 via-teal-300 to-green-400 min-h-screen p-8">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-xl space-y-6">
        {/* TOP */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">Latest Announcements</h1>
          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
            <TableSearch />
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-lamaYellow hover:bg-lamaYellowLight cursor-pointer transition-all duration-200 ease-in-out p-2">
                <Image src="/filter.png" alt="Filter" width={16} height={16} />
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-lamaYellow hover:bg-lamaYellowLight cursor-pointer transition-all duration-200 ease-in-out p-2">
                <Image src="/sort.png" alt="Sort" width={16} height={16} />
              </div>
            </div>
          </div>
        </div>

        {/* TABLE */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <Table columns={columns} renderRow={renderRow} data={announcementsData} />
        </div>

        {/* PAGINATION */}
        <div className="mt-6">
          <Pagination />
        </div>
      </div>

      {/* Modal for Announcement Details */}
      {isModalOpen && selectedAnnouncement && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-3/4 max-w-lg">
            <h2 className="text-2xl font-semibold text-gray-800">{selectedAnnouncement.title}</h2>
            <div className="mt-4">
              {renderDetails(selectedAnnouncement.details)} {/* Render each line of the details */}
            </div>
            <div className="mt-4 flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-lamaYellow text-white rounded-lg hover:bg-lamaYellowLight transition duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnnouncementListPage;

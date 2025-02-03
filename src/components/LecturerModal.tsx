import React from "react";

type LecturerModalProps = {
  isOpen: boolean;
  lecturer: any;
  onClose: () => void;
};

const LecturerModal = ({ isOpen, lecturer, onClose }: LecturerModalProps) => {
  if (!isOpen) return null; // If modal is not open, do not render

  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-8 w-96 max-w-lg"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-500 text-xl">
            ✕
          </button>
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Lecturer Details</h2>
        <div className="space-y-4">
          <div>
            <p className="font-semibold text-gray-600">Name:</p>
            <p className="text-lg text-gray-800">{lecturer.teachers}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-600">Position:</p>
            <p className="text-lg text-gray-800">{lecturer.desc}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-600">Email:</p>
            <p className="text-lg text-blue-600">
              <a href={`mailto:${lecturer.email}`}>{lecturer.email}</a>
            </p>
          </div>
          <div>
            <p className="font-semibold text-gray-600">Phone:</p>
            <p className="text-lg text-gray-800">{lecturer.phone}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-600">Subjects:</p>
            <p className="text-lg text-gray-800">{lecturer.subjects.join(", ")}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-600">Classes:</p>
            <p className="text-lg text-gray-800">{lecturer.classes.join(", ")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LecturerModal;

import React from "react";
import Image from "next/image";

interface Exam {
  subject: string;
  class: string;
  time: string;
  date: string;
}

interface ExamModalProps {
  exam: Exam;
  isOpen: boolean;
  onClose: () => void;
}

const ExamModal: React.FC<ExamModalProps> = ({ exam, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl w-96">
        <button onClick={onClose} className="absolute top-4 right-4 text-xl font-bold">
          X
        </button>
        <h2 className="text-2xl font-semibold">{exam.subject} Common Test</h2>
        <p className="mt-2 text-sm">{exam.date} at {exam.time}</p>

        {/* Description of Exam */}
        <div className="mt-4">
          <h3 className="font-semibold">Description:</h3>
          <p className="text-sm mt-2">
            This is a common test for {exam.subject} for the {exam.class} class. It will cover
            topics from the last 2 chapters of the textbook.
          </p>
        </div>

        {/* Exam Venue */}
        <div className="mt-4">
          <h3 className="font-semibold">Exam Venue:</h3>
          <div className="relative w-full h-48 mt-2">
            {/* You can replace this with a dynamic image URL */}
            <Image
              src="/map.png" // Replace with actual venue image or URL
              alt="Exam Venue"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamModal;

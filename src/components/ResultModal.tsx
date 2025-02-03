// ResultModal.tsx
import React from "react";

interface TestResult {
  testName: string;
  grade: number;
  percentage: number;
}

interface Result {
  subject: string;
  class: string;
  teacher: string;
  score: number;
  testResults: TestResult[]; // Array of test results
}

interface ResultModalProps {
  result: Result;
  isOpen: boolean;
  onClose: () => void;
}

const ResultModal: React.FC<ResultModalProps> = ({ result, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl w-96 max-w-sm">
        <button onClick={onClose} className="absolute top-4 right-4 text-xl font-bold">
          X
        </button>

        <h2 className="text-2xl font-semibold mb-4">{result.subject}</h2>
        <p className="text-sm">Class: {result.class}</p>
        <p className="text-sm">Teacher: {result.teacher}</p>
        <p className="text-sm">Overall Score: {result.score}</p>

        {/* Test Results Section */}
        <div className="mt-6">
          <h3 className="font-semibold">Test Results</h3>
          <div className="mt-4">
            {result.testResults.map((test, index) => (
              <div key={index} className="flex justify-between text-sm">
                <span>{test.testName}</span>
                <span>
                  Grade: {test.grade} | Percentage: {test.percentage}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultModal;

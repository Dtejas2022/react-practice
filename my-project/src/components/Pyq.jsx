import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const QuestionPapers = () => {
  const [selectedExam, setSelectedExam] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);

  const examsData = [
    {
      exam: "GATE CS",
      subjects: [
        {
          subject: "Computer Networks",
          years: ["2023", "2022", "2021", "2020"],
        },
        {
          subject: "Data Structures",
          years: ["2023", "2022", "2021", "2020"],
        },
      ],
    },
    {
      exam: "GATE DA",
      subjects: [
        {
          subject: "Machine Learning",
          years: ["2023", "2022", "2021", "2020"],
        },
        {
          subject: "Data Mining",
          years: ["2023", "2022", "2021", "2020"],
        },
      ],
    },
  ];

  const toggleExam = (exam) => {
    setSelectedExam(selectedExam === exam ? null : exam);
    setSelectedSubject(null);
  };

  const toggleSubject = (subject) => {
    setSelectedSubject(selectedSubject === subject ? null : subject);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Previous Year Question Papers</h1>
      <div className="space-y-6">
        {examsData.map((examData, examIndex) => (
          <div key={examIndex} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
            <div
              onClick={() => toggleExam(examData.exam)}
              className="flex justify-between items-center cursor-pointer"
            >
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                {examData.exam}
              </h2>
              {selectedExam === examData.exam ? (
                <FaChevronUp className="text-gray-600 dark:text-gray-400" />
              ) : (
                <FaChevronDown className="text-gray-600 dark:text-gray-400" />
              )}
            </div>
            {selectedExam === examData.exam && (
              <div className="mt-4 space-y-4">
                {examData.subjects.map((subjectData, subjectIndex) => (
                  <div key={subjectIndex} className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                    <div
                      onClick={() => toggleSubject(subjectData.subject)}
                      className="flex justify-between items-center cursor-pointer"
                    >
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                        {subjectData.subject}
                      </h3>
                      {selectedSubject === subjectData.subject ? (
                        <FaChevronUp className="text-gray-600 dark:text-gray-400" />
                      ) : (
                        <FaChevronDown className="text-gray-600 dark:text-gray-400" />
                      )}
                    </div>
                    {selectedSubject === subjectData.subject && (
                      <div className="mt-3 pl-6 space-y-2">
                        {subjectData.years.map((year, yearIndex) => (
                          <div
                            key={yearIndex}
                            className="bg-gray-200 dark:bg-gray-600 rounded-md p-2 cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-500"
                          >
                            <span className="text-gray-800 dark:text-gray-200">
                              {year} Question Paper
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionPapers;

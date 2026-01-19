import React, { useState } from 'react';
import curriculumData from './curriculumData.json';

export default function HomePage() {
  const [selectedCurriculum, setSelectedCurriculum] = useState(null);
  const [selectedGrade, setSelectedGrade] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900">Global Scholar Quiz</h1>
        <p className="text-gray-600 mt-2">Select your path to start learning</p>
      </header>

      <main className="max-w-4xl mx-auto space-y-10">
        {/* 1. Select Curriculum */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-800">1. Choose Curriculum</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {curriculumData.curricula.map((curr) => (
              <button
                key={curr.id}
                onClick={() => { setSelectedCurriculum(curr); setSelectedGrade(null); }}
                className={`p-4 rounded-xl border-2 transition-all ${
                  selectedCurriculum?.id === curr.id 
                  ? 'border-blue-500 bg-blue-50 text-blue-700' 
                  : 'border-gray-200 bg-white hover:border-blue-300'
                }`}
              >
                {curr.name}
              </button>
            ))}
          </div>
        </section>

        {/* 2. Select Grade (Only shows after curriculum is picked) */}
        {selectedCurriculum && (
          <section className="animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">2. Select Grade</h2>
            <div className="flex flex-wrap gap-3">
              {selectedCurriculum.grades.map((grade) => (
                <button
                  key={grade}
                  onClick={() => setSelectedGrade(grade)}
                  className={`px-6 py-2 rounded-full border ${
                    selectedGrade === grade 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {grade}
                </button>
              ))}
            </div>
          </section>
        )}

        {/* 3. Start Button */}
        {selectedGrade && (
          <div className="text-center pt-10">
            <button className="bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-full text-xl font-bold shadow-lg transform transition hover:scale-105">
              Go to {selectedCurriculum.name} - {selectedGrade}
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

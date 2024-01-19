

import SemesterElement from "./SemesterElement.tsx";
import SemesterButton from "./SemesterButton.tsx";
import {useState} from "react";

export default function SubjectElement() {
    const [count, setCount] = useState(1);
    const [numberSemester, setNumberSemester] = useState<number[]>([]);
    const [allAverages, setAllAverages] = useState<number[]>([]);

    const increment = () => {
        if (count < 9) {
            setCount(count + 1);
            setNumberSemester([...numberSemester, count]);
        }
    };

    const averageChange = (semesterNumber: number, newAverage: number) => {
        setAllAverages((prevAverages) => {
            const updatedAverages = [...prevAverages];
            updatedAverages[semesterNumber - 1] = newAverage;
            return updatedAverages;
        });
    };

    const subjectAverage =   allAverages.length > 0 ? allAverages.reduce((a, b) => a + b) / allAverages.length : 0;


    const elementSemester = numberSemester.map((semesterNumber) => (
        <SemesterElement
            key={semesterNumber}
            semesterNumber={semesterNumber}
            onAverageChange={(newAverage) => averageChange(semesterNumber, newAverage)}
        />
    ));

    return (
        <>
            <section aria-labelledby="section-1-title">
                <h2 className="sr-only" id="section-1-title">Grades</h2>
                <div className="overflow-hidden rounded-lg bg-white shadow">
                    <div className="p-6">
                        <div className="md:flex md:items-center md:justify-between">
                            <div className="min-w-0 flex-1">
                                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                                    Mathématiques
                                </h2>
                            </div>
                            <div className="mt-4 flex md:ml-4 md:mt-0">
                <span className="inline-flex items-center gap-x-1.5 rounded-md px-3 py-1 text-lg font-bold text-gray-900 ring-1 ring-inset ring-gray-200">
                  {subjectAverage}
                </span>
                            </div>
                        </div>
                        <div className="mt-6 border-t border-gray-100">
                            <dl className="divide-y divide-gray-100">
                                {elementSemester}
                                <SemesterButton onClick={increment} />
                            </dl>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

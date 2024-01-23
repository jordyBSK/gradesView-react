import AverageElement from "../AverageElement.tsx";
import SemesterButton from "../SemesterButton.tsx";
import SemesterElement from "../SemesterElement.tsx";
import {useState} from "react";

export default function GlobalSubject({name, state:[allSemester, setAllSemester]}:{name: string, state:[number[][], React.Dispatch<React.SetStateAction<number[][]>>]}) {
    const [allAverages, setAllAverages] = useState<number[]>([]);


    const averageChange = (semesterNumber: number, newAverage: number) => {
        setAllAverages((oldAverages) => {
            const updatedAverages = [...oldAverages];
            updatedAverages[semesterNumber - 1] = newAverage;
            return updatedAverages;
        });
    };

    const addSemester = () => {
        setAllSemester([...allSemester, []])
    };


    const subjectAverage = allSemester.length > 0
        ? allSemester.flat().reduce((a, b) => a + b, 0) / (allAverages.length > 0 ? allAverages.length : 1) : 0;
    const roundAverage = Math.round(subjectAverage * 2) / 2;


    const elementSemester = allSemester.map((allGrades,index) => (
        <SemesterElement
            grades={allGrades}
            semesterNumber={index + 1}
            onAverageChange={(newAverage) => averageChange(index, newAverage)}
        />
        ));
    return <>
        <section aria-labelledby="section-1-title">
            <h2 className="sr-only" id="section-1-title">Grades</h2>
            <div className="overflow-hidden rounded-lg bg-white shadow">
                <div className="p-6">
                    <div className="md:flex md:items-center md:justify-between">
                        <div className="min-w-0 flex-1">
                            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                                {name}
                            </h2>
                        </div>
                        <div className="mt-4 flex md:ml-4 md:mt-0">
                            <AverageElement average={roundAverage} />

                        </div>
                    </div>
                    <div className="mt-6 border-t border-gray-100">
                        <dl className="divide-y divide-gray-100">
                            {elementSemester}
                            <SemesterButton onClick={addSemester} />
                        </dl>
                    </div>
                </div>
            </div>
        </section>
    </>
}
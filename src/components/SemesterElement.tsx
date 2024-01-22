import React, { useState, useEffect } from "react";
import AverageElement from "./AverageElement.tsx";
import GradeElement from "./GradeElement.tsx";
import { InputElement } from "./InputElement.tsx";


interface SemesterProps {
    semesterNumber: number;
    onAverageChange: (newAverage: number) => void;
}

export default function SemesterElement({ semesterNumber, onAverageChange }: SemesterProps) {
    const [allGrades, setAllGrades] = useState<number[]>([]);
    const [grade, setGrade] = useState<number | string>();

    const average = allGrades.length > 0 ? allGrades.reduce((a, b) => a + b) / allGrades.length : 0;
    const roundAverage = Math.round(average *2) / 2


    const elementsDeNote = allGrades.map((note) => <GradeElement grade={note} key={note} />);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGrade(parseFloat(e.target.value));
    };

    function buttonClick() {
        if (typeof grade !== "string" && grade !== undefined) {
            if (grade >= 1 && grade % 0.5 === 0 && grade <= 6) {
                setAllGrades([...allGrades, grade]);
            }
            setGrade("");
        }
    }

    useEffect(() => {
        onAverageChange(roundAverage);
    }, [allGrades, average]);

    return (
        <>
            <div className="px-4 py-6 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium text-gray-900 py-2">
                    Semestre {semesterNumber}
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-4 sm:mt-0 flex justify-between gap-x-1.5">
                    <div className="flex flex-row flex-nowrap overflow-y-scroll gap-x-1.5">
                        {elementsDeNote}
                    </div>
                    <div className="flex">
                        <div>
                            <InputElement value={grade} onChange={handleChange} onClick={buttonClick} />
                        </div>
                        <AverageElement average={roundAverage} />
                    </div>
                </dd>
            </div>
        </>
    );
}

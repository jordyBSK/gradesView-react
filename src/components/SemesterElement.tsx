import AverageElement from "./averageElement.js";
import {useState} from "react";
import GradeElement from "./gradeElement.tsx";

export default function SemesterElement({semesterNumber}:{semesterNumber:number}) {

    const [allGrades, setAllGrades] = useState<number[]>([]);

    const [grade, setGrade] = useState(0)

    const elementsDeNote = allGrades.map((note) => (
        <GradeElement grade={note} />
    ));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGrade(parseFloat(e.target.value))
    }

    const buttonClick = () => {
        if(grade >= 1 && grade % 0.5 == 0 && grade < 6){
            setAllGrades([...allGrades, grade]);
            setGrade(0)
        }else {
            setGrade(0)
        }
    };
    const average = allGrades.length > 0 ? allGrades.reduce((a, b) => a + b)/allGrades.length : null;

    return (
        <>

            <div
                className="px-4 py-6 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-0"
            >
                <dt className="text-sm font-medium text-gray-900 py-2">
                    Semestre {semesterNumber}
                </dt>
                <dd
                    className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-4 sm:mt-0 flex justify-between gap-x-1.5"
                >
                    <div
                        className="flex flex-row flex-nowrap overflow-y-scroll gap-x-1.5"
                    >

                        {elementsDeNote}

                    </div>
                    <div className="flex">
                        <div>
                            <label htmlFor="sem1" className="sr-only"
                            >Search candidates</label
                            >
                            <div className="flex rounded-md shadow-sm">
                                <div
                                    className="relative flex flex-grow items-stretch focus-within:z-10"
                                >
                                    <input
                                        type="number"
                                        name="number"
                                        value={grade}
                                        onChange={handleChange}
                                        id="sem1"
                                        className="block w-14 rounded-none rounded-l-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                                        placeholder="4"
                                    />
                                </div>
                                <button
                                    onClick={buttonClick}
                                    type="button"
                                    className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                >
                                    <svg
                                        className="-ml-0.5 h-5 w-5 text-gray-400"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M2 3.75A.75.75 0 012.75 3h11.5a.75.75 0 010 1.5H2.75A.75.75 0 012 3.75zM2 7.5a.75.75 0 01.75-.75h6.365a.75.75 0 010 1.5H2.75A.75.75 0 012 7.5zM14 7a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02l-1.95-2.1v6.59a.75.75 0 01-1.5 0V9.66l-1.95 2.1a.75.75 0 11-1.1-1.02l3.25-3.5A.75.75 0 0114 7zM2 11.25a.75.75 0 01.75-.75H7A.75.75 0 017 12H2.75a.75.75 0 01-.75-.75z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <AverageElement average={average}/>
                    </div>
                </dd>
            </div>
        </>
    )
}
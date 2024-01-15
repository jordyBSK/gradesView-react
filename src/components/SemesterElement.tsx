import AverageElement from "./AverageElement.tsx";
import {useState} from "react";
import GradeElement from "./gradeElement.tsx";
import {InputElement} from "./InputElement.tsx";



export default function SemesterElement({semesterNumber}:{semesterNumber:number}) {

    const [allGrades, setAllGrades] = useState<number[]>([]);

    const [grade, setGrade] = useState<number>()

    const elementsDeNote = allGrades.map((note) => (
        <GradeElement grade={note} />
    ));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGrade(parseFloat(e.target.value))
    }

    const buttonClick = () => {
        if (grade === undefined) {
            console.log('Aucune note na été indiquée')
        }else if(grade >= 1 && grade % 0.5 == 0 && grade <= 6){
            setAllGrades([...allGrades, grade]);
            setGrade(0)
        }else {
            setGrade(0)
        }
    };
    const average = allGrades.length > 0 ? allGrades.reduce((a, b) => a + b)/allGrades.length : 0;

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
                        <InputElement value={grade} onChange={handleChange} onClick={buttonClick} />
                        </div>
                        <AverageElement average={average}/>
                    </div>
                </dd>
            </div>
        </>
    )
}
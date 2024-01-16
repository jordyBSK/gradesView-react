import GradeSvg from "./GradeSvg.tsx";

export default function SubjectAverage({subjectAverage}:{subjectAverage:number}){

    return (
        <div className="md:flex md:items-center md:justify-between">
            <div className="min-w-0 flex-1">
                <h2
                    className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight"
                >
                    Mathématiques
                </h2>
            </div>
            <div className="mt-4 flex md:ml-4 md:mt-0">
                        <span
                            className="inline-flex items-center gap-x-1.5 rounded-md px-3 py-1 text-lg font-bold text-gray-900 ring-1 ring-inset ring-gray-200"
                        >
                     <GradeSvg grade={subjectAverage} />
                            {subjectAverage}
                        </span>
            </div>
        </div>
    )

}

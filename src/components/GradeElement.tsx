import GradeSvg from "./GradeSvg.tsx";
export default function GradeElement({grade}:{grade:number}) {
    return (
        <>

        <span
            className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-2 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200"
        >

                                    <GradeSvg grade={grade} />
                                  <circle cx="3" cy="3" r="3"/>

            {grade}
                              </span>
        </>
    )
}

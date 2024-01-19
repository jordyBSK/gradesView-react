import GradeSvg from "./GradeSvg.tsx";

export default function AverageElement({average}:{average:number}) {

if (average < 1)return
    return(
        <>
                <span
                    className="ml-1 inline-flex items-center gap-x-1.5 rounded-md px-2 py-2 text-sm font-bold text-gray-900 ring-1 ring-inset ring-gray-300"

                >
                       <GradeSvg grade={average} />
                    {average}
                              </span>
        </>
    )
}
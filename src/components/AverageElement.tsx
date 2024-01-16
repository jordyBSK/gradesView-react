import GradeSvg from "./GradeSvg.tsx";

export default function AverageElement({average}:{average:number}) {
let Class = ""

if (average < 1){
    Class = "hidden"
}else {
    Class = "ml-1 inline-flex items-center gap-x-1.5 rounded-md px-2 py-2 text-sm font-bold text-gray-900 ring-1 ring-inset ring-gray-300"
}
    return(
        <>
                <span
                    className={Class}

                >
                       <GradeSvg grade={average} />
                    {average}
                              </span>
        </>
    )
}
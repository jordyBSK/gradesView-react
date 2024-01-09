
export default function GradeElement({grade}:{grade:number}) {
let classColor = ''

    if (grade > 4) {
classColor= 'fill-green-500 h-1.5 w-1.5';
    } else if (grade < 4) {
        classColor = 'fill-red-500 h-1.5 w-1.5';
    } else {
        classColor = 'fill-yellow-500 h-1.5 w-1.5';
    }

    return (
        <>

        <span
            className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-2 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200"
        >
                                <svg
                                    className={classColor}
                                    viewBox="0 0 6 6"
                                    aria-hidden="true"
                                >
                                  <circle cx="3" cy="3" r="3"/>
                                </svg>
            {grade}
                              </span>
        </>
    )
}

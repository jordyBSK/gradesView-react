
export default function NavBarElement() {
    return (
        <div className="grid grid-cols-3 items-center gap-8">
            <div className="col-span-2">
                <nav className="flex space-x-4">
                    <a
                        href="#"
                        className="text-white font-bold rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm hover:bg-opacity-10"
                    >
                        Math</a
                    >
                    <a
                        href="#"
                        className="text-sky-100 rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10"
                    >
                        Société</a
                    >
                    <a
                        href="#"
                        className="text-sky-100 rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10"
                    >
                        Anglais</a
                    >
                    <a
                        href="#"
                        className="text-sky-100 rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10"
                    >
                        Modules EPSIC</a
                    >
                    <a
                        href="#"
                        className="text-sky-100 rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10"
                    >
                        CIE</a
                    >
                </nav>
            </div>
        </div>
    )
}
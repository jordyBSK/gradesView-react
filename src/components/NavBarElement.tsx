import {Link} from "react-router-dom";

export default function NavBarElement() {
    return (
        <div className="grid grid-cols-3 items-center gap-8">
            <div className="col-span-2">
                <nav className="flex space-x-4">
                    <Link
                        to="/"
                        className="text-white font-bold rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm hover:bg-opacity-10"
                    >
                        Math</Link>
                    <Link
                        to="/societe"
                        className="text-sky-100 rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10"
                    >
                        Société</Link
                    >
                    <Link
                        to="/anglais"
                        className="text-sky-100 rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10"
                    >
                        Anglais</Link
                    >
                    <Link
                        to="/epsic"
                        className="text-sky-100 rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10"
                    >
                        Modules EPSIC</Link
                    >
                    <Link
                        to="/cie"
                        className="text-sky-100 rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10"
                    >
                        CIE</Link
                    >
                </nav>
            </div>
        </div>
    )
}
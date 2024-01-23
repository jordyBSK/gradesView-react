import {useState} from "react";
import GlobalSubject from "./globalElement.tsx";

export default function Societe() {
    const name = "Société et Commerce"
    const [grades, setGrades] = useState<number[][]>([[]])

    return <GlobalSubject name={name} state={[grades, setGrades]} />
}
import {useState} from "react";
import GlobalSubject from "./globalElement.tsx";

export default function Mathematiques() {
    const name = "Mathematiques"
    const [grades, setGrades] = useState<number[][]>([[]])

    return <GlobalSubject name={name} state={[grades, setGrades]} />
}
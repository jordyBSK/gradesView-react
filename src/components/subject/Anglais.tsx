import {useState} from "react";
import GlobalSubject from "./globalElement.tsx";

export default function Anglais() {
    const name = "Anglais"
    const [grades, setGrades] = useState<number[][]>([[]])

    return <GlobalSubject name={name} state={[grades, setGrades]} />
}
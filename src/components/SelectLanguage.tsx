import { AUTO_LANGUAGE, LANGUAGES } from "../constants/languages";
import React from "react";
import { Languages, FromLanguage, SelectionType } from "../interfaces/general";

type Props =
    | { type: SelectionType.From, value: FromLanguage, onChange: (language: FromLanguage) => void }
    | { type: SelectionType.To, value: Languages, onChange: (language: Languages) => void }

export const SelectLanguage = ({ onChange, type, value }: Props) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value as Languages)
    }
    return (
        <select defaultValue={AUTO_LANGUAGE} onChange={handleChange} value={value}>
            {type === SelectionType.From && <option value={AUTO_LANGUAGE}>Auto</option>}
            {Object.entries(LANGUAGES).map(([key, value]) => (
                <option key={key} value={key}>{value}</option>
            ))}
        </select>
    )
}
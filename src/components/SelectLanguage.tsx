import { AUTO_LANGUAGE, LANGUAGES, TARGET_LANGUAGES } from "../constants/languages";
import React from "react";
import { FromLanguage, SelectionType, ToLanguages } from "../interfaces/general";

type Props =
    | { type: SelectionType.From, value: FromLanguage, onChange: (language: FromLanguage) => void }
    | { type: SelectionType.To, value: ToLanguages, onChange: (language: ToLanguages) => void }

export const SelectLanguage = ({ onChange, type, value }: Props) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value as FromLanguage)
    }

    return (
        <select onChange={handleChange} value={value}>
            {type === SelectionType.From && <option value={AUTO_LANGUAGE}>Auto</option>}
            {type === SelectionType.From ? Object.entries(LANGUAGES).map(([key, value]) => (
                <option key={key} value={key}>{value}</option>
            )) : Object.entries(TARGET_LANGUAGES).map(([key, value]) => (
                <option key={key} value={key}>{value}</option>
            ))}
        </select>
    )
}
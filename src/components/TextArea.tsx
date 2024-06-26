
import React from "react"
import { SelectionType } from "../interfaces/general"

interface Props {
    type: SelectionType
    placeholder: string
    value: string
    loading?: boolean
    onChange: (value: string) => void
}

const commonStyles = "border-2 h-32 max-h-36"

export const TextArea = ({ type, placeholder, value, onChange }: Props) => {
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(event.target.value)
    }
    return (
        <textarea
            autoFocus={type === SelectionType.From}
            placeholder={placeholder}
            value={value}
            disabled={type === SelectionType.To}
            onChange={handleChange}
            className={type === SelectionType.From ? `${commonStyles}` : `${commonStyles} bg-slate-200`}
        ></textarea>
    )
}
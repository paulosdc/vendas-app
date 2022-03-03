import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    onChange?: (value: any) => void;
    label: string;
    columnClasses?: string;
    id: string;
}

export const Input: React.FC<InputProps> = ({onChange, label, columnClasses, id, ... props}:InputProps) => {
    return (
        <div className={`field column ${columnClasses}`}>
            <label htmlFor="inputCodigo" className="label"> {label} </label>
            <div className="control">
                <input className="input" id={id} {... props} onChange={event => {
                    if(onChange){
                        onChange(event.target.value)
                    }
                }} />
            </div>
        </div>
    )
}
import { InputHTMLAttributes } from "react";
import SearchIcon from "../seach-icon";
import { InputContainer, InputPrimary } from "./style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    value: string,
    handleChange: (value: string) => void

}

export function PrimaryInputSearchIcon(props: InputProps){
    return(
        <InputContainer>
            <InputPrimary onChange={(event) => props.handleChange(event.target.value)} {...props}/>
            <SearchIcon />
        </InputContainer>
    )
}
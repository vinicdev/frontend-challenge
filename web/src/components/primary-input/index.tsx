import { InputHTMLAttributes } from "react";
import SearchIcon from "../seach-icon";
import { InputContainer, InputPrimary } from "./style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

export function PrimaryInputSearchIcon(props: InputProps){
    return(
        <InputContainer>
            <InputPrimary {...props}/>
            <SearchIcon />
        </InputContainer>
    )
}
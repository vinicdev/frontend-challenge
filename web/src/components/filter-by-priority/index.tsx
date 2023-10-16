import { useState } from "react";
import { ArrowIcon } from "../arrow-icon";
import { FilterContainter, PriorityFilter } from "./style";
import { useFilter } from "@/hooks/useFilter";
import { PriorityTypes } from "@/types/priority-types";

export function FilterByPrioriry() {
    const [isOpen, setIsOpen] = useState(false);
    const { setPriority } = useFilter()

    const handleOpen = () => setIsOpen(prev => !prev)

    const handleUpdate = (value: PriorityTypes) => {
        setPriority(value)
        setIsOpen(false)
    }

    return (
        <FilterContainter>
            <button onClick={handleOpen}>
                Organizar por
                <ArrowIcon />
            </button>

            {isOpen &&
                <PriorityFilter>
                    <li onClick={() => handleUpdate(PriorityTypes.NEWS)}>Novidades</li>
                    <li onClick={() => handleUpdate(PriorityTypes.BIG_PRICE)}>Preço: Maior - menor</li>
                    <li onClick={() => handleUpdate(PriorityTypes.MINOR_PRICE)}>Preço: Menor - maior</li>
                    <li onClick={() => handleUpdate(PriorityTypes.POPULARITY)}>Mais Vendidos</li>


                </PriorityFilter>
            }



        </FilterContainter>
    )
}
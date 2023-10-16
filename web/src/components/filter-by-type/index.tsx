"use client"
import { useFilter } from "@/hooks/useFilter";
import { FilterItem, FilterList } from "./style";
import { FilterType } from "@/types/filter-types";

export interface FilterItemProps {
    selected: boolean
}

export default function FilterByType() {
    const { type, setType } = useFilter();

    const handleChangeType = (value: FilterType) => {
        setType(value);
    }

    return (
        <FilterList>
            <FilterItem
                selected={type === FilterType.ALL}
                onClick={() => handleChangeType(FilterType.ALL)}
            >
                Todos os produtos
            </FilterItem>

            <FilterItem
                selected={type === FilterType.SHIRT}
                onClick={() => handleChangeType(FilterType.SHIRT)}
            >
                Camisetas
            </FilterItem>

            <FilterItem
                selected={type === FilterType.MUG}
                onClick={() => handleChangeType(FilterType.MUG)}
            >
                Canecas
            </FilterItem>
        </FilterList>
    )
}
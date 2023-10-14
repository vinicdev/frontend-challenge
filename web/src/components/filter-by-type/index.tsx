"use client"
import { FilterItem, FilterList } from "./style";

export interface FilterItemProps {
    selected: boolean
}

export default function FilterByType() {
    return (
        <FilterList>
            <FilterItem selected>Todos os produtos</FilterItem>
            <FilterItem selected={false}>Camisetas</FilterItem>
            <FilterItem selected={false}>Canecas</FilterItem>
        </FilterList>
    )
}
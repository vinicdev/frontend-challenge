"use client"

import { FilterByPrioriry } from "../filter-by-priority";
import FilterByType from "../filter-by-type";
import { FilterContainer } from "./style";

interface FilterBar {

}

export default function FilterBar(props: FilterBar) {
    return (
        <FilterContainer>
            <FilterByType />
            <FilterByPrioriry />
        </FilterContainer>
    )
}
import FilterByType from "../filter-by-type";

interface FilterBar {

}

export default function FilterBar(props: FilterBar) {
    return (
        <>
            <div>
                <FilterByType />
            </div>
        </>
    )
}
import styled from "styled-components";
import { FilterItemProps } from ".";

export const FilterList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px; 
    list-style: none;
`;

export const FilterItem = styled.li<FilterItemProps>`
    font-family: inherit;
    font-weight: ${props => props.selected ? '600' : '400'};
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    text-transform: uppercase;
    color: var(--text-dark);
    cursor: pointer;

    border-bottom: ${props => props.selected ? '4px solid var(--orange-low)' : 'none'};
`;

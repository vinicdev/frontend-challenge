import styled from "styled-components";

export const FilterContainter = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    button {
        border: none;
        background-color: transparent;
        cursor: pointer;
        font-family: inherit;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: var(--text-dark);

        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            margin-left: 8px;
        }
    }
`;

export const PriorityFilter = styled.ul`
    width: 250px;
    position: absolute;
    background-color: #ffffff;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 12px 16px;
    z-index: 999;
    list-style: none;

    top: 100%;

    li {
        color: var(--text-dark);
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        cursor: pointer;
    }

    li + li {
        margin-top: 4px;
    }

`;
import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 160px;
    align-items: center;

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;
    }
`;

export const Logo = styled.a`
    color: var(--logo-color);
    font-weight: 400;
    font-size: 40px;
    line-height: 150%;
`;
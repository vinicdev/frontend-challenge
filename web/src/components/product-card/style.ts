import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(10px) ;
    border-radius: 0px 0px 4px 4px;
    width: 256px;
    
    img {
        width: 256px;
        height: 300px;
        object-fit: cover;
    }

    h3 {
        font-weight: 300;
        font-size: 16px;
        line-height: 150%;
        color: var(--text-dark-2);
    }

    p {
        font-size: 14px;
        font-weight: 600;
        line-height: 150%;
        color: var(--shapes-dark);
    }

    div {
        display: flex;
        align-items: start;
        justify-content: center;
        flex-direction: column;

        padding: 8px 0;

        > div {
            width: 228px;
            height: 1px;
            margin: 8px 0;
            padding: 0;
            background-color: var(--shapes);
        }    
    }

`;

import styled from "styled-components";


export const TopBar = styled.div `
    background: linear-gradient(90deg,#2474bc, #29abe2);
    height: 38px;

    .container {
        height: 100%;
    }

    .topbar-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
    }

    .today {
        color: #fff;
        font-size: 11px;
        font-family: 'Open Sans', arial, sans-serif;
    }

    .social-icons {
        dispaly: flex;
        align-items: center;
    }
 `;

export const HeaderBox = styled.header `
    box-shadow: 0 0px 10px 2px rgb(0, 0, 0, .2);

    container {
        display: flex;
        justify-content: flex-start:
    }

    img {
        width: 200px;
    }
`;
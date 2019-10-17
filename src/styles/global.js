import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    a {
        text-decoration: none;
        text-decoration-style: none;
    }

    body {
        font: 14px 'Roboto', sans-serif;
        background: #ecf1f8;
        color: #333;
        -webkit-font-smothing: antialiased !important;

    }

    footer {
        flex
    }

    .content {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    footer {
        margin-top: auto; 
        text-align: center;
    }
`;

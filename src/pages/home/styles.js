import styled from 'styled-components';

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap');

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Ubuntu', sans-serif;
    }

    .articles {
        background-color: #f8f8f8;
        padding: 50px;
        display: flex;
        min-height: 100vh;
        flex-direction: column;

        svg { 
            margin-left: 10px;
        }
    }

    .follow-me {
        padding: 50px;
        display: flex;
        flex-direction: column;

        svg { 
            margin-left: 10px;
        }
    }

    .footer { 
        background-color: rgb(46, 46, 46);
        color: white;
        text-align: center;
        padding: 20px 0;
    }
`;
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
        display: flex;
        background-color: #247BA0;
        flex-direction: column;

        .articles-holder {
            display: flex;
            padding: 50px;
            max-width: 1200px;
            margin: 0 auto;

            @media (max-width: 560px) {
                flex-direction: column;

                > div:not(:first-child){ 
                    margin-top: 50px;
                }
            }
            
            @media (min-width: 560px) {
                flex-direction: row;

                > div:not(:first-child){ 
                    margin-left: 50px;
                }
            }
        }

        .load-more {
            display: flex;
            background: white;
            margin: 0 auto;
            margin-bottom: 50px;
            padding: 10px 50px;
            font-weight: bold;
            color: gray;
            opacity: 0.5;
            transition: opacity 0.2s;
            cursor: pointer;
            
            &:hover {
                opacity: 1;
            }
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
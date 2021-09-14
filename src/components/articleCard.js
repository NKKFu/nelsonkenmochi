import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    background: white;
    overflow: hidden;
    border-radius: 5px;

    .head-img {
        height: 120px;
        overflow: hidden;
        padding: auto 0;
        display: flex;
        align-items: center;

        img {
            width: 100%;
        }
    }

    .card-body { 
        padding: 20px;
        margin: auto;
        
        .title {
            color: #3c3f42;
            font-weight: bold;
            font-size: 23px;
            text-align: left;
        }

        .description-box { 
            .description { 
                color: #65696e;
            }
        }
    }

    a { 
        margin-top: 20px;
        display: inline-flex;
        text-decoration: none;
        background: #1B98E0;
        color: #E8F1F2;
        border-radius: 3px;
        padding: 7px 14px;
        transition: opacity 0.2s;
        cursor: pointer;
        
        &:hover {
            opacity: 0.5;
        }
    }
`;

export const ArticleCard = () => {
    return (
        <Container>
            <div className="head-img">
                <img src="https://miro.medium.com/fit/c/400/268/0*32YJj7RLaOYn_GRt.jpg" />
            </div>
            <div className="card-body">
                <p className="title">How to write things</p>
                <div className="description-box">
                    <p className="description">Hey, thong thing thunk</p>
                </div>
                <Link to='/'>See more</Link>
            </div>
        </Container>
    );
}
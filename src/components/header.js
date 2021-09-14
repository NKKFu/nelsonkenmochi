import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    background: #13293D;

    .title {
        font-size: 3.3rem;
        text-align: center;
        margin: auto;
        padding: 30px 0px 0px 0px;
        border-bottom: 6px solid #0a1c2b;
        max-width: 500px;
        width: 80vw;
        color: white;
    }
    
    .page-header {
        width: 80vw;
        display: flex;
        margin: 30px auto 0 auto;
        padding: 30px;
        padding-bottom: 40px;
        flex-direction: row;
    
        a { 
            text-align: center;
            border-radius: 5px;
            flex: 1;
            min-height: 40px;
            margin: 0 5%;

            &:hover {
                opacity: 0.2;
                transition: opacity 0.2s;
            } 

            color: white;
            text-decoration: none;
            text-align: center;
            display: block;
            font-weight: bold;
            padding: 10px 0;
        }

        .selected-route {
            color: #ff4277;
        }
    }
`;

export const Header = () => {
    const path = window.location.pathname;
    
    return (
        <Container>
            <h1 className="title">Nelson Kenmochi</h1>
            <header className="page-header">
                <Link to='/' className={path === '/' && 'selected-route'}>Home</Link>
                <Link to='/aboutme' className={path === '/aboutme' && 'selected-route'}>About</Link>
                <Link to='/projects' className={path === '/projects' && 'selected-route'}>Projects</Link>
                <Link to='/' className={path === '/others' && 'selected-route'}>Others</Link>
            </header>
        </Container>
    );
}
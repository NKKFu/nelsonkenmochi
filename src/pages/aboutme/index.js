import React from 'react';
import { Header } from '../../components/header';
import { Container } from './styles';

export const AboutMe = () => {
    return (
        <Container>
            <Header />
            <div className="whoami">
                <h2 className="mx-auto title mb-5">About me
                    <svg width="32" height="32" viewBox="0 0 16 16">
                        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
                    </svg>
                </h2>
                <p className="mx-auto text-secondary description text-center">
                    Hello mate! I'm Nelson Keiji Kenmochi Filho, I have seventeen years old and I'm from Campo Grande - MS (Brazil). I'm a member of a robotic team called Team ProdiXy that partipates in many cool competitions such as Olimpíada Brasileira de Robótica (OBR), FIRST Tech Challenge (FTC) and FIRST Lego League (FLL). I'm also a medalist of Olimpíada Canguru de Matemática and Olimpíada Brasileira de Informática (OBI). I have a merit scholarship in SESI Dra. Êmina Barbosa Mustafa where I study electrotechnical, I'm at third grade of high school.
                    I'm actually a junior developer learning a lot of things at same time and I'm working with many popular tools including Unity, C#, TypeScript, Docker, Python, SQL, VS Code, GitHub, Java, Linux and many others
                </p>
            </div>
        </Container>
    )
}
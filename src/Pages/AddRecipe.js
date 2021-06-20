import React, { useState, createRef } from 'react';
import styled from 'styled-components';
import { Container } from '../Components/StyledComponents';
import recipes from '../Components/Recipes'

const H1 = styled.h1`
    font-size: 36px;
    margin: 70px 0 50px;
    font-weight: bold;
`;

const H2 = styled.h2`
    font-size: 30px;
    margin-bottom: 15px;
    font-weight: bold;
`;

const Group = styled.div`
    margin-bottom: 70px;
    dispay: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Input = styled.input`
    width: 746px;
    height: 51px;
    border: 2px solid #333;
    padding-left: 20px;
    font-size: 20px;
`;

export default function AddRecipe() {

    const [name, setName] = useState('');

    const photo = createRef();

    const check = () => {
        console.log(photo.current)
    }

    
    return (
        <Container>
            <H1>Добавление нового рецепта</H1>
            <Group>
                <H2>Название</H2>
                <Input type='text' value={name} onInput={e => setName(e.target.value)}/>
            </Group>
            <Group>
                <H2>Фотография</H2>
                <Input type="file" ref={photo}/>
                <label htmlFor={photo.current}>Блаблабла</label>
                <div onClick={check}>Проверка</div>
            </Group>
        </Container>
    )
}
 
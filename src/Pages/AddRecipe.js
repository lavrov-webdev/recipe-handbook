import React, { useState, createRef, useContext, useEffect } from 'react';
import Context from '../Context';
import styled from 'styled-components';
import { Container, StyledButton } from '../Components/StyledComponents';

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

const IngridientNameInput = styled(Input)`
    width: 524px;
    margin-right: 30px;
`;

const IngridientCountInput = styled(Input)`
    width: 192px;
`;

const AddButton = styled.button`
    display: block;
    padding: .55em 0;
    max-width: 746px;
    width: 100%;
    color: #fcfcfc;
    background-color: #3c3c3c;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 22px;
    margin-top: 30px;
`;

const StepInputWrapper = styled.li`
    width: 100%;
    counter-increment: steps;
    position: relative;

    &:not(:first-child) {
        margin-top: 20px;
    }

    &:before {
        position: absolute;
        font-size: 64px;
        font-weight: bold;
        color: #3c3c3c;
        content: counter(steps);
    }
`;

const StepInput = styled.textarea`
    min-height: 250px;
    width: 100%;
    max-width: 696px;
    border: 2px solid #333;
    padding: 20px 0 0 20px;
    font-size: 20px;
    resize: none;
    display: block;
    margin-left: 50px;
`;

const StepTrash = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    cursor: pointer;
`;

export default function AddRecipe() {

    const { recipes, setRecipes } = useContext(Context);

    const [name, setName] = useState('');

    const photo = createRef();

    const [ingidients, setIngidients] = useState({});

    const [ingidientName, setIngidientName] = useState('');

    const [ingidientCount, setIngidientCount] = useState('');

    const [steps, setSteps] = useState({0: ''});

    const [stepId, setStepId] = useState(1);

    useEffect(() => {
        setStepId(Math.max(...Object.keys(steps).map(e => parseInt(e))) + 1)
    }, [Object.keys(steps).length])

    const addIngridient = () => {
        if (ingidientName == '' || ingidientCount == '') return
        let newIngridients = JSON.parse(JSON.stringify(ingidients));
        newIngridients[ingidientName] = ingidientCount;
        setIngidients(newIngridients);
        setIngidientName('');
        setIngidientCount('');
    }

    const changeStepHandler = (value, key) => {
        let tempSteps = JSON.parse(JSON.stringify(steps));
        tempSteps[key] = value;
        setSteps(tempSteps);
    }

    const addStep = () => {
        let tempSteps = JSON.parse(JSON.stringify(steps));
        tempSteps[stepId] = '';
        setSteps(tempSteps);
    }

    const deleteStep = key => {
        if (stepId < 2) return
        let tempSteps = JSON.parse(JSON.stringify(steps));
        delete tempSteps[key];
        setSteps(tempSteps);
    }
    
    return (
        <>
            <Container>
                <H1>Добавление нового рецепта</H1>
                <Group>
                    <H2>Название</H2>
                    <Input type='text' value={name} onInput={e => setName(e.target.value)}/>
                </Group>
                <Group>
                    <H2>Фотография</H2>
                    <Input type="file" ref={photo}/>
                </Group>
                <Group>
                    <H2>Ингридиенты</H2>
                    <ul>
                        {Object.entries(ingidients).map( ([key, value]) => (
                            <li key={key}>
                                <span>{key}: </span><span>{value}</span>
                            </li>
                        ))}
                    </ul>
                    <form onSubmit={e => {e.preventDefault(); addIngridient()}} action=''>
                        <IngridientNameInput value={ingidientName} onChange={e => setIngidientName(e.target.value)}/>
                        <IngridientCountInput value={ingidientCount} onChange={e => setIngidientCount(e.target.value)}/>
                        <AddButton type='submit'>Добавить ингридиент</AddButton>
                    </form>
                </Group>
                <Group>
                    <H2>Шаги</H2>
                    <ul styles={{counterReset: 'steps'}}>
                        {Object.entries(steps).map( ([key, value]) => (
                            <StepInputWrapper key={key}> 
                                <StepInput value={value} onChange={(e) => changeStepHandler(e.target.value, key)}/>
                                <StepTrash onClick={() => deleteStep(key)}>
                                    <svg width="36" height="57" viewBox="0 0 36 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.9333 20.9C11.2958 20.9 11.6434 21.1002 11.8997 21.4565C12.156 21.8128 12.3 22.2961 12.3 22.8V45.6C12.3 46.1039 12.156 46.5872 11.8997 46.9435C11.6434 47.2998 11.2958 47.5 10.9333 47.5C10.5709 47.5 10.2232 47.2998 9.96694 46.9435C9.71064 46.5872 9.56665 46.1039 9.56665 45.6V22.8C9.56665 22.2961 9.71064 21.8128 9.96694 21.4565C10.2232 21.1002 10.5709 20.9 10.9333 20.9V20.9ZM17.7667 20.9C18.1291 20.9 18.4767 21.1002 18.733 21.4565C18.9893 21.8128 19.1333 22.2961 19.1333 22.8V45.6C19.1333 46.1039 18.9893 46.5872 18.733 46.9435C18.4767 47.2998 18.1291 47.5 17.7667 47.5C17.4042 47.5 17.0566 47.2998 16.8003 46.9435C16.544 46.5872 16.4 46.1039 16.4 45.6V22.8C16.4 22.2961 16.544 21.8128 16.8003 21.4565C17.0566 21.1002 17.4042 20.9 17.7667 20.9V20.9ZM25.9667 22.8C25.9667 22.2961 25.8227 21.8128 25.5664 21.4565C25.3101 21.1002 24.9624 20.9 24.6 20.9C24.2375 20.9 23.8899 21.1002 23.6336 21.4565C23.3773 21.8128 23.2333 22.2961 23.2333 22.8V45.6C23.2333 46.1039 23.3773 46.5872 23.6336 46.9435C23.8899 47.2998 24.2375 47.5 24.6 47.5C24.9624 47.5 25.3101 47.2998 25.5664 46.9435C25.8227 46.5872 25.9667 46.1039 25.9667 45.6V22.8Z" fill="#3C3C3C"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M35.5333 11.4C35.5333 12.4078 35.2454 13.3744 34.7328 14.087C34.2202 14.7996 33.5249 15.2 32.8 15.2H31.4333V49.4C31.4333 51.4156 30.8574 53.3487 29.8322 54.774C28.807 56.1993 27.4165 57 25.9667 57H9.56667C8.11682 57 6.72635 56.1993 5.70115 54.774C4.67595 53.3487 4.1 51.4156 4.1 49.4V15.2H2.73333C2.00841 15.2 1.31317 14.7996 0.800575 14.087C0.287975 13.3744 0 12.4078 0 11.4V7.6C0 6.59218 0.287975 5.62563 0.800575 4.91299C1.31317 4.20036 2.00841 3.8 2.73333 3.8H12.3C12.3 2.79218 12.588 1.82563 13.1006 1.11299C13.6132 0.400356 14.3084 0 15.0333 0L20.5 0C21.2249 0 21.9202 0.400356 22.4328 1.11299C22.9454 1.82563 23.2333 2.79218 23.2333 3.8H32.8C33.5249 3.8 34.2202 4.20036 34.7328 4.91299C35.2454 5.62563 35.5333 6.59218 35.5333 7.6V11.4ZM7.15587 15.2L6.83333 15.4242V49.4C6.83333 50.4078 7.12131 51.3744 7.63391 52.087C8.14651 52.7996 8.84174 53.2 9.56667 53.2H25.9667C26.6916 53.2 27.3868 52.7996 27.8994 52.087C28.412 51.3744 28.7 50.4078 28.7 49.4V15.4242L28.3775 15.2H7.15587ZM2.73333 11.4V7.6H32.8V11.4H2.73333Z" fill="#3C3C3C"/>
                                    </svg>
                                </StepTrash>
                            </StepInputWrapper>
                        ))}
                    </ul>
                    <AddButton onClick={addStep}>Добавить действие</AddButton>
                </Group>
            </Container>
            <StyledButton to='/'>Назад к списку рецептов</StyledButton>
        </>
    )
}
 
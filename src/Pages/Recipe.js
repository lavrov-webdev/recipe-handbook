import React from 'react';
import styled from 'styled-components';
import { Container } from '../Components/StyledComponents';
import recipes from '../Components/Recipes';
import { StyledButton } from '../Components/StyledComponents';

const BigImage = styled.div`
    width: 100%;
    height: 359px;
    background-image: url('${props => props.image}');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

const Title = styled.h1`
    font-size: 72px;
    font-weight: bold;
    background-color: rgba(252, 252, 252, .8);
    padding: 0 30px;
    margin: -42px 0 50px -30px;
`;

const H2 = styled.h2`
    font-size: 30px;
    margin-bottom: 15px;
`;

const Section = styled.div`
    margin-bottom: 70px;
`;

const IngridientList = styled.ul`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 50px;
    justify-content: space-between;
    align-items: flex-start;
    align-content: flex-start;
`;

const IngridienItem = styled.li`
    heigth: calc((100% - 10px) / 2);
    font-size: 16px;

    &:nth-child(n+3) {
        margin-left: 30px;
    }
`;

const StepsTitle = styled(H2)`
    margin-bottom: 40px;
`;

const StepsList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const StepsItem = styled.li`
    width: 540px;
    font-size: 14px;
    position: relative;
    padding-left: 32px;

    &:nth-child(n+3) {
        margin-top: 50px;
    }
`;

const StepsCount = styled.div`
    position: absolute;
    font-size: 96px;
    color: #CECECE;
    font-weight: bold;
    left: 0;
    top: -40px;
    z-index: -1;
`;


export default function Recipe({ match, location }) {
    const recipe = recipes[match.params.recipeId - 1];
    return (
        <>
            <BigImage image={recipe.image}/>
            <Container>
                <Title>{recipe.name}</Title>
                <Section>
                    <H2>Ингидиенты :</H2>
                    <IngridientList>
                        {Object.entries(recipe.ingredients).map(([ key, val ]) => (
                            <IngridienItem key={key}>{key} - <b>{val}</b></IngridienItem>
                        ))}
                    </IngridientList>
                </Section>
                <Section>
                    <StepsTitle>Способ приготовления :</StepsTitle>
                    <StepsList>
                       {recipe.steps.map((step, index) => (
                           <StepsItem>
                            <StepsCount>{index+1}</StepsCount>
                            <p>{step}</p>
                           </StepsItem>
                       ))}
                    </StepsList>
                </Section>
            </Container>
            <StyledButton to='/'>Назад к списку рецептов</StyledButton>
        </>
    )
}

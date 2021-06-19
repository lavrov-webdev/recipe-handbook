import React from 'react';
import styled from 'styled-components';
import RecipesList from '../Components/RecipesList';
import { Container } from '../Components/StyledComponents';
import { StyledButton } from '../Components/StyledComponents';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

const RecipesListSection = styled.section`
  margin-top: 70px;
`;

export default function HomePage() {
    return (
        <>
            <RecipesListSection>
                <Container>
                    <RecipesList itemsInRow={2}/>
                </Container>
            </RecipesListSection>
            <StyledButton to='/add-recipe'>Добавить рецепт</StyledButton>
        </>
    )
}

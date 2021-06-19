import React from 'react'
import styled, { css } from 'styled-components'
import recipes from './Recipes';
import RecipeItem from './RecipeItem';

const ResipecListStyled = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export default function RecipesList({itemsInRow}) {
    return (
        <ResipecListStyled>
            {recipes.map(recipe => <RecipeItem key={recipe.id} recipe={recipe} fr={itemsInRow}/>)}
        </ResipecListStyled>
    )
}

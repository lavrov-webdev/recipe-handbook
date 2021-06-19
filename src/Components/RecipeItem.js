import React from 'react'
import styled from 'styled-components'

const RecipeItemStyled = styled.li`
    width: ${props => {
        if (props.fr === 1) return '100%';
        return `calc((100% - 30px) / ${props.fr})`
    }};
    background-image: url('${props => props.image}');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 313px;
    position: relative;

    &:nth-child(n+3) {
        margin-top: 30px;
    }
`;

const BlackLine = styled.div`
    background-color: #3c3c3c;
    height: 64px;
    width: 333px;
    display: flex;
    align-items: center;
    padding-left: 31px;
    transition: all .6s;
    position: absolute;
    bottom: 0;
    left: 0;
    font-family: 'Cormorant', serif;
    font-size: 36px;
    font-weight: 700;
    color: #fcfcfc;
    overflow: hidden;

    ${RecipeItemStyled}:hover > & {
        width: 100%;
    }
`;

const ItemLink = styled.a`
    width: 211px;
    position: absolute;
    left: 393px;
    font-size: 24px;
    font-weight: 300;
    bottom: 50%;
    transform: translateY(50%);

    &:after {
        display: block;
        content: '';
        position: absolute;
        width: 100%;
        height: 1px;
        background-color: #fcfcfc;
        left: 0;
        bottom: -7px;
        opacity: 0;
        transition: all .3s;
    }

    &:hover:after {
        opacity: 1;
        bottom: -2px;
    }
`;

export default function RecipeItem({recipe , fr}) {
    return (
        <RecipeItemStyled fr={fr} image={recipe.image}>
            <BlackLine>
                {recipe.name}
                <ItemLink href='#'>Смотреть весь рецепт</ItemLink>
            </BlackLine>
        </RecipeItemStyled>
    )
}

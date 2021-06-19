import React from 'react'
import styled from 'styled-components'
import { Container } from './StyledComponents';

const HeaderStyled = styled.header`
    padding: 27px 0;
    background-color: #3c3c3c;
    font-size: 36px;
    font-weight: bold;
`;

export default function Header() {
    return (
        <HeaderStyled>
            <Container>
                Настольная книга рецептов
            </Container>
        </HeaderStyled>
    )
}

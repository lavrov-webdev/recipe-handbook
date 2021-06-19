import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    max-width: 1300px;
    width: 100%;
    margin: 0 auto;
`;

const StyledButton = styled(Link)`
    width: 100%;
    background-color: #3c3c3c;
    font-size: 36px;
    font-weight: bold;
    text-align: center;
    padding: 1em 0;
    display: block;
    margin-top: 100px;
    text-transform: uppercase;
`;


export {Container, StyledButton}
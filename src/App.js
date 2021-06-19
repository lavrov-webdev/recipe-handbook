import './App.css';
import styled from 'styled-components';
import { Container } from './Components/StyledComponents';
import Header from './Components/Header';
import RecipesList from './Components/RecipesList';

const RecipesListSection = styled.section`
  margin-top: 70px;
`;


function App() {
  return (
    <>
      <Header/>
      <RecipesListSection>
        <Container>
          <RecipesList itemsInRow={2}/>
        </Container>
      </RecipesListSection>
    </>
  );
}

export default App;


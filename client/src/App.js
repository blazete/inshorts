
import './App.css';
import {Box,styled} from "@mui/material"
import Header from './components/Header';
import InfoHeader from './components/InfoHeader';
import Articles from './components/Articles';

function App() {

  const Container=styled(Box)`
  width:60%;
  margin:30px auto 0 auto;
  `
  return (
    <Box className="App">
      <Header /> 
      <Container >
      <InfoHeader/>
      <Articles/>
      </Container>
    </Box>
  );
}

export default App;

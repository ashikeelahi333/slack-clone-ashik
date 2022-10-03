import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Chat from './COMPONENTS/Chat';
import Login from './COMPONENTS/Login';
import styled from 'styled-components';
import Header from './COMPONENTS/Header';
import Sidebar from './COMPONENTS/Sidebar';


function App() {
  return (
    <div className="App">
      <Router>
        <Container>
        <Header />
        <Main>
          <Sidebar />
          <Switch>
            <Route path='/room'>
              <Chat />
            </Route>
            <Route path='/'>
              <Login />
            </Route>
          </Switch>
          </Main>
        </Container>
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #454545;
  display: grid;
  grid-template-rows: 30px;
`

const Main = styled.div`
  display: grid;
  grid-template-column: 260px auto;
`
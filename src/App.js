import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Chat from "./COMPONENTS/Chat";
import Login from "./COMPONENTS/Login";
import styled from "styled-components";
import Header from "./COMPONENTS/Header";
import Sidebar from "./COMPONENTS/Sidebar";
import { auth, db } from "./firebase";
import { useEffect, useState } from "react";

function App() {
  const [rooms, setRooms] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));


  const getChannels = () => {
    db.collection("rooms").onSnapshot((snapshot) => {
      setRooms(
        snapshot.docs.map((doc) => {
          return { id: doc.id, name: doc.data().name };
        })
      );
    });
  };

  const signOut = () => {
    auth.signOut()
    .then(() => {
      localStorage.removeItem('user');
      setUser(null)
    })
  }


  useEffect(() => {
    getChannels();
  }, []);


  return (
    <div className="App">
      <Router>
        {
          !user ?
          <Login setUser={setUser}/>
          :
        <Container>
          <Header signOut={signOut} user={user}/>
          <Main>
            <Sidebar rooms={rooms} />
            <Switch>
              <Route path="/room/:channelId">
                <Chat user={user}/>
              </Route>
              <Route path="/">
                Select or create Channel
              </Route>
            </Switch>
          </Main>
        </Container>
        }
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 30px auto;
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
`;

import React from "react";
import styled from "styled-components";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AddIcon from "@mui/icons-material/Add";
import { sidebarItemsData } from "./data/SidebarData.js";
import { db } from '../firebase';

const Sidebar = (props) => {
  const addChannel = () => {
    const promptName = prompt("Enter chanel name");
    if(promptName) {
      db.collection('rooms').add({
        name: promptName
      })
    }
  };
  return (
    <Container>
      <WorkspaceContainer>
        <Name>Ashik E Elahi</Name>
        <NewMessage>
          <AddCircleOutlineIcon />
        </NewMessage>
      </WorkspaceContainer>
      <MainChannels>
        {sidebarItemsData.map((item) => (
          <MainChannelItems>
            {item.icon}
            {item.text}
          </MainChannelItems>
        ))}
      </MainChannels>
      <ChannelsContainer>
        <NewChannelContainer>
          <div>Channels</div>
          <span>
            <AddIcon onClick={addChannel} />
          </span>
        </NewChannelContainer>
        <ChannelsList>
          {props.rooms.map((room) => (
            <Channel># {room.name}</Channel>
          ))}
        </ChannelsList>
      </ChannelsContainer>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  background: #3f0e40;
`;

const WorkspaceContainer = styled.div`
  color: white;
  height: 64px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  justify-content: space-between;
  border-bottom: 1px solid #532753;
`;
const Name = styled.div``;
const NewMessage = styled.div`
  width: 36px;
  height: 36px;
  background-color: white;
  color: #3f0e40;
  fill: #3f0e40;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-right: 20px;
  cursor: pointer;
`;

const MainChannels = styled.div`
  padding-top: 20px;
`;

const MainChannelItems = styled.div`
  color: rgb(188, 171, 188);
  display: grid;
  grid-template-columns: 15% auto;
  height: 28px;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;

  :hover {
    background: #350d36;
  }
`;

const ChannelsContainer = styled.div`
  color: rgb(188, 171, 188);
  margin-top: 10px;
`;
const NewChannelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 28px;
  padding-left: 19px;
  padding-right: 19px;

  span {
    cursor: pointer;
  }
`;

const ChannelsList = styled.div``;

const Channel = styled.div`
  height: 28px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;
  :hover {
    background: #350d36;
  }
`;

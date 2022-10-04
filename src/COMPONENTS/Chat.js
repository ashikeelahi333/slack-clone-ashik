import React from "react";
import styled from "styled-components";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ChatInput from './ChatInput';
import ChatMessage from "./ChatMessage";

const Chat = () => {
  return (
    <Container>
      <Header>
        <Channel>
          <ChannelName>
            # Ashik E Elahi
          </ChannelName>
          <ChannelInfo>
            This is a channel which is created by me
          </ChannelInfo>
        </Channel>
        <ChannelDetails>
          <div>
            Details
          </div>
          <Info> </Info>
        </ChannelDetails>
      </Header>
      <MessageContainer>
        <ChatMessage />
      </MessageContainer>
      <ChatInput />
    </Container>
  );
};

export default Chat;

const Channel = styled.div``

const ChannelDetails = styled.div`
  display: flex;
  align-items: center;
  color: #606060;
`

const ChannelName = styled.div`
  font-weight: 700;
`;

const ChannelInfo = styled.div`
  font-weight: 400;
  color: #606060;
  font-size: 13px;
  margin-top: 8px;
`;


const Container = styled.div`
  display: grid;
  grid-template-rows: 64px auto min-content;
`;

const Info = styled(InfoOutlinedIcon)`
  margin-left: 10px;
`

const Header = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(83, 39, 83, 0.13);
`;


const MessageContainer = styled.div``;

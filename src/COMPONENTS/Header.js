import React from 'react';
import styled from 'styled-components';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const Header = () => {
    return (
        <Container>
            <Main>
                <AccessTimeIcon />
                <HelpOutlineIcon />
                <SearchContainer>
                    <Search>
                        <input type="text" placeholder='Search...'/>
                    </Search>
                </SearchContainer>
            </Main>
            <UserContainer>
                <UserName>
                    Ashik
                </UserName>
                <UserImage>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnEMahBE40-bnCn8PsLXr_flN0B-KyvlzV3dcswdUt0W-C0QBh5_mCLMSDBbVqFBjqbOQ&usqp=CAU" alt="" />
                </UserImage>
            </UserContainer>
        </Container>
    );
};

export default Header;

const Container = styled.div`
    background: #350d36;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Main = styled.div`
    display: flex;
`
const SearchContainer = styled.div`
    min-width: 400px;
`
const Search = styled.div`
`
const UserContainer = styled.div`
    display: flex;
    align-items: center;
`
const UserName = styled.div`

`
const UserImage = styled.div`

`
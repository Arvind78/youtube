import { Avatar } from '@mui/material';
import React from 'react'
import styled from 'styled-components'

const Contenars = styled.div`
 display:flex;
 gap:10px;
 margin:20px 0;
`;

const Deteils = styled.div`
display:flex;
flex-direction:column;
gap:10px;
`;

const Name = styled.span`
font-size:14px;

font-weight:500;
`;
const Date = styled.span`
color:gray;
font-size:12px;
font-weight:400;
`;
const Text = styled.p``;

const Commnents = () => {
  return (
    <Contenars>
        <Avatar/>
    <Deteils>
        <Name>Arvind <Date>1 day ago</Date> </Name>
        <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, cumque nisi cupiditate architecto quo quisquam expedita. Quod reprehenderit laudantium ipsum, dolore dicta est? Unde provident eaque, necessitatibus doloribus hic nulla vel porro quam voluptatum!
        </Text>
    </Deteils>
    </Contenars>
  )
}

export default Commnents
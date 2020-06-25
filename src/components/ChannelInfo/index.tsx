import React from 'react';

import { Container, HastagIcon, Title, Separator, Description } from './styles'


const ChannelName: React.FC = () => {
    return (
        <Container>
            <HastagIcon />

            <Title>chat-livre</Title>

            <Separator />

            <Description>Canal aberto para conversa</Description>
        </Container>
    );
};

export default ChannelName;
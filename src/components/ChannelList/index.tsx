import React from 'react';

import { Container, Category, AddCategoryIcon } from './styles'


const ChannelList: React.FC = () => {
    return (
        <Container>
            <Category>
                <span>Canais de texto</span>
                <AddCategoryIcon />
            </Category>

            {/* <ChannelButton channelName="chat-livre" />
            <ChannelButton channelName="standoff" />
            <ChannelButton channelName="critical ops" />
            <ChannelButton channelName="roblox" />
            <ChannelButton channelName="minecraft" /> */}

        </Container>
    );
};

export default ChannelList;
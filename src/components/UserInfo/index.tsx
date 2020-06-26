import React from 'react';

import { 
        Container,
        Profile,
        Avatar,
        UserData,
        Icons,
        MicIcons,
        HeadphoneIcon,
        SettingIcon
} from './styles'


const UserInfo: React.FC = () => {
    return (
        <Container>
            <Profile>
                <Avatar />
                <UserData>
                    <strong>Marquis Alexander</strong>
                    <span>#4323</span>
                </UserData>
            </Profile>

            <Icons>
                <MicIcons />
                <HeadphoneIcon />
                <SettingIcon />
            </Icons>
        </Container>
    );
};

export default UserInfo;
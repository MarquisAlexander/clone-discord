import React, {useRef, useEffect} from 'react';

import ChannelMessage, {Mention} from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'


const ChannelData: React.FC = () => {

    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

    return (
        <Container>
            <Messages ref={messagesRef}>
                <ChannelMessage
                author="Marquis Alexander"
                date="28/08/2020"
                content="Hoje é meu aniversário!"
                />
                <ChannelMessage
                author="Marquis Alexander"
                date="28/08/2020"
                content="Hoje é meu aniversário!"
                />
                <ChannelMessage
                author="Marquis Alexander"
                date="28/08/2020"
                content="Hoje é meu aniversário!"
                />
                <ChannelMessage
                author="Marquis Alexander"
                date="28/08/2020"
                content="Hoje é meu aniversário!"
                />
                <ChannelMessage
                author="Marquis Alexander"
                date="28/08/2020"
                content="Hoje é meu aniversário!"
                /><ChannelMessage
                author="Marquis Alexander"
                date="28/08/2020"
                content="Hoje é meu aniversário!"
                />
                <ChannelMessage
                author="Marquis Alexander"
                date="28/08/2020"
                content="Hoje é meu aniversário!"
                />
                <ChannelMessage
                author="Marquis Alexander"
                date="28/08/2020"
                content="Hoje é meu aniversário!"
                />
                <ChannelMessage
                author="Marquis Alexander"
                date="28/08/2020"
                content="Hoje é meu aniversário!"
                />
                <ChannelMessage 
                author="Sagaz limitado"
                date="28/08/2020"
                content={
                    <>
                        <Mention>@Marquis Alexander</Mention>, me carrega no cops de novo
                        por favor?
                    </>
                }
                hasMention
                isBot
                />

            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre" />
                <InputIcon />
            </InputWrapper>
        </Container>
    );
};

export default ChannelData;
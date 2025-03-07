import React, { useEffect, useState } from 'react';
import { Layout, Input, Button, List, Avatar } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import mqtt from 'mqtt';
import { useSelector } from 'react-redux';
import axios from 'axios';

const { Header, Content, Footer } = Layout;

const ChatPage = () => {

    // 상태 변수 생성
    const [mqttClient, setMqttClient] = useState(null);

    // 입력내용
    const [inputMessage, setInputMessage] = useState('');

    // 메시지 내용들
    const [messages, setMessages] = useState([
        { text: '안녕하세요! 무엇을 도와드릴까요?', user: 'Bot' }
    ]);

    const { token } = useSelector((state) => state.LoginReducer);

    const handleData = async () => {
        const url = `/api/member/selectid.json`;
        const headers = { "auth": token };
        const { data } = await axios.get(url, { headers });
        console.log(data);

        // 1. 아이디를 받으면 상태변수에 보관
    };

    useEffect(() => {

        handleData();

        const brokerUrl = `ws://175.126.37.21:11884`;
        const clientId = `id000_` + new Date().getTime();

        const options = {
            clean: true,  // 시작시 초기화
            reconnectPeriod: 2000, // 2000 2초간격으로 재접속
            clientId: clientId,
            username: 'aaa',  // broker에 접속하기 위한 아이디
            password: 'bbb'    // broker에 접속하기 위한 암호
        };

        const client = mqtt.connect(brokerUrl, options);

        client.on('connect', () => {
            console.log('broker 접속 성공');
            client.subscribe('pknu/class207/#', (error) => {
                if (error) {
                    console.log('구독실패');
                }
                else {
                    console.log('구독성공. 메시지를 받을 준비 완료');
                }
            })
        });

        // 메시지 올때 자동으로 반응됨.
        client.on('message', (topic, payload) => {
            console.log(topic, payload.toString());

            const newMessage = { text: payload.toString(), user: topic };
            setMessages((prevMessages) => [newMessage, ...prevMessages]);
            setInputMessage('');
        });

        setMqttClient(client);

        // 컴포넌트가 언마운트 될때 서버연결 끊음
        return () => {
            client.end();
        }
    }, []);


    const handleSendMessage = () => {
        if (mqttClient) {
            if (inputMessage.trim()) {
                mqttClient.publish('pknu/class207/id000', inputMessage);
            }
        }
    };


    return (
        <div>
            <Layout style={{ height: '600px' }}>
                <Header style={{ background: '#fff', textAlign: 'center' }}>
                    <h2>채팅 앱</h2>
                </Header>
                <Content style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                    <List
                        dataSource={messages}
                        renderItem={(item, index) => (
                            <List.Item key={index}>
                                <List.Item.Meta
                                    avatar={<Avatar>{item.user.endsWith('id000') ? 'Me' : 'You'}</Avatar>}
                                    title={item.user}
                                    description={item.text}
                                />
                            </List.Item>
                        )}
                        style={{ maxHeight: '500px', overflowY: 'auto' }}
                    />
                    <div style={{ display: 'flex', marginTop: '20px' }}>
                        <Input
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            onPressEnter={handleSendMessage}
                            placeholder="메시지를 입력하세요"
                            style={{ marginRight: '10px' }}
                        />
                        <Button type="primary" icon={<SendOutlined />} onClick={handleSendMessage} >보내기</Button>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design Chat App ©2025
                </Footer>
            </Layout>
        </div>
    );
};

export default ChatPage;
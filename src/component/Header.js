import React, {useState} from 'react';
import {Menu} from "antd";
import { LoginOutlined, AppstoreOutlined, UserAddOutlined } from '@ant-design/icons';

const { Item } = Menu;

function Header() {
    
    const [current, setCurrent] = useState("")

    return (
        <>
            <Menu mode="horizontal" selectedKeys={[current]}>
                <Item key="/" icon={<AppstoreOutlined/>} onClick={(e) => setCurrent(e.key)}>
                    <a href="/">
                        App
                    </a>
                </Item>
                <Item key="/login" icon={<LoginOutlined/>} onClick={(e) => setCurrent(e.key)}>
                    <a href="/login">
                       Login
                    </a>
                </Item>
                <Item key="/register" icon={<UserAddOutlined/>} onClick={(e) => setCurrent(e.key)}>
                    <a href="/register">
                        Register
                    </a>
                </Item>
            </Menu>
        </>
    )
}

export default Header;
import {
  ShopOutlined,
  HistoryOutlined,
  UnorderedListOutlined,
  DashboardOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";
import { Menu, Flex, Button } from 'antd'
import { useState } from 'react';

const sidebarItems = [
  {
    label: <Link to="/cashier"> Cashier </Link>,
    key: "/cashier",
    icon: <ShopOutlined />,
  },
  {
    label: "Transactions",
    key: "/transactions",
    icon: <HistoryOutlined />,
  },
  {
    label: "Menus",
    key: "/menus",
    icon: <UnorderedListOutlined />,
  },
  {
    label: "Dashboard",
    key: "/dashboard",
    icon: <DashboardOutlined />,
  },
]

const accountItems = [
  {
    label: "User Account",
    key: "/account",
    icon: <img src="/vite.svg" width={18}/>,
    children: [
      {
        label: "Profile",
        key: "/profile",
        icon: <UserOutlined/>,
      },
      {
        label: "Settings",
        key: "/settings",
        icon: <SettingOutlined />,
      },
      {
        label: "Log Out",
        key: "/signout",
        icon: <LogoutOutlined />,
        danger: true
      }
    ]
  },
]

const Sidebar = () => {
  const [current, setCurrent] = useState(location.pathname)

  const handleOnClick = ({ key }) => {
    setCurrent(key)
  }

  return (
    <Flex vertical justify='space-between'  className='h-full py-4'>
      <Flex vertical gap='large' className='h-full'>
        <h1 className='pl-4 text-2xl'>Foodstore</h1>
        <Menu
          items={sidebarItems}
          selectedKeys={current}
          onClick={handleOnClick}
        />
      </Flex>
      <Menu
        items={accountItems}
        selectedKeys={current}
        onClick={handleOnClick}
      />
    </Flex>

  )
}

export default Sidebar

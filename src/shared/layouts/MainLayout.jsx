import Sidebar from '@components/Sidebar';
import {
  Layout,
  ConfigProvider,
  theme,
} from 'antd';
import { Outlet } from 'react-router-dom';

const { Sider } = Layout;

const MainLayout = ({ children }) => {
  const { token } = theme.useToken()

  const customBaseTheme = {
    components: {
      Layout: {
        bodyBg: token.colorBgLayout,
        headerBg: token.colorBgBase,
        footerBg: token.colorBgBase,
        siderBg: token.colorBgBase,
      },
    }
  }

  return (
    <ConfigProvider theme={customBaseTheme}>
      <Layout className="h-screen">
        <Sider>
          <Sidebar/>
        </Sider>
        <Outlet />
      </Layout>
    </ConfigProvider>
  )
}

export default MainLayout

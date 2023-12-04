import { getErrorMessage } from '@helpers/helpers';
import MainLayout from '@layouts/MainLayout';
import { Layout, Empty } from 'antd';

const {PAGE_NOT_FOUND} = getErrorMessage()

const ErrorPage = () => (
  <Layout className="flex justify-center items-center h-screen">
    <Empty
      className="text-2xl"
      description={PAGE_NOT_FOUND}
      image="/page_not_found.svg"
      imageStyle={{height: 300}}
    />
  </Layout>
)

export default ErrorPage

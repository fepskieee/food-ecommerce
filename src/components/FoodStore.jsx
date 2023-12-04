import { Layout, Row, Col } from "antd"

const FoodStore = () => {

  return (
    <Layout className="p-4">
      <Row gutter={36} className="h-full">
        <Col flex="auto">
          <div className="h-full border">col-1</div>
        </Col>
        <Col span={8}>
          <div className="h-full border">col-2</div>
        </Col>
      </Row>
    </Layout>
  )
}

export default FoodStore
import React from 'react'
import { connect } from 'dva';
import { Card, Row, Col, Tag } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import styles from './Profile.less'

const Personal = (props) => {
  const { currentUser } = props;

  return (
    <PageHeaderWrapper>
      <Card className={styles.personal}>
        <Row>
          <Col span={6}>
            <strong>名字</strong>
          </Col>
          <Col>{currentUser.name}</Col>
        </Row>

        <Row>
          <Col span={6}>
            <strong>住址</strong>
          </Col>
          <Col>{currentUser.country} {currentUser.address}</Col>
        </Row>

        <Row>
          <Col span={6}>
            <strong>email</strong>
          </Col>
          <Col>{currentUser.email}</Col>
        </Row>

        <Row>
          <Col span={6}>
            <strong>所在组</strong>
          </Col>
          <Col>{currentUser.group}</Col>
        </Row>

        <Row>
          <Col span={6}>
            <strong>电话</strong>
          </Col>
          <Col>{currentUser.phone}</Col>
        </Row>

        <Row>
          <Col span={6}>
            <strong>头衔</strong>
          </Col>
          <Col>{currentUser.title}</Col>
        </Row>

        <Row>
          <Col span={6}>
            <strong>座右铭</strong>
          </Col>
          <Col>{currentUser.signature}</Col>
        </Row>

        <Row>
          <Col span={6}>
            <strong>标签</strong>
          </Col>
          <Col>{
            (currentUser.tags || []).map(ele => (<Tag color="cyan" key={ele.key}>{ele.label}</Tag>))
          }</Col>
        </Row>

      </Card>
    </PageHeaderWrapper>
  )
}


export default connect(({ user }) => ({
  currentUser: user.currentUser,
}))(Personal);
import { Layout } from 'antd';
import { T1 } from '../../fonts'
const { Header, Content, Footer } = Layout;

const GuidePage = ({ HeaderElem, ContentElem, FooterElem }) => {
  return <Layout style={{
    minHeight: 800,
    marginLeft: 200,
  }}>
    <Header style={{ backgroundColor: '#fff', paddingLeft: '24px' }}><T1>{HeaderElem}</T1></Header>
    <Content style={{
      padding: '0 24px',
      backgroundColor: '#fff'
    }}>{ContentElem}</Content>
    <Footer style={{ backgroundColor: '#fff', fontSize: '40px', paddingLeft: '24px' }}>{FooterElem}</Footer>
  </Layout>
}
export default GuidePage
import { useContext } from 'react'
import { Button } from 'antd'
import { T4 } from '../../fonts';
import Context from './Context'

const SubChild = () => {
    const { count, setCount } = useContext(Context)
    return <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
        <T4>我是第三层SubChild组件，我拿到了最外层组件中传递过来的count值 {count}</T4>
        <Button onClick={() => setCount(count + 1)}>点我加一</Button>
    </div>
}
export default SubChild

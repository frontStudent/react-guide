import React, {useState} from 'react'
import { Button } from 'antd'
import { T4 } from '../../fonts';

const Child = ()=> {
    const [state, setState] = useState(0);
    function computing() {
        return state + Math.random();
    }
    return (
        <div>
            <T4>右侧的数据在一个用memo高阶组件处理过的组件中，所以也不会重复计算：{computing()}</T4>
            <Button type="primary" danger onClick={() => setState(state + 1)}>改变依赖项state</Button>
        </div>
    )
}
export default Child
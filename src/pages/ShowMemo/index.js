import React, { useState, useMemo, useCallback, useEffect } from 'react'
import GuidePage from '../../components/GuidePage'
import CodeBlock from "../../components/CodeBlock";
import Child from "./DemoChild";
import ProblemChild from "./ProblemChild";

import { Button, Space } from 'antd'
import { T1, T2, T3, T4 } from '../../fonts';

const PureChild = React.memo(Child);
const PureProblem = React.memo(ProblemChild);

const ShowMemo = () => {
    const [num, setNum] = useState(0);
    const [time, setTime] = useState(new Date());
    const [tip, setTip] = useState('我是被传进来的引用数据类型')
    const arr = [tip];
    const goodArr = useMemo(() => [tip], [tip]);

    useEffect(() => {
        setTimeout(() => {
            setTime(new Date())
        }, 3000)
    }, [time])
    //time改变，页面重新渲染之后会触发，一直在变化非常消耗性能
    const computing = () => {
        return num + Math.random();
    }
    //useCallback专门是为了缓存函数用的，useMemo也可以做到同样的功能
    const callback = useCallback(() => num + Math.random(), [])

    //用useMemo缓存数据，只有依赖的数据变化时才会重新计算，否则即使重新渲染也不会重新计算
    const memoComputing = useMemo(() => {
        return num + Math.random();
    }, [num]);

    const HeaderElem = 'useMemo与高阶组件React.memo()的使用与区别'
    const ContentElem = <div>
        <T2>useMemo基本使用</T2>
        <T4>由于react的机制，只要有一个state变化，就会导致页面重新渲染，很多不变的数据也会因此被强制再次刷新</T4>
        <T4>比如右边这个数据每3秒变一次，触发re-render：{time.getSeconds()}</T4>
        <T4>我们用这样的代码来模拟re-render之后某些数据会一直变化非常消耗性能：</T4>
        <CodeBlock content={
            `const computing = () => {
    return num + Math.random();
}

<div>{computing()}</div>`
        }></CodeBlock>
        <T4>用随机生成数来直观表现出这个数据将由于页面的渲染而不断变化：{computing()}</T4>
        <T4>所以推荐用以下代码，使用useMemo缓存数据：</T4>
        <CodeBlock content={
            `const memoComputing = useMemo(() => {
    return num + Math.random();
}, [num]);

<div>{memoComputing}</div>
`
        }></CodeBlock>
        <T4>{memoComputing} 点击下方按钮才会变化，否则re-render后也不会重新计算</T4>
        <Button type="primary" danger onClick={() => setNum(num + 1)}>改变依赖项num</Button>
        <T2>React.memo()基本使用</T2>
        <T4>如果我们的页面中存在子组件，不希望子组件中的数据被重复渲染，则可以用React.memo高阶组件包裹子组件，使其变为纯组件：</T4>
        <CodeBlock content={
            `const Child = ()=> {
    const [state, setState] = useState(0);
    const computing = () => {
        return state + Math.random();
    }
    return (
        <div>
            <div>右侧的数据在一个用memo高阶组件处理过的组件中，所以也不会重复计算：{computing()}</div>
            <Button onClick={() => setState(state + 1)}>改变依赖项</Button>
        </div>
    )
}

const PureChild = React.memo(Child);`
        }></CodeBlock>
        <PureChild />
        <T4>React.memo()和useMemo的区别：前者缓存整个组件，后者只缓存一段逻辑代码</T4>
        <T2>React.memo()可能存在的问题</T2>
        <T4>如果给子组件传去引用类型数据，即使这个子组件被React.memo()处理了，但还是会重新被渲染</T4>
        <CodeBlock content={
            `const Problem = (props) => {
let num = Math.random();
    return (
        <div>
            <div>{num}我虽然在一个被memo处理过的纯组件之中，但如果父组件传了一个没有被useMemo缓存过的引用数据类型过来，我依然会不停变化</div>
        </div>
    )
}

const PureProblem = React.memo(ProblemChild)

<PureProblem arr={goodArr} fun={computing} />`
        }></CodeBlock>
        
        <PureProblem arr={goodArr} fun={computing} />
        <T4>因此给子组件传去的引用类型数据需要用useMemo处理</T4>
    </div>
    return (
        <GuidePage HeaderElem={HeaderElem} ContentElem={ContentElem} />
    )
}

export default ShowMemo
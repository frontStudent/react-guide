import { useState, useMemo } from 'react'
import GuidePage from '../../components/GuidePage'
import CodeBlock from "../../components/CodeBlock";

import { T2, T3, T4 } from '../../fonts';
import Child from './Child'
import Context from './Context'

const Father = () => {
    const [count, setCount] = useState(2)
    const value = useMemo(()=>({count, setCount}),[count])
    return <div style={{ border: '1px solid black', padding: '10px' }}>
        <T4>我是最外层的Father组件，有一个状态count初始化为{count}</T4>
        <Context.Provider value={value}>
            <Child></Child>
        </Context.Provider>
    </div>
}

const ShowContext = () => {
    const HeaderElem = "useContext使用"
    const ContentElem = (
        <div>
            <T4>当你需要在组件树中深层传递参数以及需要在组件间复用相同的参数时，传递 props 就会变得很麻烦。</T4>
            <T4>React中的 Context 让父组件可以为它下面的整个组件树提供数据。</T4>
            <T2>基础使用</T2>
            <T3>createContext</T3>
            <T4>可以使用createContext创建一个Context，参数是初始化的值</T4>
            <CodeBlock content={
                `const Context = createContext({})`
            }></CodeBlock>
            <T3>Context.Provider</T3>
            <T4>在外层的组件中你可以使用Context.Provider去包住内层组件，并且用value属性将参数提供给任意一个内层组件</T4>
            <CodeBlock content={
                `const Father = () => {
    const [count,setCount] = useState(2)
    return <Context.Provider value={{count,setCount}}>
        <Child></Child>
    </Context.Provider>
}`
            }></CodeBlock>
            <T3>useContext</T3>
            <T4>在内层的组件中你可以使用useContext去接受最近的一个Provider传进来的value值，如果找不到Provider就取初始化的值</T4>
            <CodeBlock content={
                `const Child = () => {
    const { count, setCount } = useContext(Context)
    return <div style={{ border: '1px solid black', padding: '10px' }}>
            <T4>我是第二层Child组件，我拿到了最外层组件中传递过来的count值 {count}</T4>
            <Button onClick={() => setCount(count + 1)}>点我加一</Button>
            <SubChild></SubChild>
        </div>
}`
            }></CodeBlock>
            <T3>效果演示</T3>
            <T4>Father组件包裹Child组件，Child组件又包裹了一个SubChild组件</T4>

            <Father></Father>
            <T2>注意事项</T2>
            <T3>缓存Provider中的value</T3>
            <T4>当 Provider 的父组件进行重渲染时，Provider的value属性每次改变都会导致重新渲染所有调用useContext(Context)的所有组件，因此需要用useMemo对value进行缓存：
</T4>
            <CodeBlock content={
                `const Father = () => {
    const [count,setCount] = useState(2)
    const value = useMemo(()=>({count, setCount}),[count])
    return <Context.Provider value={value}>
        <Child></Child>
    </Context.Provider>
}`
            }></CodeBlock>
            <T3>对Context进行细粒度拆分</T3>
            <T4>context 的使用场景应该是为一组享有公共状态的组件提供便利来获取状态的变化。
但是随着业务代码越来越复杂，我们可能会把一些不相关的数据放在同一个context 里面。而context 中任何数据的变化都会导致使用这个 context 的组件重新 render。这种情况下我们应该要对context 进行更细粒度的拆分，把真正相关的数据整合在一起，然后再提供给组件，至少这样不相关组件的状态变化不会相互影响，也就不会导致多余的重复渲染。
</T4>
        </div>
    )
    return (
        <GuidePage HeaderElem={HeaderElem} ContentElem={ContentElem} />
    )
}
export default ShowContext
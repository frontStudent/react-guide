import { createContext, useContext, useReducer } from 'react'
import GuidePage from '../../components/GuidePage'
import CodeBlock from "../../components/CodeBlock";

import { T2, T3, T4, ListItem } from '../../fonts';
import { Button } from 'antd'
const initState = { height: 180, age: 22 }
const stateContext = createContext(initState)

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_AGE':
            return { ...state, age: state.age + 1 }
        case 'ADD_HEIGHT':
            return { ...state, height: state.height + 1 }
    }
}
const EditForm = ({ onChange }) => {
    return <div style={{width:'50%',border:'1px solid black',padding:'5px',margin:'5px'}}>
        <T4>这里是编辑区域组件，点击按钮会派发一个ADD_AGE类型的action交给reducer处理，得到新的age</T4>
        <Button onClick={onChange}>age+1</Button>
    </div>
}
const ViewForm = () => {
    const state = useContext(stateContext)
    return <div style={{width:'50%',border:'1px solid black',padding:'5px',margin:'5px'}}>
        <T4>这里是预览区域组件，接收并展示最新的height和age的变化</T4>
        <T4>height: {state.height} age: {state.age}</T4>
    </div>
}
const ShowContext = () => {
    const [state, dispatch] = useReducer(reducer, initState)
    const handleAddAge = () => {
        dispatch({ type: 'ADD_AGE' })
    }
    const handleAddHeight = () => {
        dispatch({ type: 'ADD_HEIGHT' })
    }
    const HeaderElem = "useReducer使用"
    const ContentElem = (
        <div>
            <T2>基础使用</T2>
            <T4>几个重要概念与react-redux中其实是类似的。</T4>
            <ListItem>state：状态，一般会给一个初始化的initState</ListItem>
            <ListItem>action：表示触发的事件，为一个对象，其中type属性表示事件类型</ListItem>
            <ListItem>reducer：根据触发的事件类型，完成prevState --> newState的过程</ListItem>
            <ListItem>dispatch：一个函数，将触发的事件派发给reducer去处理</ListItem>

            <CodeBlock content={`const initState = { height: 180, age: 22 }
const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_AGE':
            return { ...state, age: state.age + 1 }
        case 'ADD_HEIGHT':
            return { ...state, height: state.height + 1 }
    }
}

const [state, dispatch] = useReducer(reducer, initState)

const handleAddAge = () => {
    dispatch({ type: 'ADD_AGE' })
}
const handleAddHeight = () => {
    dispatch({ type: 'ADD_HEIGHT' })
}
`}></CodeBlock>
            <T3>效果演示</T3>
            <T4>height: {state.height} age: {state.age}</T4>
            <T4>点击下方按钮，会触发handleAddHeight函数，即派发一个ADD_HEIGHT类型的action交给reducer处理，得到新的height</T4>
            <Button onClick={handleAddHeight}>height+1</Button>

            <T2>结合useContext做全局状态管理</T2>
            <T3>效果演示</T3>
            <stateContext.Provider value={state}>
                <div style={{display:'flex',width:'90%'}}>
                    <EditForm onChange={handleAddAge}></EditForm>
                    <ViewForm></ViewForm>
                </div>

            </stateContext.Provider>
        </div>

    )
    return (
        <GuidePage HeaderElem={HeaderElem} ContentElem={ContentElem} />
    )
}
export default ShowContext
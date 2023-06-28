import React from 'react'

const Problem = (props) => {
    let num = Math.random();
    return (
        <div>
            <div>{num}我虽然在一个被memo处理过的纯组件之中，但如果父组件传了一个没有被useMemo缓存过的引用数据类型过来，我依然会不停变化</div>
        </div>
    )
}

export default Problem
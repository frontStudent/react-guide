import { Menu } from 'antd';
import { useNavigate, Link } from 'react-router-dom'

const getItem = (label, key, icon, children, type) => {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem('React自学笔记', 'intro'),
    {
        type: 'divider',
    },
    getItem('性能优化', 'performance', null, [
        getItem(<Link to="/memo">useMemo&React.memo()</Link>, 'memo', null, null),
    ]),
    {
        type: 'divider',
    },
    getItem('Hooks备忘', 'hooks', null, [
        getItem(<Link to="/context">useContext</Link>, 'context', null, null),
        getItem(<Link to="/reducer">useReducer</Link>, 'reducer', null, null),
    ]),
];

const SideMenu = () => {
    const navigate = useNavigate()
    const onClick = (e) => {
        //需要在每个case语句中添加break语句，以便在执行完相应的操作后退出switch语句。
        //否则，它将继续执行下一个case语句
        switch (e.key) {
            case 'intro':
                navigate('./')
                break
            case 'memo':
                navigate('./memo')
                break
            case 'context':
                navigate('./context')
                break
            case 'reducer':
                navigate('./reducer')
                break
            default:
                break
        }
    };
    return (
        <Menu
            onClick={onClick}
            theme='dark'
            style={{
                height: '100%',
            }}
            defaultOpenKeys={['performance', 'hooks']}
            mode="inline"
            items={items}
        />
    );
};
export default SideMenu;
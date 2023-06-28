import GuidePage from '../../components/GuidePage'
import { T1, T2, T3, T4 } from '../../fonts';
import CodeBlock from "../../components/CodeBlock";

const Home = () => {
  const HeaderElem = 'React自学笔记'
  const ContentElem = (
    <div>
      <T2>指引</T2>
      <T4>这是一份React自学笔记。之所以选择以网站的方式展现这份笔记，是因为许多前端代码的学习实践都需要在浏览器中取得实时的运行效果。</T4>
      <T2>项目概览</T2>
      <T4>除了这份笔记中所记录的react知识点之外，这个项目本身的构建思路以及涉及到的一些技术点将在下面被记录以供日后查阅。</T4>
      <T3>代码块展示</T3>
      <T4>插件安装：使用react-syntax-highlighter提供代码块的展示</T4>
      <CodeBlock content={
        `npm install react-syntax-highlighter`
      }></CodeBlock>
      <T4>基本使用：其中content为需要被高亮的具体代码内容，a11yDark为代码主题颜色，customStyle则是自定义的一些css样式，如字体大小和圆角设置等</T4>

      <CodeBlock content={
        `import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

<SyntaxHighlighter language="javascript" style={a11yDark} customStyle={customStyle}>
  {content}
</SyntaxHighlighter>`
      }></CodeBlock>
      <T4>代码复制：需要额外安装react-copy-to-clipboard插件</T4>
      <CodeBlock content={
        `npm install react-copy-to-clipboard`
      }></CodeBlock>
      <T4>基本使用：content是要复制的内容，onCopy是点击后的回调函数，用copied这个boolean变量控制是否已经被复制</T4>
      <CodeBlock content={
        `import React, {useState} from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';

const [copied, setCopied] = useState(false);
const onCopy = () => {
  setCopied(true);
  setTimeout(() => {
    setCopied(false);
  }, 2000);
};

<CopyToClipboard text={content} onCopy={onCopy}>
  <button style={buttonStyle}>{copied ? 'Copied!' : 'Copy code'}</button>
</CopyToClipboard>        `
      }></CodeBlock>
      <T3>页面布局</T3>
      <T3>字体规范</T3>

    </div>
  )
  return <GuidePage HeaderElem={HeaderElem} ContentElem={ContentElem} />
}
export default Home
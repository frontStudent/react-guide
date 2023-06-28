import React, {useState} from 'react'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const customStyle = {
    borderRadius: '10px',
    fontSize: '16px',
    position: 'relative',
}
const buttonStyle = {
    position: 'absolute',
    top: '5px',
    right: '5px',
    padding: '5px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
  };
const CodeBlock = ({ content }) => {
    const [copied, setCopied] = useState(false);
    const onCopy = () => {
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };
    return <div style={{position:'relative'}}>
        <SyntaxHighlighter language="javascript" style={a11yDark} customStyle={customStyle}>
            {content}
        </SyntaxHighlighter>
        <CopyToClipboard text={content} onCopy={onCopy}>
            <button style={buttonStyle}>{copied ? 'Copied!' : 'Copy code'}</button>
        </CopyToClipboard>
    </div>
}

export default CodeBlock

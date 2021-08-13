import React from 'react'
import styled from "styled-components"
import ReactMarkdown from "react-markdown"

class Signal extends React.Component {
  render = () => (
    <Border>
      <ReactMarkdown>
        {this.props.children}
      </ReactMarkdown>
    </Border>
  )
}

var Border = styled.div`
border: 1px solid #3d3b11;
border-radius: 4px;
padding: 12px;
background-color: #FAF9DD;
`

export default Signal

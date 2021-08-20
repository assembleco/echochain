import React from 'react'
import styled from "styled-components"
import ReactMarkdown from "react-markdown"
import { Icon } from '@iconify/react';

class Signal extends React.Component {
  state = {
    change: null,
  }

  render = () => (
    <Border>
      <Actions>
        <Icon
          icon="ci:edit"
          onClick={() => {
            this.setState({ change: this.props.children })
          }}
        />
      </Actions>

      {this.state.change
        ?
        <textarea
        style={{ height: "20rem", width: "100%" }}
        value={this.state.change}
        />

        :
        <ReactMarkdown>
          {this.props.children}
        </ReactMarkdown>
      }
    </Border>
  )
}

var Border = styled.div`
border: 1px solid #3d3b11;
border-radius: 4px;
padding: 12px;
background-color: #FAF9DD;
position: relative;
`

var Actions = styled.div`
position: absolute;
top: 0;
right: 0;
`

export default Signal

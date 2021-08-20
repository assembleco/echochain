import React from 'react'
import styled from "styled-components"
import ReactMarkdown from "react-markdown"
import { Icon } from '@iconify/react';

import { push } from "./core"

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
        <>
          <textarea
          style={{ height: "20rem", width: "100%" }}
          value={this.state.change}
          onChange={(e) => this.setState({ change: e.target.value })}
          />
          <button onClick={() => this.recordChange()} >Record Changes</button>
        </>

        :
        <ReactMarkdown>
          {this.props.children}
        </ReactMarkdown>
      }
    </Border>
  )

  recordChange() {
    push(
      `/signals/${this.props.id}`,
      { body: this.state.change, id: this.props.id },
      "PATCH",
    )
      .then(response => response.json())
      .then(response => this.props.onChange(response.body))
  }
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

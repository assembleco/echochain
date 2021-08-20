import React from 'react'
import styled from "styled-components"

import { Icon, InlineIcon } from "@iconify/react"
import personFill from "@iconify-icons/bi/person-fill"
import gearFill from "@iconify-icons/bi/gear-fill"
import closeFilled from "@iconify-icons/carbon/close-filled"
import linkChain from "@iconify-icons/akar-icons/link-chain"

import Signal from "./signal"
import { pull } from "./core"

class Homescreen extends React.Component {
  state = {
    signals: [],
  }

  componentDidMount() {
    this.pullSignals()
  }

  pullSignals() {
    pull("/signals", { "hidden": "yes" })
    .then(response => response.json())
    .then(response => this.setState({ signals: response.signals }))
  }

  render = () => (
    <Screen>
      <Sidebar>
        <Icon icon={linkChain} />
        <Icon icon={personFill} />
        <Icon icon={gearFill} />
        <Icon icon={closeFilled} />
      </Sidebar>

      <Relays>
        <Relay>Personal</Relay>
        <Relay>Business</Relay>
        <Relay>Echochain beginner</Relay>
      </Relays>

      <Queue>
        {this.state.signals.map((signal, index) => (
          <Signal
          id={signal.id}
          /* ERROR: don't pull all signals, use index and update body in-place*/
          onChange={(body) => this.pullSignals()}
          >
            {signal.body}
          </Signal>
        ))}
      </Queue>
    </Screen>
  )
}

var Screen = styled.div`
padding: 24px;
position: absolute;
bottom: 0;
left: 0;
right: 0;
top: 0;

display: grid;
grid-template-columns: auto auto 1fr;
grid-template-rows: auto;
`

var Sidebar = styled.div`
border: 4px solid #3d3b11;
border-radius: 4px;
padding: 12px;
height: 120px;
background-color: #FAF9DD;
display: flex;
flex-direction: column;

& > svg {
  width: 24px;
  height: 24px;
  &:not(:last-child) {
    margin-bottom: 12px;
  }
}
`

var Relays = styled.div`
display: flex;
flex-direction: column;
`

var Relay = styled.div`
border: 2px solid #3d3b11;
border-radius: 4px;
padding: 12px;
background-color: #FAF9DD;
`

var Queue = styled.div`
display: flex;
flex-direction: column;
`

export default Homescreen

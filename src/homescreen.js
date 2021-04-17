import React from 'react'
import styled from "styled-components"

const Homescreen = props => (
  <Screen>
    <Sidebar>
      P<br/>
      P<br/>
      P<br/>
      P<br/>
    </Sidebar>

    <Relays>
      <Relay>Personal</Relay>
      <Relay>Business</Relay>
      <Relay>Echochain beginner</Relay>
    </Relays>

    <Queue>
      <Signal style={{height: Math.random() * 240 }}>abc123</Signal>
      <Signal style={{height: Math.random() * 240 }}>abc123</Signal>
      <Signal style={{height: Math.random() * 240 }}>abc123</Signal>
      <Signal style={{height: Math.random() * 240 }}>abc123</Signal>
      <Signal style={{height: Math.random() * 240 }}>abc123</Signal>
      <Signal style={{height: Math.random() * 240 }}>abc123</Signal>
    </Queue>
  </Screen>
)

var Screen = styled.div`
padding: 24px;
position: absolute;
bottom: 0;
left: 0;
right: 0;
top: 0;

display: grid;
grid-template-columns: 48px auto 1fr;
grid-template-rows: auto;
`

var Sidebar = styled.div`
border: 4px solid #3d3b11;
border-radius: 4px;
padding: 12px;
`

var Relays = styled.div`
display: flex;
flex-direction: column;
`

var Relay = styled.div`
border: 2px solid #3d3b11;
border-radius: 4px;
padding: 12px;
`

var Queue = styled.div`
display: flex;
flex-direction: column;
`

var Signal = styled.div`
border: 1px solid #3d3b11;
border-radius: 4px;
padding: 12px;
`

export default Homescreen

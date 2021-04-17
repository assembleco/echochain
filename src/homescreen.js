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
`

const Sidebar = styled.div`
border: 4px solid #3d3b11;
border-radius: 4px;
padding: 12px;
`

export default Homescreen

import React, { FC } from 'react'

export const Container: FC = ({ children }) => (
  <div style={{ textAlign: 'center', fontFamily: 'Avenir, Helvetica, Arial' }}>
    {children}
  </div>
)

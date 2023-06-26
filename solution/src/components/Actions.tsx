import React, { FC } from 'react'

export const Actions: FC = ({ children }) => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    {children}
  </div>
)

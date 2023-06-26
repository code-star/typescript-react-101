import React, { FC } from 'react'
import { Time } from './Time'

type LapProps = {
  lapNumber: number
  seconds: number
}

export const Lap: FC<LapProps> = ({ lapNumber, seconds }) => (
  <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={{ marginRight: '5px' }}>
      Lap {lapNumber}:
    </div>
    <Time seconds={seconds} size={'small'} />
  </div>
)

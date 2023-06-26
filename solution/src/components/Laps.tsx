import React, { FC } from 'react'
import { Lap } from './Lap'

type LapsProps = {
  laps: number[]
}

export const Laps: FC<LapsProps> = ({ laps }) => (
  <div>
    {
      laps.map((lapSeconds: number, index: number) => (
        <Lap key={index} lapNumber={index+1} seconds={lapSeconds} />
      ))
    }
  </div>
)

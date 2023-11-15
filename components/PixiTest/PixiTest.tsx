'use client'

import React, { useMemo } from 'react'
import clsx from 'clsx'
import styles from './PixiTest.module.css'
import { PixiTestProps } from './PixiTest.types'
import { BlurFilter } from 'pixi.js';
import { Stage, Container, Sprite, Text } from '@pixi/react';

const PixiTest = ({
  children,
  className,
}: PixiTestProps) => {
  const blurFilter = useMemo(() => new BlurFilter(4), []);

  return (
    <div
      className={clsx(
        styles.root,
        className
      )}
    >
      Hi
       <Stage>
      <Sprite
        image="https://pixijs.io/pixi-react/img/bunny.png"
        x={400}
        y={270}
        anchor={{ x: 0.5, y: 0.5 }}
      />

      <Container x={400} y={330}>
        <Text text="Hello World" anchor={{ x: 0.5, y: 0.5 }} filters={[blurFilter]} />
      </Container>
    </Stage>
    </div>
  )
}


export default PixiTest
'use client'

import React, { useEffect, useRef, useMemo } from 'react';
import clsx from 'clsx'
import styles from './PixiComponent.module.css'
import { PixiComponentProps } from './PixiComponent.types'
import { BlurFilter } from 'pixi.js';
import { Stage, Container, Sprite, Text } from '@pixi/react';



const PixiComponent = ({
  children,
  className,
}: PixiComponentProps) => {
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

export default PixiComponent
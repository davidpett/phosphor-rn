import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAirplaneDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M152 152v32l16 16v32l-40-16-40 16v-32l16-16v-32l-80 16v-32l80-40V48a24 24 0 0 1 48 0v48l80 40v32Z"
      opacity={0.2}
    />
    <Path d="M235.58 128.84 160 91.06V48a32 32 0 0 0-64 0v43.06l-75.58 37.78A8 8 0 0 0 16 136v32a8 8 0 0 0 9.57 7.84L96 161.76v18.93l-13.66 13.65A8 8 0 0 0 80 200v32a8 8 0 0 0 11 7.43l37-14.81 37 14.81a8 8 0 0 0 11-7.43v-32a8 8 0 0 0-2.34-5.66L160 180.69v-18.93l70.43 14.08A8 8 0 0 0 240 168v-32a8 8 0 0 0-4.42-7.16ZM224 158.24l-70.43-14.08A8 8 0 0 0 144 152v32a8 8 0 0 0 2.34 5.66L160 203.31v16.87l-29-11.61a8 8 0 0 0-5.94 0L96 220.18v-16.87l13.66-13.65A8 8 0 0 0 112 184v-32a8 8 0 0 0-9.57-7.84L32 158.24v-17.3l75.58-37.78A8 8 0 0 0 112 96V48a16 16 0 0 1 32 0v48a8 8 0 0 0 4.42 7.16L224 140.94Z" />
  </Svg>
);
const Memo = memo(SvgAirplaneDuotone);
export default Memo;

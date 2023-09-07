import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSlackLogoBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M236 104a36 36 0 0 0-48-33.94V56a36 36 0 0 0-60-26.8A36 36 0 0 0 70.06 68H56a36 36 0 0 0-26.8 60A36 36 0 0 0 68 185.94V200a36 36 0 0 0 60 26.8 36 36 0 0 0 57.94-38.8H200a36 36 0 0 0 26.8-60 35.82 35.82 0 0 0 9.2-24Zm-36-12a12 12 0 0 1 0 24h-12v-12a12 12 0 0 1 12-12Zm-48-48a12 12 0 0 1 12 12v48a12 12 0 0 1-12 12h-12V56a12 12 0 0 1 12-12ZM92 56a12 12 0 0 1 24 0v12h-12a12 12 0 0 1-12-12ZM56 92h48a12 12 0 0 1 12 12v12H56a12 12 0 0 1 0-24Zm0 72a12 12 0 0 1 0-24h12v12a12 12 0 0 1-12 12Zm48 48a12 12 0 0 1-12-12v-48a12 12 0 0 1 12-12h12v60a12 12 0 0 1-12 12Zm60-12a12 12 0 0 1-24 0v-12h12a12 12 0 0 1 12 12Zm36-36h-48a12 12 0 0 1-12-12v-12h60a12 12 0 0 1 0 24Z" />
  </Svg>
);
const Memo = memo(SvgSlackLogoBold);
export default Memo;

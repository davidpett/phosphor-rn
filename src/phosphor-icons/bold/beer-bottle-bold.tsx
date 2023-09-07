import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBeerBottleBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m248.49 39.51-32-32a12 12 0 0 0-18.55 15L147 60.77l-37.33 7.46a12.09 12.09 0 0 0-6.14 3.28L20.2 154.83a28 28 0 0 0 0 39.6l41.37 41.37a28 28 0 0 0 39.6 0l83.32-83.31a12.09 12.09 0 0 0 3.28-6.14l7.46-37.35 38.23-51a12 12 0 0 0 15-18.55ZM112 191l-47-47 31-31 47 47Zm-30.63 29a4 4 0 0 1-2.83-1.17l-41.37-41.37a4 4 0 0 1 0-5.66L48 161l47 47-10.8 10.83a4 4 0 0 1-2.83 1.17Zm93-123.2a12 12 0 0 0-2.17 4.85l-7.2 36.43-5 4.92-47-47 5-5 36.43-7.28a12 12 0 0 0 4.85-2.17l55.67-41.76 1.29 1.29Z" />
  </Svg>
);
const Memo = memo(SvgBeerBottleBold);
export default Memo;

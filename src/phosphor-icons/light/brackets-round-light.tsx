import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBracketsRoundLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M56.52 64C44.23 81.46 38 103 38 128s6.23 46.54 18.52 64c9.17 13 18.49 18.81 18.59 18.87a6 6 0 0 1-6.2 10.27C67.16 220.09 26 194.63 26 128s41.16-92.09 42.91-93.14a6 6 0 0 1 6.2 10.27C75 45.19 65.69 51 56.52 64Zm130.57-29.14a6 6 0 0 0-6.2 10.27c.1.06 9.42 5.84 18.59 18.87C211.77 81.46 218 103 218 128s-6.23 46.54-18.52 64c-9.17 13-18.49 18.81-18.57 18.85a6 6 0 1 0 6.18 10.29c1.75-1 42.91-26.51 42.91-93.14s-41.16-92.09-42.91-93.14Z" />
  </Svg>
);
const Memo = memo(SvgBracketsRoundLight);
export default Memo;

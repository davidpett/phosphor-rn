import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPlugsConnectedFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M237.66 18.34a8 8 0 0 0-11.32 0l-52.4 52.41-5.37-5.38a32.05 32.05 0 0 0-45.26 0L100 88.69l-6.34-6.35a8 8 0 0 0-11.32 11.32l6.35 6.34-23.32 23.31a32 32 0 0 0 0 45.26l5.38 5.37-52.41 52.4a8 8 0 0 0 11.32 11.32l52.4-52.41 5.37 5.38a32.06 32.06 0 0 0 45.26 0L156 167.31l6.34 6.35a8 8 0 0 0 11.32-11.32l-6.35-6.34 23.32-23.31a32 32 0 0 0 0-45.26l-5.38-5.37 52.41-52.4a8 8 0 0 0 0-11.32Zm-58.35 103L156 144.69 111.31 100l23.32-23.31a16 16 0 0 1 22.62 0l22.06 22a16 16 0 0 1 0 22.63Zm-90.9-86.81a8 8 0 0 1 15.18-5.06l8 24a8 8 0 0 1-15.18 5.06Zm-64 58.94a8 8 0 0 1 10.12-5.06l24 8a8 8 0 0 1-5.06 15.18l-24-8a8 8 0 0 1-5.06-10.12Zm207.18 69.06a8 8 0 0 1-10.12 5.06l-24-8a8 8 0 0 1 5.06-15.18l24 8a8 8 0 0 1 5.06 10.12Zm-64 58.94a8 8 0 0 1-15.18 5.06l-8-24a8 8 0 0 1 15.18-5.06Z" />
  </Svg>
);
const Memo = memo(SvgPlugsConnectedFill);
export default Memo;

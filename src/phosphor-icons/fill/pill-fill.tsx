import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPillFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216.43 39.6a53.27 53.27 0 0 0-75.33 0L39.6 141.09a53.26 53.26 0 0 0 75.32 75.31l101.51-101.49a53.32 53.32 0 0 0 0-75.31Zm-11.32 64-50.75 50.74-52.69-52.68 50.75-50.75a37.26 37.26 0 0 1 52.69 52.69Zm-15.43-21.26a8 8 0 0 1 0 11.32l-24 24a8 8 0 1 1-11.31-11.32l24-24a8 8 0 0 1 11.31 0Z" />
  </Svg>
);
const Memo = memo(SvgPillFill);
export default Memo;

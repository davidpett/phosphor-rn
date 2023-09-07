import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgClockCountdownLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M230 136.49A102.12 102.12 0 1 1 119.51 26a6 6 0 0 1 1 12A90.13 90.13 0 1 0 218 135.51a6 6 0 1 1 12 1ZM122 72v56a6 6 0 0 0 6 6h56a6 6 0 0 0 0-12h-50V72a6 6 0 0 0-12 0Zm38-26a10 10 0 1 0-10-10 10 10 0 0 0 10 10Zm36 24a10 10 0 1 0-10-10 10 10 0 0 0 10 10Zm24 36a10 10 0 1 0-10-10 10 10 0 0 0 10 10Z" />
  </Svg>
);
const Memo = memo(SvgClockCountdownLight);
export default Memo;

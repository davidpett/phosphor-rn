import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPercentThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m202.83 58.81-144 144a4 4 0 0 1-5.66-5.66l144-144a4 4 0 1 1 5.66 5.65ZM53.37 98.62A32 32 0 1 1 76 108a31.82 31.82 0 0 1-22.63-9.38ZM52 76a24 24 0 1 0 7-17 23.85 23.85 0 0 0-7 17Zm160 104a32 32 0 1 1-9.37-22.63A31.82 31.82 0 0 1 212 180Zm-8 0a24 24 0 1 0-7 17 23.89 23.89 0 0 0 7-17Z" />
  </Svg>
);
const Memo = memo(SvgPercentThin);
export default Memo;

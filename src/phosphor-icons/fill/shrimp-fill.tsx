import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgShrimpFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M136 116a12 12 0 1 1 12 12 12 12 0 0 1-12-12Zm104-56a28 28 0 0 1-16.2 25.38A80.09 80.09 0 0 1 144 160h-32a12 12 0 0 0 0 24h56a8 8 0 0 1 0 16h-48v16h32a8 8 0 0 1 0 16H96a80 80 0 0 1 0-160h116a12 12 0 0 0 0-24h-84a24 24 0 0 1-24-24 8 8 0 0 1 16 0 8 8 0 0 0 8 8h84a28 28 0 0 1 28 28ZM85.72 182.2a8 8 0 0 0-11.16-1.86l-15.36 11a8 8 0 0 0 9.3 13l15.36-11a8 8 0 0 0 1.86-11.14Zm-1.5-35.62L45.55 129a8 8 0 1 0-6.62 14.56l38.67 17.59a8 8 0 0 0 10.59-4 8 8 0 0 0-3.97-10.57ZM207.5 88H120v56h24a64.09 64.09 0 0 0 63.5-56Z" />
  </Svg>
);
const Memo = memo(SvgShrimpFill);
export default Memo;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgShieldWarning = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 40H48a16 16 0 0 0-16 16v58.77c0 89.62 75.82 119.34 91 124.38a15.44 15.44 0 0 0 10 0c15.2-5.05 91-34.77 91-124.39V56a16 16 0 0 0-16-16Zm0 74.79c0 78.42-66.34 104.62-80 109.18-13.53-4.5-80-30.68-80-109.18V56h160ZM120 136V96a8 8 0 0 1 16 0v40a8 8 0 0 1-16 0Zm-4 36a12 12 0 1 1 12 12 12 12 0 0 1-12-12Z" />
  </Svg>
);
const Memo = memo(SvgShieldWarning);
export default Memo;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDivideLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M222 128a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6Zm-94-50a14 14 0 1 0-14-14 14 14 0 0 0 14 14Zm0 100a14 14 0 1 0 14 14 14 14 0 0 0-14-14Z" />
  </Svg>
);
const Memo = memo(SvgDivideLight);
export default Memo;

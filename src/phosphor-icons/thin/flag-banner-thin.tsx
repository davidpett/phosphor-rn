import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFlagBannerThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M227.38 53.86A4 4 0 0 0 224 52H32a4 4 0 0 0-2.7 7l45 41.29-45.24 49A4 4 0 0 0 32 156h140l-31.56 66.28a4 4 0 0 0 1.89 5.33 3.92 3.92 0 0 0 1.67.39 4 4 0 0 0 3.61-2.28l80-168a4 4 0 0 0-.23-3.86ZM175.76 148H41.14l41.8-45.29a4 4 0 0 0-.24-5.66L42.28 60h175.39Z" />
  </Svg>
);
const Memo = memo(SvgFlagBannerThin);
export default Memo;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgChatsCircleFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M231.79 187.33a80 80 0 0 0-62.22-114.74 80 80 0 1 0-145.36 66.74l-7.66 26.82a14 14 0 0 0 17.3 17.3l26.82-7.66a80.15 80.15 0 0 0 25.75 7.63 80 80 0 0 0 108.91 40.37l26.82 7.66a14 14 0 0 0 17.3-17.3Zm-16.26 1.34 7.55 26.41-26.41-7.55a8 8 0 0 0-6 .68 64.06 64.06 0 0 1-86.32-24.64 79.93 79.93 0 0 0 70.35-93.86 64 64 0 0 1 41.51 92.93 8 8 0 0 0-.68 6.03Z" />
  </Svg>
);
const Memo = memo(SvgChatsCircleFill);
export default Memo;

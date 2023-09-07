import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLightbulbFilamentBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M180 232a12 12 0 0 1-12 12H88a12 12 0 0 1 0-24h80a12 12 0 0 1 12 12Zm40-128a92.47 92.47 0 0 1-37 73.73 7.81 7.81 0 0 0-3 6.27 20 20 0 0 1-20 20H96a20 20 0 0 1-20-20v-.23a7.76 7.76 0 0 0-3.25-6.2 91.36 91.36 0 0 1-36.75-73C35.73 54.69 76 13.2 125.79 12A92 92 0 0 1 220 104Zm-24 0a68 68 0 0 0-69.65-68C89.56 36.89 59.8 67.56 60 104.39a67.52 67.52 0 0 0 27.18 54A32.14 32.14 0 0 1 99.77 180H116v-31l-28.49-28.51a12 12 0 0 1 17-17L128 127l23.51-23.51a12 12 0 0 1 17 17L140 149v31h16.25a31.89 31.89 0 0 1 12.41-21.49A67.45 67.45 0 0 0 196 104Z" />
  </Svg>
);
const Memo = memo(SvgLightbulbFilamentBold);
export default Memo;

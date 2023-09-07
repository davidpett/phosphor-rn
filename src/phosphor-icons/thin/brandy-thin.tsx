import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBrandyThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M220 88a91.67 91.67 0 0 0-14.88-50.18 4 4 0 0 0-3.35-1.82H54.23a4 4 0 0 0-3.35 1.82A91.67 91.67 0 0 0 36 88a92.11 92.11 0 0 0 88 91.91V220H88a4 4 0 0 0 0 8h80a4 4 0 0 0 0-8h-36v-40.09A92.11 92.11 0 0 0 220 88ZM56.43 44h143.14a83.5 83.5 0 0 1 12.32 40H44.11a83.5 83.5 0 0 1 12.32-40ZM128 172a84.1 84.1 0 0 1-83.9-80h167.8a84.1 84.1 0 0 1-83.9 80Z" />
  </Svg>
);
const Memo = memo(SvgBrandyThin);
export default Memo;

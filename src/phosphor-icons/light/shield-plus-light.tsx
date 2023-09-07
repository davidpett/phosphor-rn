import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgShieldPlusLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 42H48a14 14 0 0 0-14 14v58.77c0 88.25 74.68 117.52 89.65 122.49a13.5 13.5 0 0 0 8.7 0c15-5 89.65-34.24 89.65-122.49V56a14 14 0 0 0-14-14Zm2 72.79c0 80-67.84 106.59-81.44 111.1a1.55 1.55 0 0 1-1.12 0c-13.6-4.51-81.44-31.1-81.44-111.1V56a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2ZM166 128a6 6 0 0 1-6 6h-26v26a6 6 0 0 1-12 0v-26H96a6 6 0 0 1 0-12h26V96a6 6 0 0 1 12 0v26h26a6 6 0 0 1 6 6Z" />
  </Svg>
);
const Memo = memo(SvgShieldPlusLight);
export default Memo;

import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgEggLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M185 60.67C167.18 34 145.87 18 128 18S88.82 34 71 60.67C52.57 88.32 42 121.61 42 152a86 86 0 0 0 172 0c0-30.39-10.57-63.68-29-91.33ZM128 226a74.09 74.09 0 0 1-74-74c0-28.08 9.84-58.94 27-84.67C96.11 44.65 114.56 30 128 30s31.89 14.65 47 37.33c17.15 25.73 27 56.59 27 84.67a74.09 74.09 0 0 1-74 74Z" />
  </Svg>
);
const Memo = memo(SvgEggLight);
export default Memo;

import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgRssBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M101.74 154.26A75.53 75.53 0 0 1 124 208a12 12 0 0 1-24 0 52 52 0 0 0-52-52 12 12 0 0 1 0-24 75.51 75.51 0 0 1 53.74 22.26ZM48 84a12 12 0 0 0 0 24 100 100 0 0 1 100 100 12 12 0 0 0 24 0A124 124 0 0 0 48 84Zm121.62 2.38A170.85 170.85 0 0 0 48 36a12 12 0 0 0 0 24 147 147 0 0 1 104.65 43.35A147 147 0 0 1 196 208a12 12 0 0 0 24 0 170.85 170.85 0 0 0-50.38-121.62ZM52 188a16 16 0 1 0 16 16 16 16 0 0 0-16-16Z" />
  </Svg>
);
const Memo = memo(SvgRssBold);
export default Memo;

import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPersonSimpleLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 78a30 30 0 1 0-30-30 30 30 0 0 0 30 30Zm0-48a18 18 0 1 1-18 18 18 18 0 0 1 18-18Zm101.14 101.09a6 6 0 0 1-8.23 2c-.37-.21-36.49-21.43-86.91-23v39.61l62.48 70.3a6 6 0 0 1-9 8L128 161l-59.52 67a6 6 0 0 1-9-8L122 149.72v-39.61c-50.42 1.6-86.55 22.82-86.92 23a6 6 0 0 1-6.17-10.29C30.6 121.84 71 98 128 98s97.39 23.84 99.09 24.86a6 6 0 0 1 2.05 8.23Z" />
  </Svg>
);
const Memo = memo(SvgPersonSimpleLight);
export default Memo;

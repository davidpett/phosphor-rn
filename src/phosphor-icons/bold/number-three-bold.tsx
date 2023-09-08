import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberThreeBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M180 160a60 60 0 0 1-100 44.72 12 12 0 1 1 16-17.88A36 36 0 1 0 120 124a12 12 0 0 1-9.6-19.2L144 60H88a12 12 0 0 1 0-24h80a12 12 0 0 1 9.6 19.2l-36.48 48.64A60.11 60.11 0 0 1 180 160Z" />
  </Svg>
);
const Memo = memo(SvgNumberThreeBold);
export default Memo;

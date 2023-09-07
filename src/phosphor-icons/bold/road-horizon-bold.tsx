import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgRoadHorizonBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M237.88 202.46a12 12 0 0 1-16.34-4.58L153 76h-13v4a12 12 0 0 1-24 0v-4h-13L34.46 197.88a12 12 0 1 1-20.92-11.76L75.48 76H24a12 12 0 0 1 0-24h208a12 12 0 0 1 0 24h-51.48l61.94 110.12a12 12 0 0 1-4.58 16.34ZM128 108a12 12 0 0 0-12 12v16a12 12 0 0 0 24 0v-16a12 12 0 0 0-12-12Zm0 56a12 12 0 0 0-12 12v16a12 12 0 0 0 24 0v-16a12 12 0 0 0-12-12Z" />
  </Svg>
);
const Memo = memo(SvgRoadHorizonBold);
export default Memo;

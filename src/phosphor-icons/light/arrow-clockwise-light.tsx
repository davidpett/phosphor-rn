import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowClockwiseLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M238 56v48a6 6 0 0 1-6 6h-48a6 6 0 0 1 0-12h32.55l-30.38-27.8c-.06-.06-.12-.13-.19-.19a82 82 0 1 0-1.7 117.65 6 6 0 0 1 8.24 8.73A93.46 93.46 0 0 1 128 222h-1.28a94 94 0 1 1 67.65-160.6L226 90.35V56a6 6 0 1 1 12 0Z" />
  </Svg>
);
const Memo = memo(SvgArrowClockwiseLight);
export default Memo;

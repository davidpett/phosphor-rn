import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCallBellBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M24 180h208a12 12 0 0 0 0-24h-4.09A100.16 100.16 0 0 0 140 60.72V44h12a12 12 0 0 0 0-24h-48a12 12 0 0 0 0 24h12v16.72A100.16 100.16 0 0 0 28.09 156H24a12 12 0 0 0 0 24Zm104-96a76.09 76.09 0 0 1 75.89 72H52.11A76.09 76.09 0 0 1 128 84Zm116 124a12 12 0 0 1-12 12H24a12 12 0 0 1 0-24h208a12 12 0 0 1 12 12Z" />
  </Svg>
);
const Memo = memo(SvgCallBellBold);
export default Memo;

import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFlameFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M173.79 51.48a221.25 221.25 0 0 0-41.67-34.34 8 8 0 0 0-8.24 0 221.25 221.25 0 0 0-41.67 34.34C54.59 80.48 40 112.47 40 144a88 88 0 0 0 176 0c0-31.53-14.59-63.52-42.21-92.52ZM96 184c0-27.67 22.53-47.28 32-54.3 9.48 7 32 26.63 32 54.3a32 32 0 0 1-64 0Z" />
  </Svg>
);
const Memo = memo(SvgFlameFill);
export default Memo;

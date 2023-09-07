import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBracketsRoundBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M82.33 222.19a12 12 0 0 1-16.5 4.09C64 225.16 20 198 20 128s44-97.16 45.83-98.28a12 12 0 0 1 12.41 20.53C76.71 51.21 44 72.31 44 128s32.85 76.88 34.25 77.75a12 12 0 0 1 4.08 16.44ZM190.17 29.72a12 12 0 1 0-12.42 20.53c1.4.87 34.25 21.94 34.25 77.75s-32.85 76.88-34.17 77.7a12 12 0 1 0 12.34 20.58C192 225.16 236 198 236 128s-44-97.16-45.83-98.28Z" />
  </Svg>
);
const Memo = memo(SvgBracketsRoundBold);
export default Memo;

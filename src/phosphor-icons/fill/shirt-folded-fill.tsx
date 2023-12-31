import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgShirtFoldedFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M201 48h-21.65l-13.69-13.66A8 8 0 0 0 160 32H96a8 8 0 0 0-5.66 2.34L76.65 48H55a15 15 0 0 0-15 15v154a15 15 0 0 0 15 15h61a4 4 0 0 0 4-4V112.27a8.18 8.18 0 0 1 7.47-8.25 8 8 0 0 1 8.53 8V228a4 4 0 0 0 4 4h61a15 15 0 0 0 15-15V63a15 15 0 0 0-15-15ZM86.54 115.08A4 4 0 0 1 80 112V67.31l15.24-15.24 23.47 35.21ZM128 88Zm48 24a4 4 0 0 1-2.3 3.63 3.93 3.93 0 0 1-4.21-.51l-32.2-27.82 23.47-35.21L176 67.31Z" />
  </Svg>
);
const Memo = memo(SvgShirtFoldedFill);
export default Memo;

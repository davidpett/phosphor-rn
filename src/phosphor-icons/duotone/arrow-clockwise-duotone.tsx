import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowClockwiseDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M232 56v48h-48Z" opacity={0.2} />
    <Path d="M235.06 48.57a8 8 0 0 0-8.72 1.73L206.68 70l-10.93-10a96 96 0 1 0-69.07 164H128a95.44 95.44 0 0 0 65.88-26.19 8 8 0 0 0-11-11.63 80 80 0 1 1 1.68-114.78l.25.24 10.55 9.65-17 17A8 8 0 0 0 184 112h48a8 8 0 0 0 8-8V56a8 8 0 0 0-4.94-7.43ZM224 96h-20.69L224 75.28Z" />
  </Svg>
);
const Memo = memo(SvgArrowClockwiseDuotone);
export default Memo;

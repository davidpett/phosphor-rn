import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWheelchairMotionFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M144 48a32 32 0 1 1 32 32 32 32 0 0 1-32-32Zm16 112a8 8 0 0 0-8 8 48 48 0 1 1-48-48 8 8 0 0 0 0-16 64 64 0 1 0 64 64 8 8 0 0 0-8-8Zm40-32h-58.18l17.12-29.78a8 8 0 0 0-2.57-10.69A96 96 0 0 0 42.91 94a8 8 0 1 0 10.18 12.33 80.09 80.09 0 0 1 88-9.17L121.06 132a8 8 0 0 0 6.94 12h62.24l-14.08 70.43a8 8 0 0 0 6.27 9.41 7.77 7.77 0 0 0 1.57.16 8 8 0 0 0 7.83-6.43l16-80A8 8 0 0 0 200 128Z" />
  </Svg>
);
const Memo = memo(SvgWheelchairMotionFill);
export default Memo;

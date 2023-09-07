import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgShuffleSimpleFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 48v40a8 8 0 0 1-13.66 5.66L188 79.31 156.28 111A8 8 0 0 1 145 99.72L176.69 68l-14.35-14.34A8 8 0 0 1 168 40h40a8 8 0 0 1 8 8Zm-4.94 112.61a8 8 0 0 0-8.72 1.73L188 176.69 53.66 42.34a8 8 0 0 0-11.32 11.32L176.69 188l-14.35 14.34A8 8 0 0 0 168 216h40a8 8 0 0 0 8-8v-40a8 8 0 0 0-4.94-7.39ZM99.72 145l-57.38 57.34a8 8 0 0 0 11.32 11.32L111 156.28A8 8 0 0 0 99.72 145Z" />
  </Svg>
);
const Memo = memo(SvgShuffleSimpleFill);
export default Memo;

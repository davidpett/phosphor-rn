import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPinwheelBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m232.49 215.52-44-44a64 64 0 0 0 35.59-81 12 12 0 0 0-15.38-7.17l-35.61 13a64 64 0 0 0-82.5-80.46 12 12 0 0 0-7.17 15.38l13 35.61a64 64 0 0 0-80.49 82.55 12 12 0 0 0 15.38 7.17l35.61-13a63.94 63.94 0 0 0 82.55 80.49 12 12 0 0 0 7.17-15.38l-12.95-35.59a63.53 63.53 0 0 0 15.7 3.16l56.17 56.17a12 12 0 0 0 17-17ZM129.38 39.78a40 40 0 0 1 7.43 68L110.7 36.05a39.81 39.81 0 0 1 18.68 3.73Zm-93.33 89.54a40 40 0 0 1 71.75-26.11Zm74.59 70.92a40 40 0 0 1-7.43-68L129.32 204a39.83 39.83 0 0 1-18.68-3.76Zm36.45-51.51a39.86 39.86 0 0 1-14.87-11.92L204 110.7a40 40 0 0 1-56.88 38Z" />
  </Svg>
);
const Memo = memo(SvgPinwheelBold);
export default Memo;

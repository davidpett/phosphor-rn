import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFlowArrowBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m248.49 71.51-32-32a12 12 0 0 0-17 17L211 68h-19a77.43 77.43 0 0 0-30 7.1c-14.49 6.69-32.81 21-37.81 50.92-2.69 16.17-10.58 27.4-23.43 33.39A49.4 49.4 0 0 1 90 162.93a44 44 0 1 0 .53 24.28 74.05 74.05 0 0 0 19.2-5.54c14.52-6.45 32.91-20.66 38.09-51.7 2.58-15.48 10.48-26.49 23.49-32.75A55.13 55.13 0 0 1 192 92h19l-11.52 11.51a12 12 0 0 0 17 17l32-32a12 12 0 0 0 .01-17ZM48 196a20 20 0 1 1 20-20 20 20 0 0 1-20 20Z" />
  </Svg>
);
const Memo = memo(SvgFlowArrowBold);
export default Memo;

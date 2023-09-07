import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAirplaneInFlightLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M222 216a6 6 0 0 1-6 6H72a6 6 0 0 1 0-12h144a6 6 0 0 1 6 6Zm24-80v24a6 6 0 0 1-6 6H61.07a37.77 37.77 0 0 1-36.4-27.08L10.6 92A14 14 0 0 1 24 74h8a6 6 0 0 1 4.24 1.76L58.49 98h26.1l-9.86-29.57A14 14 0 0 1 88 50h8a6 6 0 0 1 4.25 1.76L146.49 98H208a38 38 0 0 1 38 38Zm-12 0a26 26 0 0 0-26-26h-64a6 6 0 0 1-4.24-1.76L93.52 62H88a2 2 0 0 0-1.9 2.63l12.5 37.47a6 6 0 0 1-5.69 7.9H56a6 6 0 0 1-4.24-1.76L29.52 86H24a1.93 1.93 0 0 0-1.6.81 1.91 1.91 0 0 0-.31 1.76l14.06 46.9A25.86 25.86 0 0 0 61.07 154H234Z" />
  </Svg>
);
const Memo = memo(SvgAirplaneInFlightLight);
export default Memo;

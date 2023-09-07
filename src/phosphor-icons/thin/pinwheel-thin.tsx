import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPinwheelThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m226.83 221.17-53.48-53.47a56.83 56.83 0 0 0 9.79-2.6 56 56 0 0 0 33.47-71.77 4 4 0 0 0-5.13-2.39l-55.31 20.13a56.78 56.78 0 0 0 7.06-11.38 56 56 0 0 0-69.9-76.28 4 4 0 0 0-2.39 5.12l20.13 55.32a56.33 56.33 0 0 0-11.38-7.06 56 56 0 0 0-76.28 69.9 4 4 0 0 0 2.06 2.31 4 4 0 0 0 3.06.13L83.85 129a56 56 0 0 0 62.84 87.66 4 4 0 0 0 2.39-5.13L129 156.17a56.5 56.5 0 0 0 11.38 7.06 55.88 55.88 0 0 0 22.48 5.24l58.36 58.36a4 4 0 0 0 5.66-5.66ZM99.88 29.71a48 48 0 0 1 32.72 89.9Zm25.21 92.67-7.45 2.71-2.72-7.45 7.46-2.72Zm-95.38 17.76a48 48 0 0 1 89.9-32.72Zm110.43 70.17a48 48 0 0 1-32.72-89.9Zm24.29-49.82a48.08 48.08 0 0 1-44-27.89l89.9-32.72a48 48 0 0 1-45.79 60.61Z" />
  </Svg>
);
const Memo = memo(SvgPinwheelThin);
export default Memo;

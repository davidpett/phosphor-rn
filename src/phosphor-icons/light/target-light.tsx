import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTargetLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M220.06 84a102.06 102.06 0 1 1-24.31-32.27l24-24a6 6 0 0 1 8.48 8.49l-96 96a6 6 0 1 1-8.48-8.49l29.39-29.4a42 42 0 1 0 16.78 31.24 6 6 0 1 1 12-.68 54 54 0 1 1-20.22-39.06l25.54-25.55a89.91 89.91 0 1 0 22 28.93A6 6 0 1 1 220.06 84Z" />
  </Svg>
);
const Memo = memo(SvgTargetLight);
export default Memo;

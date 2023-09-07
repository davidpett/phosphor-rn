import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCloudWarningFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M247.93 124.52C246.11 77.54 207.07 40 160.06 40a88.1 88.1 0 0 0-78.77 48.67A87.48 87.48 0 0 0 72 127.73a8.18 8.18 0 0 1-7.43 8.27 8 8 0 0 1-8.57-8 103.66 103.66 0 0 1 5.34-32.92 4 4 0 0 0-4.75-5.18A64.09 64.09 0 0 0 8 152c0 35.19 29.75 64 65 64h87a88.09 88.09 0 0 0 87.93-91.48ZM152 88a8 8 0 0 1 16 0v40a8 8 0 0 1-16 0Zm8 88a12 12 0 1 1 12-12 12 12 0 0 1-12 12Z" />
  </Svg>
);
const Memo = memo(SvgCloudWarningFill);
export default Memo;

import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNotchesBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m216.49 136.49-80 80a12 12 0 1 1-17-17l80-80a12 12 0 1 1 17 17Zm-16-105a12 12 0 0 0-17 0l-152 152a12 12 0 0 0 17 17l152-152a12 12 0 0 0 0-16.98Z" />
  </Svg>
);
const Memo = memo(SvgNotchesBold);
export default Memo;

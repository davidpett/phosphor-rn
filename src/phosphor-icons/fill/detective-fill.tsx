import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDetectiveFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M256 120a8 8 0 0 1-8 8H8a8 8 0 0 1 0-16h27.92l47.5-65.41a16 16 0 0 1 25.31-.72l12.85 14.9.2.23a7.95 7.95 0 0 0 12.44 0l.2-.23 12.85-14.9a16 16 0 0 1 25.31.72l47.5 65.41H248a8 8 0 0 1 8 8Zm-76 24a36 36 0 0 0-35.77 32h-32.46a36 36 0 1 0-1.83 16h36.12A36 36 0 1 0 180 144Z" />
  </Svg>
);
const Memo = memo(SvgDetectiveFill);
export default Memo;

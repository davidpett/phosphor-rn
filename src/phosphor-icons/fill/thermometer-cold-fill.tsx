import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgThermometerColdFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m248.91 77.72-20 6.49 12.34 17a8 8 0 1 1-12.94 9.4l-12.31-17-12.34 17a8 8 0 0 1-12.94-9.4l12.34-17-20-6.49A8 8 0 0 1 188 62.5l20 6.5V48a8 8 0 0 1 16 0v21l20-6.49a8 8 0 0 1 4.95 15.22ZM176 192a56 56 0 1 1-88-45.92V40a32 32 0 0 1 64 0v106.08A56 56 0 0 1 176 192ZM136 40a16 16 0 0 0-32 0v40h32Z" />
  </Svg>
);
const Memo = memo(SvgThermometerColdFill);
export default Memo;

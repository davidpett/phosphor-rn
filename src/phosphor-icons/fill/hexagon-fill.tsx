import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHexagonFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M232 80.18v95.64a16 16 0 0 1-8.32 14l-88 48.17a15.88 15.88 0 0 1-15.36 0l-88-48.17a16 16 0 0 1-8.32-14V80.18a16 16 0 0 1 8.32-14l88-48.17a15.88 15.88 0 0 1 15.36 0l88 48.17a16 16 0 0 1 8.32 14Z" />
  </Svg>
);
const Memo = memo(SvgHexagonFill);
export default Memo;

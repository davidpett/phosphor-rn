import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMathOperationsThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M108 72a4 4 0 0 1-4 4H40a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4Zm-4 108H76v-28a4 4 0 0 0-8 0v28H40a4 4 0 0 0 0 8h28v28a4 4 0 0 0 8 0v-28h28a4 4 0 0 0 0-8Zm48-8h64a4 4 0 0 0 0-8h-64a4 4 0 0 0 0 8Zm64 24h-64a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8Zm-58.83-97.17a4 4 0 0 0 5.66 0L184 77.66l21.17 21.17a4 4 0 1 0 5.66-5.66L189.66 72l21.17-21.17a4 4 0 1 0-5.66-5.66L184 66.34l-21.17-21.17a4 4 0 0 0-5.66 5.66L178.34 72l-21.17 21.17a4 4 0 0 0 0 5.66Z" />
  </Svg>
);
const Memo = memo(SvgMathOperationsThin);
export default Memo;

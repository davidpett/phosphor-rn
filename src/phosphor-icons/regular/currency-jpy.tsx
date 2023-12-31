import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCurrencyJpy = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M206.19 53.07 144.88 128H176a8 8 0 0 1 0 16h-40v16h40a8 8 0 0 1 0 16h-40v40a8 8 0 0 1-16 0v-40H80a8 8 0 0 1 0-16h40v-16H80a8 8 0 0 1 0-16h31.12L49.81 53.07a8 8 0 0 1 12.38-10.14L128 123.37l65.81-80.44a8 8 0 1 1 12.38 10.14Z" />
  </Svg>
);
const Memo = memo(SvgCurrencyJpy);
export default Memo;

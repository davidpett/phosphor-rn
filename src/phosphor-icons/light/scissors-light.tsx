import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgScissorsLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M159.38 112a6 6 0 0 1 1.57-8.34l67.66-46.31a6 6 0 0 1 6.78 9.91l-67.67 46.3a6 6 0 0 1-8.34-1.56ZM237 197.09a6 6 0 0 1-8.34 1.56L136 135.27l-45 30.79A34 34 0 1 1 84 156a1.8 1.8 0 0 0 .19.2l41.18-28.2-41.14-28.16-.23.16a34 34 0 1 1 7-10.1l144.38 98.8a6 6 0 0 1 1.62 8.39ZM75.56 91.55a22 22 0 1 0-31.12 0 21.88 21.88 0 0 0 31.12 0ZM82 180a22 22 0 1 0-6.44 15.56A21.88 21.88 0 0 0 82 180Z" />
  </Svg>
);
const Memo = memo(SvgScissorsLight);
export default Memo;

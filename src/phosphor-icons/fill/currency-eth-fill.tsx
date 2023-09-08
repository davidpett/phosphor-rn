import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCurrencyEthFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m222.29 123.06-88-112a8 8 0 0 0-12.58 0l-88 112a8 8 0 0 0 0 9.88l88 112a8 8 0 0 0 12.58 0l88-112a8 8 0 0 0 0-9.88ZM136 155.58V39.13l67.42 85.8Zm-16 0-67.42-30.65L120 39.13Zm0 17.57v43.72l-53.43-68Z" />
  </Svg>
);
const Memo = memo(SvgCurrencyEthFill);
export default Memo;

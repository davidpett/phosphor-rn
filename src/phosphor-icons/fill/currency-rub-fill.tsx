import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCurrencyRubFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M176 108a28 28 0 0 1-28 28h-36V80h36a28 28 0 0 1 28 28Zm56 20A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-40-20a44.05 44.05 0 0 0-44-44h-44a8 8 0 0 0-8 8v64H80a8 8 0 0 0 0 16h16v16H80a8 8 0 0 0 0 16h16v16a8 8 0 0 0 16 0v-16h40a8 8 0 0 0 0-16h-40v-16h36a44.05 44.05 0 0 0 44-44Z" />
  </Svg>
);
const Memo = memo(SvgCurrencyRubFill);
export default Memo;

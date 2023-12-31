import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCurrencyDollarFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M116 80h4v40h-4a20 20 0 0 1 0-40Zm32 56h-12v40h12a20 20 0 0 0 0-40Zm84-8A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-48 28a36 36 0 0 0-36-36h-12V80h4a20 20 0 0 1 20 20 8 8 0 0 0 16 0 36 36 0 0 0-36-36h-4v-8a8 8 0 0 0-16 0v8h-4a36 36 0 0 0 0 72h4v40h-8a20 20 0 0 1-20-20 8 8 0 0 0-16 0 36 36 0 0 0 36 36h8v8a8 8 0 0 0 16 0v-8h12a36 36 0 0 0 36-36Z" />
  </Svg>
);
const Memo = memo(SvgCurrencyDollarFill);
export default Memo;

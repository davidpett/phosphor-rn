import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCurrencyNgnLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 138h-18v-20h18a6 6 0 0 0 0-12h-18V46a6 6 0 0 0-12 0v60h-67.56L68.73 42.31A6 6 0 0 0 58 46v60H40a6 6 0 0 0 0 12h18v20H40a6 6 0 0 0 0 12h18v60a6 6 0 0 0 12 0v-60h67.56l49.71 63.69A6 6 0 0 0 198 210v-60h18a6 6 0 0 0 0-12Zm-30-20v20h-42.58l-15.61-20ZM70 63.44 103.22 106H70ZM70 138v-20h42.58l15.61 20Zm116 54.56L152.78 150H186Z" />
  </Svg>
);
const Memo = memo(SvgCurrencyNgnLight);
export default Memo;

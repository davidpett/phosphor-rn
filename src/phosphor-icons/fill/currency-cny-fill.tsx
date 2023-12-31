import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCurrencyCnyFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24ZM80 72h96a8 8 0 0 1 0 16H80a8 8 0 0 1 0-16Zm120 104a8 8 0 0 1-8 8h-24a32 32 0 0 1-32-32v-24h-16.52a64.31 64.31 0 0 1-54.35 55.35 7.28 7.28 0 0 1-1.14.08 8 8 0 0 1-1.12-15.92A48.23 48.23 0 0 0 103.31 128H72a8 8 0 0 1 0-16h112a8 8 0 0 1 0 16h-32v24a16 16 0 0 0 16 16h16v-8a8 8 0 0 1 16 0Z" />
  </Svg>
);
const Memo = memo(SvgCurrencyCnyFill);
export default Memo;

import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgClockCountdownDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 128a96 96 0 1 1-96-96 96 96 0 0 1 96 96Z" opacity={0.2} />
    <Path d="M232 136.66A104.12 104.12 0 1 1 119.34 24a8 8 0 0 1 1.32 16A88.12 88.12 0 1 0 216 135.34a8 8 0 0 1 16 1.32ZM120 72v56a8 8 0 0 0 8 8h56a8 8 0 0 0 0-16h-48V72a8 8 0 0 0-16 0Zm40-24a12 12 0 1 0-12-12 12 12 0 0 0 12 12Zm36 24a12 12 0 1 0-12-12 12 12 0 0 0 12 12Zm24 36a12 12 0 1 0-12-12 12 12 0 0 0 12 12Z" />
  </Svg>
);
const Memo = memo(SvgClockCountdownDuotone);
export default Memo;

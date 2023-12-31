import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCurrencyInrFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm29.25 64H176a8 8 0 0 1 0 16h-16a48.05 48.05 0 0 1-48 48h-2.71l48 42a8 8 0 0 1-10.54 12l-64-56A8 8 0 0 1 88 136h24a32 32 0 0 0 32-32H88a8 8 0 0 1 0-16h51.69A32 32 0 0 0 112 72H88a8 8 0 0 1 0-16h88a8 8 0 0 1 0 16h-28.26a48.15 48.15 0 0 1 9.51 16Z" />
  </Svg>
);
const Memo = memo(SvgCurrencyInrFill);
export default Memo;

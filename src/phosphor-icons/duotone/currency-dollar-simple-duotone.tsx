import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCurrencyDollarSimpleDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M192 168a40 40 0 0 1-40 40h-24v-80h24a40 40 0 0 1 40 40ZM112 48a40 40 0 0 0 0 80h16V48Z"
      opacity={0.2}
    />
    <Path d="M200 168a48.05 48.05 0 0 1-48 48h-16v16a8 8 0 0 1-16 0v-16h-16a48.05 48.05 0 0 1-48-48 8 8 0 0 1 16 0 32 32 0 0 0 32 32h48a32 32 0 0 0 0-64h-40a48 48 0 0 1 0-96h8V24a8 8 0 0 1 16 0v16h8a48.05 48.05 0 0 1 48 48 8 8 0 0 1-16 0 32 32 0 0 0-32-32h-32a32 32 0 0 0 0 64h40a48.05 48.05 0 0 1 48 48Z" />
  </Svg>
);
const Memo = memo(SvgCurrencyDollarSimpleDuotone);
export default Memo;

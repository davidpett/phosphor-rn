import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHardDrivesDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M216 152v48a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8v-48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8Zm-8-104H48a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h160a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8Z"
      opacity={0.2}
    />
    <Path d="M208 136H48a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-48a16 16 0 0 0-16-16Zm0 64H48v-48h160v48Zm0-160H48a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16Zm0 64H48V56h160v48Zm-16-24a12 12 0 1 1-12-12 12 12 0 0 1 12 12Zm0 96a12 12 0 1 1-12-12 12 12 0 0 1 12 12Z" />
  </Svg>
);
const Memo = memo(SvgHardDrivesDuotone);
export default Memo;

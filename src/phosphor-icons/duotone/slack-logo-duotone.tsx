import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSlackLogoDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M224 152a24 24 0 0 1-24 24h-48a24 24 0 0 1 24 24 24 24 0 0 1-24 24 24 24 0 0 1-24-24v-24h24a24 24 0 0 1-24-24v-24h72a24 24 0 0 1 24 24ZM104 80h24V56a24 24 0 0 0-24-24 24 24 0 0 0-24 24 24 24 0 0 0 24 24H56a24 24 0 0 0-24 24 24 24 0 0 0 24 24h72v-24a24 24 0 0 0-24-24Z"
      opacity={0.2}
    />
    <Path d="M221.13 128A32 32 0 0 0 184 76.31V56a32 32 0 0 0-56-21.13A32 32 0 0 0 76.31 72H56a32 32 0 0 0-21.13 56A32 32 0 0 0 72 179.69V200a32 32 0 0 0 56 21.13A32 32 0 0 0 179.69 184H200a32 32 0 0 0 21.13-56ZM200 88a16 16 0 0 1 0 32h-16v-16a16 16 0 0 1 16-16Zm-48-48a16 16 0 0 1 16 16v48a16 16 0 0 1-16 16h-16V56a16 16 0 0 1 16-16ZM88 56a16 16 0 0 1 32 0v16h-16a16 16 0 0 1-16-16Zm-48 48a16 16 0 0 1 16-16h48a16 16 0 0 1 16 16v16H56a16 16 0 0 1-16-16Zm16 64a16 16 0 0 1 0-32h16v16a16 16 0 0 1-16 16Zm48 48a16 16 0 0 1-16-16v-48a16 16 0 0 1 16-16h16v64a16 16 0 0 1-16 16Zm64-16a16 16 0 0 1-32 0v-16h16a16 16 0 0 1 16 16Zm32-32h-48a16 16 0 0 1-16-16v-16h64a16 16 0 0 1 0 32Z" />
  </Svg>
);
const Memo = memo(SvgSlackLogoDuotone);
export default Memo;

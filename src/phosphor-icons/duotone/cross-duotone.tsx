import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCrossDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M208 88v32a8 8 0 0 1-8 8h-40a8 8 0 0 0-8 8v88a8 8 0 0 1-8 8h-32a8 8 0 0 1-8-8v-88a8 8 0 0 0-8-8H56a8 8 0 0 1-8-8V88a8 8 0 0 1 8-8h40a8 8 0 0 0 8-8V32a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8v40a8 8 0 0 0 8 8h40a8 8 0 0 1 8 8Z"
      opacity={0.2}
    />
    <Path d="M200 72h-40V32a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v40H56a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h40v88a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-88h40a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16Zm0 48h-40a16 16 0 0 0-16 16v88h-32v-88a16 16 0 0 0-16-16H56V88h40a16 16 0 0 0 16-16V32h32v40a16 16 0 0 0 16 16h40Z" />
  </Svg>
);
const Memo = memo(SvgCrossDuotone);
export default Memo;

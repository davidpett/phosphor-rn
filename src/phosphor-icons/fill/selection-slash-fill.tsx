import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSelectionSlashFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-56 24h32a16 16 0 0 1 16 16v32a8 8 0 0 1-16 0V72h-32a8 8 0 0 1 0-16Zm-48 144H72a16 16 0 0 1-16-16v-32a8 8 0 0 1 16 0v32h32a8 8 0 0 1 0 16Zm101.66 5.66a8 8 0 0 1-11.32 0l-5.65-5.66H152a8 8 0 0 1 0-16h20.69L72 83.31V104a8 8 0 0 1-16 0V67.31l-5.66-5.65a8 8 0 0 1 11.32-11.32l8 8 136 136a8 8 0 0 1 0 11.32Z" />
  </Svg>
);
const Memo = memo(SvgSelectionSlashFill);
export default Memo;

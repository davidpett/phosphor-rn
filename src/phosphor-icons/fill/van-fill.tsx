import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgVanFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m254.07 114.79-45.54-53.06A16 16 0 0 0 196.26 56H32a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h17a32 32 0 0 0 62 0h50a32 32 0 0 0 62 0h17a16 16 0 0 0 16-16v-64a8 8 0 0 0-1.93-5.21ZM32 112V72h56v40Zm48 96a16 16 0 1 1 16-16 16 16 0 0 1-16 16Zm80-96h-56V72h56Zm32 96a16 16 0 1 1 16-16 16 16 0 0 1-16 16Zm-16-96V72h20.26l34.33 40Z" />
  </Svg>
);
const Memo = memo(SvgVanFill);
export default Memo;

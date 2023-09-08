import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBehanceLogoFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M92 120H64V96h28a12 12 0 0 1 0 24Zm4 16H64v32h32a16 16 0 0 0 0-32Zm80-16a24 24 0 0 0-22.62 16h45.24A24 24 0 0 0 176 120Zm64-64v144a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16Zm-96 32a8 8 0 0 0 8 8h48a8 8 0 0 0 0-16h-48a8 8 0 0 0-8 8Zm-16 64a32 32 0 0 0-14.13-26.53A28 28 0 0 0 92 80H56a8 8 0 0 0-8 8v88a8 8 0 0 0 8 8h40a32 32 0 0 0 32-32Zm88-8a40 40 0 1 0-13.54 30 8 8 0 0 0-10.59-12 24 24 0 0 1-38.49-10H208a8 8 0 0 0 8-8Z" />
  </Svg>
);
const Memo = memo(SvgBehanceLogoFill);
export default Memo;

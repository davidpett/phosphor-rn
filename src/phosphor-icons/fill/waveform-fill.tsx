import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWaveformFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M64 96v64a8 8 0 0 1-8 8h-8a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h8a8 8 0 0 1 8 8Zm32-72h-8a8 8 0 0 0-8 8v192a8 8 0 0 0 8 8h8a8 8 0 0 0 8-8V32a8 8 0 0 0-8-8Zm40 32h-8a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h8a8 8 0 0 0 8-8V64a8 8 0 0 0-8-8Zm40 32h-8a8 8 0 0 0-8 8v64a8 8 0 0 0 8 8h8a8 8 0 0 0 8-8V96a8 8 0 0 0-8-8Zm40-16h-8a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8h8a8 8 0 0 0 8-8V80a8 8 0 0 0-8-8Z" />
  </Svg>
);
const Memo = memo(SvgWaveformFill);
export default Memo;

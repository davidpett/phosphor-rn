import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWaveformThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M52 96v64a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0Zm36-68a4 4 0 0 0-4 4v192a4 4 0 0 0 8 0V32a4 4 0 0 0-4-4Zm40 32a4 4 0 0 0-4 4v128a4 4 0 0 0 8 0V64a4 4 0 0 0-4-4Zm40 32a4 4 0 0 0-4 4v64a4 4 0 0 0 8 0V96a4 4 0 0 0-4-4Zm40-16a4 4 0 0 0-4 4v96a4 4 0 0 0 8 0V80a4 4 0 0 0-4-4Z" />
  </Svg>
);
const Memo = memo(SvgWaveformThin);
export default Memo;

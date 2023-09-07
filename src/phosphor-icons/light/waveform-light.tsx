import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWaveformLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M54 96v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0Zm34-70a6 6 0 0 0-6 6v192a6 6 0 0 0 12 0V32a6 6 0 0 0-6-6Zm40 32a6 6 0 0 0-6 6v128a6 6 0 0 0 12 0V64a6 6 0 0 0-6-6Zm40 32a6 6 0 0 0-6 6v64a6 6 0 0 0 12 0V96a6 6 0 0 0-6-6Zm40-16a6 6 0 0 0-6 6v96a6 6 0 0 0 12 0V80a6 6 0 0 0-6-6Z" />
  </Svg>
);
const Memo = memo(SvgWaveformLight);
export default Memo;

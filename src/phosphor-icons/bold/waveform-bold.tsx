import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWaveformBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M60 96v64a12 12 0 0 1-24 0V96a12 12 0 0 1 24 0Zm28-76a12 12 0 0 0-12 12v192a12 12 0 0 0 24 0V32a12 12 0 0 0-12-12Zm40 32a12 12 0 0 0-12 12v128a12 12 0 0 0 24 0V64a12 12 0 0 0-12-12Zm40 32a12 12 0 0 0-12 12v64a12 12 0 0 0 24 0V96a12 12 0 0 0-12-12Zm40-16a12 12 0 0 0-12 12v96a12 12 0 0 0 24 0V80a12 12 0 0 0-12-12Z" />
  </Svg>
);
const Memo = memo(SvgWaveformBold);
export default Memo;

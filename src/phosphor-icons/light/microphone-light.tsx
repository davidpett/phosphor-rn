import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMicrophoneLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 174a46.06 46.06 0 0 0 46-46V64a46 46 0 0 0-92 0v64a46.06 46.06 0 0 0 46 46ZM94 64a34 34 0 0 1 68 0v64a34 34 0 0 1-68 0Zm40 141.75V232a6 6 0 0 1-12 0v-26.25A78.09 78.09 0 0 1 50 128a6 6 0 0 1 12 0 66 66 0 0 0 132 0 6 6 0 0 1 12 0 78.09 78.09 0 0 1-72 77.75Z" />
  </Svg>
);
const Memo = memo(SvgMicrophoneLight);
export default Memo;

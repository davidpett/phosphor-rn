import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSpeakerSimpleXFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M155.52 24.81a8 8 0 0 0-8.43.88L77.25 80H32a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h45.25l69.84 54.31A7.94 7.94 0 0 0 152 232a8 8 0 0 0 8-8V32a8 8 0 0 0-4.48-7.19ZM227.31 128l18.35-18.34a8 8 0 0 0-11.32-11.32L216 116.69l-18.34-18.35a8 8 0 0 0-11.32 11.32L204.69 128l-18.35 18.34a8 8 0 0 0 11.32 11.32L216 139.31l18.34 18.35a8 8 0 0 0 11.32-11.32Z" />
  </Svg>
);
const Memo = memo(SvgSpeakerSimpleXFill);
export default Memo;

import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSpeakerLowDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M80 88v80H32a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8Z" opacity={0.2} />
    <Path d="M155.51 24.81a8 8 0 0 0-8.42.88L77.25 80H32a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h45.25l69.84 54.31A8 8 0 0 0 160 224V32a8 8 0 0 0-4.49-7.19ZM32 96h40v64H32Zm112 111.64-56-43.55V91.91l56-43.55ZM208 128a39.93 39.93 0 0 1-10 26.46 8 8 0 0 1-12-10.58 24 24 0 0 0 0-31.72 8 8 0 1 1 12-10.58A40 40 0 0 1 208 128Z" />
  </Svg>
);
const Memo = memo(SvgSpeakerLowDuotone);
export default Memo;
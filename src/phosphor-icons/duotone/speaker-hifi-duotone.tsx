import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSpeakerHifiDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M192 32H64a8 8 0 0 0-8 8v176a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8Zm-64 152a32 32 0 1 1 32-32 32 32 0 0 1-32 32Z"
      opacity={0.2}
    />
    <Path d="M192 24H64a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16Zm0 192H64V40h128ZM116 76a12 12 0 1 1 12 12 12 12 0 0 1-12-12Zm12 116a40 40 0 1 0-40-40 40 40 0 0 0 40 40Zm0-64a24 24 0 1 1-24 24 24 24 0 0 1 24-24Z" />
  </Svg>
);
const Memo = memo(SvgSpeakerHifiDuotone);
export default Memo;

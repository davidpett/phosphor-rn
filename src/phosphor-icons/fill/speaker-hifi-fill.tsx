import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSpeakerHifiFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M152 160a24 24 0 1 1-24-24 24 24 0 0 1 24 24Zm56-120v176a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h128a16 16 0 0 1 16 16Zm-92 28a12 12 0 1 0 12-12 12 12 0 0 0-12 12Zm52 92a40 40 0 1 0-40 40 40 40 0 0 0 40-40Z" />
  </Svg>
);
const Memo = memo(SvgSpeakerHifiFill);
export default Memo;

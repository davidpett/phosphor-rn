import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSpeakerHifiBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M192 20H64a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h128a20 20 0 0 0 20-20V40a20 20 0 0 0-20-20Zm-4 192H68V44h120ZM112 76a16 16 0 1 1 16 16 16 16 0 0 1-16-16Zm16 120a44 44 0 1 0-44-44 44.05 44.05 0 0 0 44 44Zm0-64a20 20 0 1 1-20 20 20 20 0 0 1 20-20Z" />
  </Svg>
);
const Memo = memo(SvgSpeakerHifiBold);
export default Memo;

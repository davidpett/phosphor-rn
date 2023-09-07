import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgRewindCircleBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20Zm0 192a84 84 0 1 1 84-84 84.09 84.09 0 0 1-84 84Zm52-112v56a12 12 0 0 1-19.37 9.47l-36-28c-.22-.17-.42-.36-.63-.55V156a12 12 0 0 1-19.37 9.47l-36-28a12 12 0 0 1 0-18.94l36-28A12 12 0 0 1 124 100v19.08c.21-.19.41-.38.63-.55l36-28A12 12 0 0 1 180 100Z" />
  </Svg>
);
const Memo = memo(SvgRewindCircleBold);
export default Memo;

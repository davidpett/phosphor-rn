import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberCircleFourBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20Zm0 192a84 84 0 1 1 84-84 84.09 84.09 0 0 1-84 84Zm44-68a12 12 0 0 1-12 12h-4v20a12 12 0 0 1-24 0v-20H96a12 12 0 0 1-11.32-16l24-68a12 12 0 1 1 22.64 8L113 132h19v-16a12 12 0 0 1 24 0v16h4a12 12 0 0 1 12 12Z" />
  </Svg>
);
const Memo = memo(SvgNumberCircleFourBold);
export default Memo;

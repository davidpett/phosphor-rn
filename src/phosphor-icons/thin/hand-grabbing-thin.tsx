import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHandGrabbingThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M188 84a23.87 23.87 0 0 0-16.07 6.2A24 24 0 0 0 128 78.75 24 24 0 0 0 84 92v24H68a24 24 0 0 0-24 24v12a84 84 0 0 0 168 0v-44a24 24 0 0 0-24-24Zm16 68a76 76 0 0 1-152 0v-12a16 16 0 0 1 16-16h16v28a4 4 0 0 0 8 0V92a16 16 0 0 1 32 0v28a4 4 0 0 0 8 0V92a16 16 0 0 1 32 0v28a4 4 0 0 0 8 0v-12a16 16 0 0 1 32 0Z" />
  </Svg>
);
const Memo = memo(SvgHandGrabbingThin);
export default Memo;

import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSkipForwardCircleLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26Zm0 192a90 90 0 1 1 90-90 90.1 90.1 0 0 1-90 90Zm32-136a6 6 0 0 0-6 6v29.17L99.18 82.91A6 6 0 0 0 90 88v80a6 6 0 0 0 9.18 5.09L154 138.83V168a6 6 0 0 0 12 0V88a6 6 0 0 0-6-6Zm-58 75.17V98.83L148.68 128Z" />
  </Svg>
);
const Memo = memo(SvgSkipForwardCircleLight);
export default Memo;

import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCirclesThreeBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M176 76a48 48 0 1 0-48 48 48.05 48.05 0 0 0 48-48Zm-48 24a24 24 0 1 1 24-24 24 24 0 0 1-24 24Zm60 24a48 48 0 1 0 48 48 48.05 48.05 0 0 0-48-48Zm0 72a24 24 0 1 1 24-24 24 24 0 0 1-24 24ZM68 124a48 48 0 1 0 48 48 48.05 48.05 0 0 0-48-48Zm0 72a24 24 0 1 1 24-24 24 24 0 0 1-24 24Z" />
  </Svg>
);
const Memo = memo(SvgCirclesThreeBold);
export default Memo;

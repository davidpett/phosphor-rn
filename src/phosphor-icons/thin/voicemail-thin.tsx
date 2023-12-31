import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgVoicemailThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 76a52 52 0 0 0-27.66 96H83.66A52 52 0 1 0 56 180h144a52 52 0 0 0 0-104ZM12 128a44 44 0 1 1 44 44 44.05 44.05 0 0 1-44-44Zm188 44a44 44 0 1 1 44-44 44.05 44.05 0 0 1-44 44Z" />
  </Svg>
);
const Memo = memo(SvgVoicemailThin);
export default Memo;

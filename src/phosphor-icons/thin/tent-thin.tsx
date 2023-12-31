import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTentThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m251.66 198.38-64-144A4 4 0 0 0 184 52H72a4 4 0 0 0-3.63 2.35v.06l-64 143.93A4 4 0 0 0 8 204h240a4 4 0 0 0 3.66-5.62ZM68 74.85V196H14.16ZM76 196V74.85L129.84 196Zm62.6 0L78.16 60H181.4l60.44 136Z" />
  </Svg>
);
const Memo = memo(SvgTentThin);
export default Memo;

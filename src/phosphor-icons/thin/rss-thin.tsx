import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgRssThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M96.08 159.92A67.52 67.52 0 0 1 116 208a4 4 0 0 1-8 0 60 60 0 0 0-60-60 4 4 0 0 1 0-8 67.52 67.52 0 0 1 48.08 19.92ZM48 92a4 4 0 0 0 0 8 108 108 0 0 1 108 108 4 4 0 0 0 8 0A116 116 0 0 0 48 92Zm116 0A162.92 162.92 0 0 0 48 44a4 4 0 0 0 0 8 155 155 0 0 1 110.31 45.69A155 155 0 0 1 204 208a4 4 0 0 0 8 0 162.92 162.92 0 0 0-48-116ZM52 196a8 8 0 1 0 8 8 8 8 0 0 0-8-8Z" />
  </Svg>
);
const Memo = memo(SvgRssThin);
export default Memo;

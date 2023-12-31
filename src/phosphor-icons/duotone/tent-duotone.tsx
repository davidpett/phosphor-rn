import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTentDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M136 200H8L72 56Z" opacity={0.2} />
    <Path d="m255.31 196.75-64-144A8 8 0 0 0 184 48H72a8 8 0 0 0-7.27 4.69.21.21 0 0 0 0 .06v.12L.69 196.75A8 8 0 0 0 8 208h240a8 8 0 0 0 7.31-11.25ZM64 192H20.31L64 93.7Zm16 0V93.7l43.69 98.3Zm61.2 0L84.31 64h94.49l56.89 128Z" />
  </Svg>
);
const Memo = memo(SvgTentDuotone);
export default Memo;

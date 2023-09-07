import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgRepeatOnceBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M20 128a76.08 76.08 0 0 1 76-76h99l-3.52-3.51a12 12 0 1 1 17-17l24 24a12 12 0 0 1 0 17l-24 24a12 12 0 0 1-17-17L195 76H96a52.06 52.06 0 0 0-52 52 12 12 0 0 1-24 0Zm204-12a12 12 0 0 0-12 12 52.06 52.06 0 0 1-52 52H61l3.52-3.51a12 12 0 1 0-17-17l-24 24a12 12 0 0 0 0 17l24 24a12 12 0 1 0 17-17L61 204h99a76.08 76.08 0 0 0 76-76 12 12 0 0 0-12-12Zm-88 48a12 12 0 0 0 12-12v-48a12 12 0 0 0-17.36-10.74l-16 8a12 12 0 0 0 9.36 22V152a12 12 0 0 0 12 12Z" />
  </Svg>
);
const Memo = memo(SvgRepeatOnceBold);
export default Memo;

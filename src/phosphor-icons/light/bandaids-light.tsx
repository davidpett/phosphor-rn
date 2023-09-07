import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBandaidsLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m181.74 128 29.13-29.13a38 38 0 1 0-53.74-53.74L128 74.26 98.87 45.13a38 38 0 1 0-53.74 53.74L74.26 128l-29.13 29.13a38 38 0 1 0 53.74 53.74L128 181.74l29.13 29.13a38 38 0 1 0 53.74-53.74Zm-16.12-74.38a26 26 0 1 1 36.76 36.77l-29.13 29.13-36.76-36.77Zm-.85 74.38L128 164.77 91.23 128 128 91.23ZM53.62 90.38a26 26 0 1 1 36.76-36.76l29.13 29.13-36.76 36.77Zm36.76 112a26 26 0 1 1-36.76-36.76l29.13-29.13 36.76 36.76Zm112 0a26 26 0 0 1-36.76 0l-29.14-29.13 36.77-36.77 29.13 29.14a26 26 0 0 1 0 36.76ZM118 128a10 10 0 1 1 10 10 10 10 0 0 1-10-10Z" />
  </Svg>
);
const Memo = memo(SvgBandaidsLight);
export default Memo;

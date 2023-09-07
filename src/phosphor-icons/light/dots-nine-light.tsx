import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDotsNineLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M70 60a10 10 0 1 1-10-10 10 10 0 0 1 10 10Zm58-10a10 10 0 1 0 10 10 10 10 0 0 0-10-10Zm68 20a10 10 0 1 0-10-10 10 10 0 0 0 10 10ZM60 118a10 10 0 1 0 10 10 10 10 0 0 0-10-10Zm68 0a10 10 0 1 0 10 10 10 10 0 0 0-10-10Zm68 0a10 10 0 1 0 10 10 10 10 0 0 0-10-10ZM60 186a10 10 0 1 0 10 10 10 10 0 0 0-10-10Zm68 0a10 10 0 1 0 10 10 10 10 0 0 0-10-10Zm68 0a10 10 0 1 0 10 10 10 10 0 0 0-10-10Z" />
  </Svg>
);
const Memo = memo(SvgDotsNineLight);
export default Memo;

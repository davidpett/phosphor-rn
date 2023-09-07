import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgRssSimpleLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M214 200a6 6 0 0 1-12 0c0-80.5-65.5-146-146-146a6 6 0 0 1 0-12c87.12 0 158 70.88 158 158ZM56 114a6 6 0 0 0 0 12 74.09 74.09 0 0 1 74 74 6 6 0 0 0 12 0 86.1 86.1 0 0 0-86-86Zm4 72a10 10 0 1 0 10 10 10 10 0 0 0-10-10Z" />
  </Svg>
);
const Memo = memo(SvgRssSimpleLight);
export default Memo;

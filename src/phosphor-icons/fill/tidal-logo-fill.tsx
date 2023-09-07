import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTidalLogoFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m253.66 101.66-36 36a8 8 0 0 1-11.32 0l-36-36-.34-.38-.34.38L135.31 136l34.35 34.34a8 8 0 0 1 0 11.32l-36 36a8 8 0 0 1-11.32 0l-36-36a8 8 0 0 1 0-11.32L120.69 136l-34.35-34.34-.34-.38-.34.38-36 36a8 8 0 0 1-11.32 0l-36-36a8 8 0 0 1 0-11.32l36-36a8 8 0 0 1 11.32 0l36 36 .34.38.34-.38 36-36a8 8 0 0 1 11.32 0l36 36 .34.38.34-.38 36-36a8 8 0 0 1 11.32 0l36 36a8 8 0 0 1 0 11.32Z" />
  </Svg>
);
const Memo = memo(SvgTidalLogoFill);
export default Memo;

import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHighlighterCircleLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200.12 55.87A102 102 0 1 0 55.88 200.12 102 102 0 1 0 200.12 55.87ZM94 211.37V152a2 2 0 0 1 2-2h64a2 2 0 0 1 2 2v59.37a90.49 90.49 0 0 1-68 0ZM146 138h-36V99.71l36-18Zm45.64 53.64A90.93 90.93 0 0 1 174 205.39V152a14 14 0 0 0-14-14h-2V72a6 6 0 0 0-8.68-5.37l-48 24A6 6 0 0 0 98 96v42h-2a14 14 0 0 0-14 14v53.39a90.93 90.93 0 0 1-17.64-13.75 90 90 0 1 1 127.28 0Z" />
  </Svg>
);
const Memo = memo(SvgHighlighterCircleLight);
export default Memo;

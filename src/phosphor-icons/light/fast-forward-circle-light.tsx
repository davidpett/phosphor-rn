import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFastForwardCircleLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26Zm0 192a90 90 0 1 1 90-90 90.1 90.1 0 0 1-90 90Zm63.33-95-48-32a6 6 0 0 0-9.33 5v26.12L87.33 91A6 6 0 0 0 78 96v64a6 6 0 0 0 9.33 5L134 133.88V160a6 6 0 0 0 9.33 5l48-32a6 6 0 0 0 0-10ZM90 148.79v-41.58L121.18 128Zm56 0v-41.58L177.18 128Z" />
  </Svg>
);
const Memo = memo(SvgFastForwardCircleLight);
export default Memo;

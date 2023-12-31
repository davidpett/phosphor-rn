import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTelevisionLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 66h-73.52l37.76-37.76a6 6 0 0 0-8.48-8.48L128 63.51 84.24 19.76a6 6 0 1 0-8.48 8.48L113.52 66H40a14 14 0 0 0-14 14v120a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V80a14 14 0 0 0-14-14ZM38 200V80a2 2 0 0 1 2-2h106v124H40a2 2 0 0 1-2-2Zm180 0a2 2 0 0 1-2 2h-58V78h58a2 2 0 0 1 2 2Zm-20-84a10 10 0 1 1-10-10 10 10 0 0 1 10 10Zm0 48a10 10 0 1 1-10-10 10 10 0 0 1 10 10Z" />
  </Svg>
);
const Memo = memo(SvgTelevisionLight);
export default Memo;

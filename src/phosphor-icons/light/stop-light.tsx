import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgStopLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200.73 42H55.27A13.28 13.28 0 0 0 42 55.27v145.46A13.28 13.28 0 0 0 55.27 214h145.46A13.28 13.28 0 0 0 214 200.73V55.27A13.28 13.28 0 0 0 200.73 42ZM202 200.73a1.27 1.27 0 0 1-1.27 1.27H55.27a1.27 1.27 0 0 1-1.27-1.27V55.27A1.27 1.27 0 0 1 55.27 54h145.46a1.27 1.27 0 0 1 1.27 1.27Z" />
  </Svg>
);
const Memo = memo(SvgStopLight);
export default Memo;

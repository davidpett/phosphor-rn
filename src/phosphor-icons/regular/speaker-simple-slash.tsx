import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSpeakerSimpleSlash = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M184 152v-48a8 8 0 0 1 16 0v48a8 8 0 0 1-16 0Zm40-72a8 8 0 0 0-8 8v80a8 8 0 0 0 16 0V88a8 8 0 0 0-8-8Zm-10.08 130.62a8 8 0 1 1-11.84 10.76L160 175.09V224a8 8 0 0 1-12.91 6.31L77.25 176H32a16 16 0 0 1-16-16V96a16 16 0 0 1 16-16h41.55L42.08 45.38a8 8 0 1 1 11.84-10.76ZM144 157.49 88.1 96H32v64h48a7.94 7.94 0 0 1 4.91 1.69L144 207.64Zm-26.94-88.18 26.94-21v58.47a8 8 0 0 0 16 0V32a8 8 0 0 0-12.91-6.31l-39.85 31a8 8 0 0 0 9.82 12.63Z" />
  </Svg>
);
const Memo = memo(SvgSpeakerSimpleSlash);
export default Memo;

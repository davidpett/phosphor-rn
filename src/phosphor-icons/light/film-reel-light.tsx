import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFilmReelLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 218h-48a102 102 0 1 0-48 12h96a6 6 0 0 0 0-12ZM38 128a90 90 0 1 1 90 90 90.1 90.1 0 0 1-90-90Zm90-26a22 22 0 1 0-22-22 22 22 0 0 0 22 22Zm0-32a10 10 0 1 1-10 10 10 10 0 0 1 10-10Zm22 106a22 22 0 1 0-22 22 22 22 0 0 0 22-22Zm-32 0a10 10 0 1 1 10 10 10 10 0 0 1-10-10Zm58-26a22 22 0 1 0-22-22 22 22 0 0 0 22 22Zm0-32a10 10 0 1 1-10 10 10 10 0 0 1 10-10Zm-96-12a22 22 0 1 0 22 22 22 22 0 0 0-22-22Zm0 32a10 10 0 1 1 10-10 10 10 0 0 1-10 10Z" />
  </Svg>
);
const Memo = memo(SvgFilmReelLight);
export default Memo;

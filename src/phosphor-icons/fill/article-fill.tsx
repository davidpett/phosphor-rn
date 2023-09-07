import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArticleFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16Zm-40 128H80a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16Zm0-32H80a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16Zm0-32H80a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16Z" />
  </Svg>
);
const Memo = memo(SvgArticleFill);
export default Memo;

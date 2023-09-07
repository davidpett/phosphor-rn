import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgThumbsDownFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m239.82 157-12-96A24 24 0 0 0 204 40H32a16 16 0 0 0-16 16v88a16 16 0 0 0 16 16h43.06l37.78 75.58A8 8 0 0 0 120 240a40 40 0 0 0 40-40v-16h56a24 24 0 0 0 23.82-27ZM72 144H32V56h40Z" />
  </Svg>
);
const Memo = memo(SvgThumbsDownFill);
export default Memo;

import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAlignRightLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M222 40v176a6 6 0 0 1-12 0V40a6 6 0 0 1 12 0Zm-32 24v40a14 14 0 0 1-14 14H80a14 14 0 0 1-14-14V64a14 14 0 0 1 14-14h96a14 14 0 0 1 14 14Zm-12 0a2 2 0 0 0-2-2H80a2 2 0 0 0-2 2v40a2 2 0 0 0 2 2h96a2 2 0 0 0 2-2Zm12 88v40a14 14 0 0 1-14 14H40a14 14 0 0 1-14-14v-40a14 14 0 0 1 14-14h136a14 14 0 0 1 14 14Zm-12 0a2 2 0 0 0-2-2H40a2 2 0 0 0-2 2v40a2 2 0 0 0 2 2h136a2 2 0 0 0 2-2Z" />
  </Svg>
);
const Memo = memo(SvgAlignRightLight);
export default Memo;

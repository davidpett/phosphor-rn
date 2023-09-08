import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowFatLinesRightThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m234.83 125.17-96-96A4 4 0 0 0 132 32v44h-28a4 4 0 0 0-4 4v96a4 4 0 0 0 4 4h28v44a4 4 0 0 0 2.47 3.7 4 4 0 0 0 4.36-.87l96-96a4 4 0 0 0 0-5.66ZM140 214.34V176a4 4 0 0 0-4-4h-28V84h28a4 4 0 0 0 4-4V41.66L226.34 128ZM44 80v96a4 4 0 0 1-8 0V80a4 4 0 0 1 8 0Zm32 0v96a4 4 0 0 1-8 0V80a4 4 0 0 1 8 0Z" />
  </Svg>
);
const Memo = memo(SvgArrowFatLinesRightThin);
export default Memo;

import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDownloadBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M71.51 88.49a12 12 0 0 1 17-17L116 99V24a12 12 0 0 1 24 0v75l27.51-27.52a12 12 0 0 1 17 17l-48 48a12 12 0 0 1-17 0ZM224 116h-36a12 12 0 0 0 0 24h32v56H36v-56h32a12 12 0 0 0 0-24H32a20 20 0 0 0-20 20v64a20 20 0 0 0 20 20h192a20 20 0 0 0 20-20v-64a20 20 0 0 0-20-20Zm-20 52a16 16 0 1 0-16 16 16 16 0 0 0 16-16Z" />
  </Svg>
);
const Memo = memo(SvgDownloadBold);
export default Memo;

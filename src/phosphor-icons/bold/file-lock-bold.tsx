import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFileLockBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M120 168h-4v-4a32 32 0 0 0-64 0v4h-4a12 12 0 0 0-12 12v44a12 12 0 0 0 12 12h72a12 12 0 0 0 12-12v-44a12 12 0 0 0-12-12Zm-44-4a8 8 0 0 1 16 0v4H76Zm32 48H60v-20h48ZM216.49 79.52l-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v76a12 12 0 0 0 24 0V44h76v48a12 12 0 0 0 12 12h48v108h-32a12 12 0 0 0 0 24h36a20 20 0 0 0 20-20V88a12 12 0 0 0-3.51-8.48ZM160 57l23 23h-23Z" />
  </Svg>
);
const Memo = memo(SvgFileLockBold);
export default Memo;

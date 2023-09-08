import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFileCloudBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m216.49 79.52-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v84a12 12 0 0 0 24 0V44h76v48a12 12 0 0 0 12 12h48v108h-16a12 12 0 0 0 0 24h20a20 20 0 0 0 20-20V88a12 12 0 0 0-3.51-8.48ZM160 57l23 23h-23Zm-52 67a56 56 0 0 0-50.65 32.09A40 40 0 0 0 60 236h48a56 56 0 0 0 0-112Zm0 88H60a16 16 0 0 1-6.54-30.6 12 12 0 0 0 22.67-4.32 32.78 32.78 0 0 1 .92-5.3c.12-.36.22-.72.31-1.09A32 32 0 1 1 108 212Z" />
  </Svg>
);
const Memo = memo(SvgFileCloudBold);
export default Memo;

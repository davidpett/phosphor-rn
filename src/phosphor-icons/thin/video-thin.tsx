import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgVideoThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m162.22 108.67-48-32A4 4 0 0 0 108 80v64a4 4 0 0 0 2.11 3.53 4 4 0 0 0 4.11-.2l48-32a4 4 0 0 0 0-6.66ZM116 136.53V87.47L152.79 112ZM216 44H40a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12Zm4 124a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4Zm8 40a4 4 0 0 1-4 4H32a4 4 0 0 1 0-8h192a4 4 0 0 1 4 4Z" />
  </Svg>
);
const Memo = memo(SvgVideoThin);
export default Memo;

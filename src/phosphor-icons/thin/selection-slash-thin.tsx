import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSelectionSlashThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M108 40a4 4 0 0 1 4-4h32a4 4 0 0 1 0 8h-32a4 4 0 0 1-4-4Zm36 172h-32a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8Zm64-176h-24a4 4 0 0 0 0 8h24a4 4 0 0 1 4 4v24a4 4 0 0 0 8 0V48a12 12 0 0 0-12-12Zm8 72a4 4 0 0 0-4 4v32a4 4 0 0 0 8 0v-32a4 4 0 0 0-4-4ZM40 148a4 4 0 0 0 4-4v-32a4 4 0 0 0-8 0v32a4 4 0 0 0 4 4Zm32 64H48a4 4 0 0 1-4-4v-24a4 4 0 0 0-8 0v24a12 12 0 0 0 12 12h24a4 4 0 0 0 0-8ZM51 37.31a4 4 0 0 0-6 5.38l160 176a4 4 0 1 0 5.92-5.38Z" />
  </Svg>
);
const Memo = memo(SvgSelectionSlashThin);
export default Memo;

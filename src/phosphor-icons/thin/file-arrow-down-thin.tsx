import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFileArrowDownThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m210.83 85.17-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83ZM156 41.65 198.34 84H156ZM200 220H56a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4Zm-45.17-62.83a4 4 0 0 1 0 5.66l-24 24a4 4 0 0 1-5.66 0l-24-24a4 4 0 0 1 5.66-5.66L124 174.34V120a4 4 0 0 1 8 0v54.34l17.17-17.17a4 4 0 0 1 5.66 0Z" />
  </Svg>
);
const Memo = memo(SvgFileArrowDownThin);
export default Memo;

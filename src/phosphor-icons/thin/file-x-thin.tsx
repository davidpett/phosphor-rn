import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFileXThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m210.83 85.17-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83ZM156 41.65 198.34 84H156ZM200 220H56a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4Zm-45.17-89.17L133.66 152l21.17 21.17a4 4 0 0 1-5.66 5.66L128 157.66l-21.17 21.17a4 4 0 0 1-5.66-5.66L122.34 152l-21.17-21.17a4 4 0 1 1 5.66-5.66L128 146.34l21.17-21.17a4 4 0 1 1 5.66 5.66Z" />
  </Svg>
);
const Memo = memo(SvgFileXThin);
export default Memo;

import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgProjectorScreenChartThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M92 144v-16a4 4 0 0 1 8 0v16a4 4 0 0 1-8 0Zm36 4a4 4 0 0 0 4-4v-24a4 4 0 0 0-8 0v24a4 4 0 0 0 4 4Zm32 0a4 4 0 0 0 4-4v-32a4 4 0 0 0-8 0v32a4 4 0 0 0 4 4Zm52-72v104h12a4 4 0 0 1 0 8h-92v24.4a20 20 0 1 1-8 0V188H32a4 4 0 0 1 0-8h12V76h-4a12 12 0 0 1-12-12V48a12 12 0 0 1 12-12h176a12 12 0 0 1 12 12v16a12 12 0 0 1-12 12Zm-84 144a12 12 0 1 0 12 12 12 12 0 0 0-12-12ZM40 68h176a4 4 0 0 0 4-4V48a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4Zm164 8H52v104h152Z" />
  </Svg>
);
const Memo = memo(SvgProjectorScreenChartThin);
export default Memo;

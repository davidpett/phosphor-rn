import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgProjectorScreenChartBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M104 128v8a12 12 0 0 1-24 0v-8a12 12 0 0 1 24 0Zm24-16a12 12 0 0 0-12 12v12a12 12 0 0 0 24 0v-12a12 12 0 0 0-12-12Zm36-4a12 12 0 0 0-12 12v16a12 12 0 0 0 24 0v-16a12 12 0 0 0-12-12Zm56-16.4V164h4a12 12 0 0 1 0 24h-84v23.22a24 24 0 1 1-24 0V188H32a12 12 0 0 1 0-24h4V91.6A20 20 0 0 1 20 72V48a20 20 0 0 1 20-20h176a20 20 0 0 1 20 20v24a20 20 0 0 1-16 19.6ZM44 68h168V52H44Zm152 96V92H60v72Z" />
  </Svg>
);
const Memo = memo(SvgProjectorScreenChartBold);
export default Memo;

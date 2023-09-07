import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHouseSimpleLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m217.47 105.23-80-75.49-.09-.08a13.94 13.94 0 0 0-18.83 0l-.09.08-80 75.5A14 14 0 0 0 34 115.55V208a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14v-92.45a14.06 14.06 0 0 0-4.53-10.32ZM210 208a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2v-92.45a2 2 0 0 1 .65-1.48l.09-.08 79.94-75.48a2 2 0 0 1 2.63 0L209.26 114l.08.08a2 2 0 0 1 .66 1.48Z" />
  </Svg>
);
const Memo = memo(SvgHouseSimpleLight);
export default Memo;

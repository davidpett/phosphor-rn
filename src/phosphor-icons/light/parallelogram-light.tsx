import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgParallelogramLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M243.75 48.4A14 14 0 0 0 232 42H88.81A14 14 0 0 0 76 50.25l-64.8 144A14 14 0 0 0 24 214h143.19a14 14 0 0 0 12.81-8.25l64.8-144a14 14 0 0 0-1.05-13.35Zm-9.93 8.42-64.8 144a2 2 0 0 1-1.83 1.18H24a2 2 0 0 1-1.83-2.82L87 55.18A2 2 0 0 1 88.81 54H232a2 2 0 0 1 1.83 2.82Z" />
  </Svg>
);
const Memo = memo(SvgParallelogramLight);
export default Memo;

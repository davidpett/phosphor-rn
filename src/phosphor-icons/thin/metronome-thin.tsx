import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMetronomeThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M182.63 113.85 211 82.69a4 4 0 1 0-6-5.38L179.82 105l-19.3-60.68A12 12 0 0 0 149.08 36h-42.16a12 12 0 0 0-11.44 8.36l-50.9 160A12 12 0 0 0 56 220h144a12 12 0 0 0 11.43-15.64Zm7.56 50.15H137l39.37-43.31ZM103.1 46.79a4 4 0 0 1 3.82-2.79h42.16a4 4 0 0 1 3.82 2.79l20.71 65.09L126.23 164H65.81Zm100.12 163.57A4 4 0 0 1 200 212H56a4 4 0 0 1-3.81-5.21L63.27 172h129.46l11.07 34.79a4 4 0 0 1-.58 3.57Z" />
  </Svg>
);
const Memo = memo(SvgMetronomeThin);
export default Memo;

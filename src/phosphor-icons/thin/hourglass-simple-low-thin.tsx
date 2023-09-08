import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHourglassSimpleLowThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m133.78 128 74.68-71.51A12 12 0 0 0 200 36H56a12 12 0 0 0-8.49 20.49l.07.06L122.22 128l-74.61 71.45-.07.06A12 12 0 0 0 56 220h144a12 12 0 0 0 8.42-20.55Zm34.38 44H87.84L128 133.54ZM52.33 46.47A3.93 3.93 0 0 1 56 44h144a4 4 0 0 1 2.89 6.77L128 122.46 53.17 50.8a3.92 3.92 0 0 1-.84-4.33Zm151.34 163.06A3.93 3.93 0 0 1 200 212H56a4 4 0 0 1-2.86-6.8L79.49 180h97l26.28 25.17a3.93 3.93 0 0 1 .9 4.36Z" />
  </Svg>
);
const Memo = memo(SvgHourglassSimpleLowThin);
export default Memo;

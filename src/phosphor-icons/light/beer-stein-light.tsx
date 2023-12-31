import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBeerSteinLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 90h-18V72a38 38 0 0 0-38-38h-11.93c-11.6-10.2-27.51-16-44.07-16-34.19 0-62 24.22-62 54v136a14 14 0 0 0 14 14h128a14 14 0 0 0 14-14v-10h18a22 22 0 0 0 22-22v-64a22 22 0 0 0-22-22ZM104 30c14.38 0 28.08 5.22 37.59 14.33a6 6 0 0 0 4.15 1.67H160a26 26 0 0 1 25.29 20H54.52C58 45.67 78.86 30 104 30Zm82 178a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2V78h132Zm40-32a10 10 0 0 1-10 10h-18v-84h18a10 10 0 0 1 10 10Zm-124-72v80a6 6 0 0 1-12 0v-80a6 6 0 0 1 12 0Zm48 0v80a6 6 0 0 1-12 0v-80a6 6 0 0 1 12 0Z" />
  </Svg>
);
const Memo = memo(SvgBeerSteinLight);
export default Memo;

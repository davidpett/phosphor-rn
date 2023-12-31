import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowsClockwiseBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200.49 183.51a12 12 0 0 1 0 17c-1.13 1.12-28 27.51-72.49 27.51-33.71 0-59.35-17.46-76-33.86V208a12 12 0 0 1-24 0v-48a12 12 0 0 1 12-12h48a12 12 0 0 1 0 24H64.12c13.1 14.32 35.08 32 63.88 32 34.63 0 55.31-20.28 55.51-20.49a12 12 0 0 1 16.98 0ZM216 36a12 12 0 0 0-12 12v13.86C187.35 45.46 161.71 28 128 28c-44.46 0-71.36 26.39-72.49 27.51a12 12 0 0 0 17 17C72.69 72.28 93.37 52 128 52c28.8 0 50.78 17.68 63.88 32H168a12 12 0 0 0 0 24h48a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12Z" />
  </Svg>
);
const Memo = memo(SvgArrowsClockwiseBold);
export default Memo;

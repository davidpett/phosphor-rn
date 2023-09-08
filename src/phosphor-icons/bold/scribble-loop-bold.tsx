import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgScribbleLoopBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M248.9 152c-1.33-1.47-23.75-25.85-60.21-40.69-2.15-18.28-9.1-34.9-20.1-47.71C153.12 45.52 130.79 36 104 36c-53.56 0-88.31 47.79-89.76 49.82a12 12 0 0 0 19.53 14C34.05 99.38 62.65 60 104 60c19.85 0 35.45 6.45 46.38 19.18a61.35 61.35 0 0 1 12.4 24 143.6 143.6 0 0 0-30.17-3.18c-27 0-49.79 7.13-65.85 20.63C52.3 132.79 44 149.78 44 167.25 44 193.46 63.44 220 100.61 220c51.93 0 82.34-40.28 87.87-82.43a156.46 156.46 0 0 1 42.62 30.48A12 12 0 1 0 248.9 152Zm-100.53 21.74C140.09 183.9 125.09 196 100.61 196 78.08 196 68 181.56 68 167.25 68 146.42 88.22 124 132.61 124a119.85 119.85 0 0 1 32.64 4.62c-1.01 16.82-7.04 33.04-16.88 45.12Z" />
  </Svg>
);
const Memo = memo(SvgScribbleLoopBold);
export default Memo;

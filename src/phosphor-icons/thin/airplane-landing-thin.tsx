import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAirplaneLandingThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M244 216a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h144a4 4 0 0 1 4 4Zm-21.08-28.15L46.29 138.4A36.12 36.12 0 0 1 20 103.73V48a12 12 0 0 1 15.79-11.37l5.48 1.82a4 4 0 0 1 2.49 2.44l11.31 31.29L92 82.71V48a12 12 0 0 1 15.79-11.38l5.48 1.82a4 4 0 0 1 2.42 2.25l23.25 55.42 62.7 17.52a36.1 36.1 0 0 1 26.36 34.7V184a4 4 0 0 1-5.08 3.85ZM220 148.33a28.07 28.07 0 0 0-20.51-27l-64.57-18a4 4 0 0 1-2.61-2.31L109 45.47l-3.75-1.25A4 4 0 0 0 100 48v40a4 4 0 0 1-5.1 3.85l-44-12.54a4 4 0 0 1-2.66-2.49L36.9 45.43l-3.64-1.21a3.95 3.95 0 0 0-3.6.55A4 4 0 0 0 28 48v55.72a28.1 28.1 0 0 0 20.45 27l171.55 48Z" />
  </Svg>
);
const Memo = memo(SvgAirplaneLandingThin);
export default Memo;

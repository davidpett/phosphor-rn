import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPolygonLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M229.23 50.78a30 30 0 0 0-42.44 0 29.82 29.82 0 0 0-5.56 7.69l-31.31-8.54a30 30 0 0 0-51.14-23.16 30.09 30.09 0 0 0-4.65 36.43l-36.3 32.67a30.07 30.07 0 0 0-39.06 2.91 30 30 0 0 0 41.38 43.44l72.6 53.25a30 30 0 1 0 48.47-8.68 29.65 29.65 0 0 0-5.77-4.5l28.44-80.59a31.57 31.57 0 0 0 4.11.3 30 30 0 0 0 21.22-51.2Zm-122-15.52a18 18 0 1 1 0 25.46 18 18 0 0 1 .04-25.46Zm-80 97.47a18 18 0 1 1 25.46 0 18 18 0 0 1-25.43 0Zm145.47 88a18 18 0 1 1 0-25.46 18 18 0 0 1 .03 25.47Zm-8.61-42.43a30 30 0 0 0-24.27 7.48l-72.58-53.24a30.14 30.14 0 0 0-1.38-27.75l36.3-32.67a30 30 0 0 0 44.62-10.61l31.31 8.54a30 30 0 0 0 8.7 23.16 30.47 30.47 0 0 0 5.78 4.51Zm56.62-93.59a18 18 0 1 1 0-25.46 18 18 0 0 1 .03 25.47Z" />
  </Svg>
);
const Memo = memo(SvgPolygonLight);
export default Memo;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAirplaneTiltDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="m209 81-33 31 32 88-24 24-48-72-24 24v24l-24 24-16-40-40-16 24-24h24l24-24-72-48 24-24 88 32 31-33a24 24 0 0 1 34 34Z"
      opacity={0.2}
    />
    <Path d="m185.33 114.21 29.14-27.43.17-.16a32 32 0 0 0-45.26-45.26l-.16.17-27.43 29.14-83-30.2a8 8 0 0 0-8.39 1.86l-24 24a8 8 0 0 0 1.22 12.31l63.89 42.59L76.69 136H56a8 8 0 0 0-5.65 2.34l-24 24A8 8 0 0 0 29 175.42l36.82 14.73 14.7 36.75.06.16a8 8 0 0 0 13.18 2.47l23.87-23.88A8 8 0 0 0 120 200v-20.69l14.76-14.76 42.59 63.89a8 8 0 0 0 12.31 1.22l24-24a8 8 0 0 0 1.86-8.39Zm-.07 97.23-42.59-63.89a8 8 0 0 0-5.87-3.55 7.09 7.09 0 0 0-.79 0 8 8 0 0 0-5.66 2.34l-24 24A8 8 0 0 0 104 176v20.69l-13.07 13.07L79.43 181a8 8 0 0 0-4.43-4.43l-28.74-11.5L59.32 152H80a8 8 0 0 0 5.66-2.34l24-24a8 8 0 0 0-1.22-12.32l-63.88-42.6 13.5-13.49 83.22 30.26a8 8 0 0 0 8.56-2l30.94-32.88a16 16 0 0 1 22.62 22.59l-32.87 30.94a8 8 0 0 0-2 8.56l30.26 83.22Z" />
  </Svg>
);
const Memo = memo(SvgAirplaneTiltDuotone);
export default Memo;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBootLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M192 114h-34V56a14 14 0 0 0-14-14H32a6 6 0 0 0-5.6 8.15c9 23.44 11.13 76.92-.17 116.19A6.21 6.21 0 0 0 26 168v32a14 14 0 0 0 14 14h26.11a14 14 0 0 0 6.26-1.48L85 206.21a2 2 0 0 1 .9-.21h16.22a2 2 0 0 1 .9.21l12.62 6.31a14 14 0 0 0 6.26 1.48h28.22a14 14 0 0 0 6.26-1.48l12.62-6.31a2 2 0 0 1 .9-.21h16.22a2 2 0 0 1 .9.21l12.62 6.31a14 14 0 0 0 6.26 1.48H232a14 14 0 0 0 14-14v-32a54.06 54.06 0 0 0-54-54ZM40.27 54H144a2 2 0 0 1 2 2v26h-34a6 6 0 0 0 0 12h34v20h-34a6 6 0 0 0 0 12h80a42.05 42.05 0 0 1 41.56 36H39.75c7.36-31.56 8.96-77.69.52-108ZM234 200a2 2 0 0 1-2 2h-26.11a2 2 0 0 1-.9-.21l-12.62-6.31a14 14 0 0 0-6.26-1.48h-16.22a14 14 0 0 0-6.26 1.48L151 201.79a2 2 0 0 1-.9.21h-28.21a2 2 0 0 1-.9-.21l-12.62-6.31a14 14 0 0 0-6.26-1.48H85.89a14 14 0 0 0-6.26 1.48L67 201.79a2 2 0 0 1-.9.21H40a2 2 0 0 1-2-2v-26h196Z" />
  </Svg>
);
const Memo = memo(SvgBootLight);
export default Memo;

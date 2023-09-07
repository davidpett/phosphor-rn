import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSneakerThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m227.38 132.91-60.72-20.24A28 28 0 0 1 150 97.53l-23.31-54.41a12 12 0 0 0-15.07-6.4L35.9 64.25A12 12 0 0 0 28 75.53V192a12 12 0 0 0 12 12h200a12 12 0 0 0 12-12v-24.94a36 36 0 0 0-24.62-34.15ZM38.63 71.77l75.72-27.53a3.84 3.84 0 0 1 1.37-.24 4 4 0 0 1 3.63 2.32L128.17 67l-25.54 9.29A4 4 0 0 0 104 84a4.12 4.12 0 0 0 1.37-.24l25.95-9.44 7.89 18.44-20.58 7.48A4 4 0 0 0 120 108a4.12 4.12 0 0 0 1.37-.24l21-7.64.25.6a36.11 36.11 0 0 0 13.52 15.7l-21.5 7.82A4 4 0 0 0 136 132a4.12 4.12 0 0 0 1.37-.24l29.3-10.66 58.18 19.4a28 28 0 0 1 19 23.5H36V75.53a4 4 0 0 1 2.63-3.76ZM240 196H40a4 4 0 0 1-4-4v-20h208v20a4 4 0 0 1-4 4Z" />
  </Svg>
);
const Memo = memo(SvgSneakerThin);
export default Memo;

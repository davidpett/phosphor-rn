import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBoatThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m219.8 114.42-15.8-5.27V56a12 12 0 0 0-12-12h-60V24a4 4 0 0 0-8 0v20H64a12 12 0 0 0-12 12v53.15l-15.8 5.27a12 12 0 0 0-8.2 11.4v34.27a4 4 0 0 0 .15 1.1c15.11 52.94 83.57 71.34 97.14 74.5a12 12 0 0 0 5.42 0c13.57-3.16 82-21.56 97.14-74.5a4 4 0 0 0 .15-1.1v-34.27a12 12 0 0 0-8.2-11.4ZM60 56a4 4 0 0 1 4-4h128a4 4 0 0 1 4 4v50.48l-66.73-22.27a4 4 0 0 0-2.54 0L60 106.48Zm160 103.53c-6 20.26-21.44 37.43-46 51a185.71 185.71 0 0 1-45.09 17.34 3.91 3.91 0 0 1-1.8 0A185.71 185.71 0 0 1 82 210.55C57.44 197 42 179.79 36 159.53v-33.71a4 4 0 0 1 2.74-3.82L124 93.55V168a4 4 0 0 0 8 0V93.55L217.26 122a4 4 0 0 1 2.74 3.81Z" />
  </Svg>
);
const Memo = memo(SvgBoatThin);
export default Memo;

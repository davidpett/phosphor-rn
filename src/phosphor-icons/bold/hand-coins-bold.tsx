import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHandCoinsBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M232.76 137.88a28.39 28.39 0 0 0-24.63-4.88L172 141.26V140a32 32 0 0 0-32-32H89.94a35.76 35.76 0 0 0-25.45 10.54L43 140H20a20 20 0 0 0-20 20v40a20 20 0 0 0 20 20h100a11.89 11.89 0 0 0 2.91-.36l64-16a11.4 11.4 0 0 0 1.79-.6l38.82-16.54c.23-.09.45-.19.67-.3a28.61 28.61 0 0 0 4.57-48.32ZM24 164h12v32H24Zm193.68.61-37.51 16L118.52 196H60v-39l21.46-21.46a11.93 11.93 0 0 1 8.48-3.54H140a8 8 0 0 1 0 16h-28a12 12 0 0 0 0 24h32a12.19 12.19 0 0 0 2.69-.3l67-15.41.47-.12a4.61 4.61 0 0 1 5.82 4.44 4.58 4.58 0 0 1-2.3 4ZM164 100c1.1 0 2.2-.06 3.28-.15A40 40 0 1 0 204 44c-1.1 0-2.18.06-3.26.14A40 40 0 1 0 164 100Zm56-16a16 16 0 1 1-16-16 16 16 0 0 1 16 16Zm-56-40a16 16 0 0 1 14.5 9.21A40 40 0 0 0 164.81 76H164a16 16 0 0 1 0-32Z" />
  </Svg>
);
const Memo = memo(SvgHandCoinsBold);
export default Memo;

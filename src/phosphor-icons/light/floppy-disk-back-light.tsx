import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFloppyDiskBackLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 34H91.31a13.94 13.94 0 0 0-9.9 4.1L38.1 81.41a13.94 13.94 0 0 0-4.1 9.9V208a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14Zm2 174a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V91.31a2 2 0 0 1 .59-1.41L89.9 46.59a2 2 0 0 1 1.41-.59H170v34a2 2 0 0 1-2 2H88a6 6 0 0 0 0 12h80a14 14 0 0 0 14-14V46h26a2 2 0 0 1 2 2Zm-82-94a38 38 0 1 0 38 38 38 38 0 0 0-38-38Zm0 64a26 26 0 1 1 26-26 26 26 0 0 1-26 26Z" />
  </Svg>
);
const Memo = memo(SvgFloppyDiskBackLight);
export default Memo;

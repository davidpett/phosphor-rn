import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMouseThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M144 20h-32a60.07 60.07 0 0 0-60 60v96a60.07 60.07 0 0 0 60 60h32a60.07 60.07 0 0 0 60-60V80a60.07 60.07 0 0 0-60-60Zm52 60v28h-64V28h12a52.06 52.06 0 0 1 52 52Zm-84-52h12v80H60V80a52.06 52.06 0 0 1 52-52Zm32 200h-32a52.06 52.06 0 0 1-52-52v-60h136v60a52.06 52.06 0 0 1-52 52Z" />
  </Svg>
);
const Memo = memo(SvgMouseThin);
export default Memo;

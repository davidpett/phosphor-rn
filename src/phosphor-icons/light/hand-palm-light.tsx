import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHandPalmLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M188 90a25.8 25.8 0 0 0-14 4.11V60a26 26 0 0 0-40.59-21.51A26 26 0 0 0 82 44v10.11A26 26 0 0 0 42 76v76a86 86 0 0 0 172 0v-36a26 26 0 0 0-26-26Zm14 62a74 74 0 0 1-148 0V76a14 14 0 0 1 28 0v44a6 6 0 0 0 12 0V44a14 14 0 0 1 28 0v68a6 6 0 0 0 12 0V60a14 14 0 0 1 28 0v70.39A46.07 46.07 0 0 0 122 176a6 6 0 0 0 12 0 34 34 0 0 1 34-34 6 6 0 0 0 6-6v-20a14 14 0 0 1 28 0Z" />
  </Svg>
);
const Memo = memo(SvgHandPalmLight);
export default Memo;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLockKeyFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 80h-32V56a48 48 0 0 0-96 0v24H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16Zm-72 78.63V184a8 8 0 0 1-16 0v-25.37a24 24 0 1 1 16 0ZM160 80H96V56a32 32 0 0 1 64 0Z" />
  </Svg>
);
const Memo = memo(SvgLockKeyFill);
export default Memo;

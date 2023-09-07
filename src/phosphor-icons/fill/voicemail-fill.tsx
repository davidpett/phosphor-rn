import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgVoicemailFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 72a56 56 0 0 0-39.14 96H95.14A56 56 0 1 0 56 184h144a56 56 0 0 0 0-112ZM56 168a40 40 0 1 1 40-40 40 40 0 0 1-40 40Zm144 0a40 40 0 1 1 40-40 40 40 0 0 1-40 40Zm24-40a24 24 0 1 1-24-24 24 24 0 0 1 24 24Zm-144 0a24 24 0 1 1-24-24 24 24 0 0 1 24 24Z" />
  </Svg>
);
const Memo = memo(SvgVoicemailFill);
export default Memo;

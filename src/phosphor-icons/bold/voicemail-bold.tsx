import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgVoicemailBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M196 68a60 60 0 0 0-48 96h-40a60 60 0 1 0-48 24h136a60 60 0 0 0 0-120ZM24 128a36 36 0 1 1 36 36 36 36 0 0 1-36-36Zm172 36a36 36 0 1 1 36-36 36 36 0 0 1-36 36Z" />
  </Svg>
);
const Memo = memo(SvgVoicemailBold);
export default Memo;

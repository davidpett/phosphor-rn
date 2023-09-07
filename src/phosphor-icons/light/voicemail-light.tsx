import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgVoicemailLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 74a54 54 0 0 0-33.89 96H89.89A54 54 0 1 0 56 182h144a54 54 0 0 0 0-108ZM14 128a42 42 0 1 1 42 42 42 42 0 0 1-42-42Zm186 42a42 42 0 1 1 42-42 42 42 0 0 1-42 42Z" />
  </Svg>
);
const Memo = memo(SvgVoicemailLight);
export default Memo;

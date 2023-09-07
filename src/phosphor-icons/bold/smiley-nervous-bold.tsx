import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSmileyNervousBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M184.49 176.49a12 12 0 0 1-17 0L160 169l-7.51 7.52a12 12 0 0 1-17 0L128 169l-7.51 7.52a12 12 0 0 1-17 0L96 169l-7.51 7.52a12 12 0 0 1-17-17l16-16a12 12 0 0 1 17 0L112 151l7.51-7.52a12 12 0 0 1 17 0L144 151l7.51-7.52a12 12 0 0 1 17 0l16 16a12 12 0 0 1-.02 17.01ZM236 128A108 108 0 1 1 128 20a108.12 108.12 0 0 1 108 108Zm-24 0a84 84 0 1 0-84 84 84.09 84.09 0 0 0 84-84Zm-120-4a16 16 0 1 0-16-16 16 16 0 0 0 16 16Zm72 0a16 16 0 1 0-16-16 16 16 0 0 0 16 16Z" />
  </Svg>
);
const Memo = memo(SvgSmileyNervousBold);
export default Memo;

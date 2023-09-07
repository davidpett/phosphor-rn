import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHighlighterCircleBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M204.37 51.59A108 108 0 1 0 236 128a108.11 108.11 0 0 0-31.63-76.41ZM140 136h-24v-24.61l24-12Zm-40 71.25V160h56v47.25a84.73 84.73 0 0 1-56 0Zm87.4-19.84a84.53 84.53 0 0 1-7.4 6.55V156a20 20 0 0 0-16-19.6V80a12 12 0 0 0-17.37-10.73l-48 24A12 12 0 0 0 92 104v32.41A20 20 0 0 0 76 156v38a84.53 84.53 0 0 1-7.4-6.55 84 84 0 1 1 118.8 0Z" />
  </Svg>
);
const Memo = memo(SvgHighlighterCircleBold);
export default Memo;

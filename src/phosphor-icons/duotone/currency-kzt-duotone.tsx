import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCurrencyKztDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 56v40H56V56Z" opacity={0.2} />
    <Path d="M208 96a8 8 0 0 1-8 8h-64v112a8 8 0 0 1-16 0V104H56a8 8 0 0 1 0-16h144a8 8 0 0 1 8 8ZM56 64h144a8 8 0 0 0 0-16H56a8 8 0 0 0 0 16Z" />
  </Svg>
);
const Memo = memo(SvgCurrencyKztDuotone);
export default Memo;

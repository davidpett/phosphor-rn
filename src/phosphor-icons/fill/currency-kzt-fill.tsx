import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCurrencyKztFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm48 96h-40v72a8 8 0 0 1-16 0v-72H80a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16Zm0-32H80a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16Z" />
  </Svg>
);
const Memo = memo(SvgCurrencyKztFill);
export default Memo;

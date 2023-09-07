import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgEnvelopeSimpleOpenThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m226.22 92.67-96-64a4 4 0 0 0-4.44 0l-96 64A4 4 0 0 0 28 96v104a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V96a4 4 0 0 0-1.78-3.33ZM128 36.81l89 59.3L144.17 148h-32.34L39.05 96.11ZM216 204H40a4 4 0 0 1-4-4v-96.24l72.22 51.5a4 4 0 0 0 2.33.74h34.9a4 4 0 0 0 2.33-.74l72.22-51.5V200a4 4 0 0 1-4 4Z" />
  </Svg>
);
const Memo = memo(SvgEnvelopeSimpleOpenThin);
export default Memo;

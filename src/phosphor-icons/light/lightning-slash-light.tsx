import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLightningSlashLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M52.44 36a6 6 0 0 0-8.88 8l40.49 44.58-40.44 43.33a6 6 0 0 0 2.28 9.71l59.23 22.21-15 75a6 6 0 0 0 3.14 6.52A6.07 6.07 0 0 0 96 246a6 6 0 0 0 4.39-1.91l63.34-67.87L203.56 220a6 6 0 0 0 8.88-8.08ZM106 220.46l11.85-59.28a6 6 0 0 0-3.77-6.8l-55.6-20.85 33.64-36 63.48 69.83Zm4-150.91a6 6 0 0 1-.29-8.48l45.88-49.16a6 6 0 0 1 10.27 5.27l-15 75 59.23 22.21a6 6 0 0 1 2.28 9.71L190.08 148a6 6 0 1 1-8.77-8.19l16.18-17.33-55.6-20.85a6 6 0 0 1-3.77-6.8L150 35.54l-31.5 33.71a6 6 0 0 1-8.5.3Z" />
  </Svg>
);
const Memo = memo(SvgLightningSlashLight);
export default Memo;

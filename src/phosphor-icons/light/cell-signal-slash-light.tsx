import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCellSignalSlashLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M86 152v48a6 6 0 0 1-12 0v-48a6 6 0 0 1 12 0Zm-46 34a6 6 0 0 0-6 6v8a6 6 0 0 0 12 0v-8a6 6 0 0 0-6-6Zm172.44 26-160-176a6 6 0 0 0-8.88 8L114 121.52V200a6 6 0 0 0 12 0v-65.28l28 30.8V200a6 6 0 0 0 12 0v-21.28L203.56 220a6 6 0 0 0 8.88-8.08ZM160 121.63a6 6 0 0 0 6-6V72a6 6 0 0 0-12 0v43.63a6 6 0 0 0 6 6Zm40 44a6 6 0 0 0 6-6V32a6 6 0 0 0-12 0v127.63a6 6 0 0 0 6 6Z" />
  </Svg>
);
const Memo = memo(SvgCellSignalSlashLight);
export default Memo;

import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFactoryThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M112 176a4 4 0 0 1-4 4H80a4 4 0 0 1 0-8h28a4 4 0 0 1 4 4Zm64-4h-28a4 4 0 0 0 0 8h28a4 4 0 0 0 0-8Zm68 44a4 4 0 0 1-4 4H16a4 4 0 0 1 0-8h20V88a4 4 0 0 1 6.4-3.2L100 128V88a4 4 0 0 1 6.4-3.2l44.14 33.11 12.52-87.61A12.06 12.06 0 0 1 174.94 20h18.12a12.06 12.06 0 0 1 11.88 10.3l15 105.13a3.64 3.64 0 0 1 0 .57v76h20a4 4 0 0 1 4.06 4Zm-86.16-92.62 11.49 8.62h42.06L197 31.43a4 4 0 0 0-4-3.43h-18.06a4 4 0 0 0-4 3.43ZM44 212h168v-72h-44a4 4 0 0 1-2.4-.8L108 96v40a4 4 0 0 1-6.4 3.2L44 96Z" />
  </Svg>
);
const Memo = memo(SvgFactoryThin);
export default Memo;

import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFloppyDiskThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m216.49 82.83-43.32-43.32a11.93 11.93 0 0 0-8.48-3.51H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V91.31a11.93 11.93 0 0 0-3.51-8.48ZM172 212H84v-60a4 4 0 0 1 4-4h80a4 4 0 0 1 4 4Zm40-4a4 4 0 0 1-4 4h-28v-60a12 12 0 0 0-12-12H88a12 12 0 0 0-12 12v60H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h116.69a4 4 0 0 1 2.82 1.17l43.32 43.32a4 4 0 0 1 1.17 2.82ZM156 72a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h56a4 4 0 0 1 4 4Z" />
  </Svg>
);
const Memo = memo(SvgFloppyDiskThin);
export default Memo;

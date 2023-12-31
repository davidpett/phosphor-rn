import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCloudArrowUpLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M246 128a85.27 85.27 0 0 1-17.2 51.6 6 6 0 1 1-9.6-7.2A74 74 0 1 0 86 128a6 6 0 0 1-12 0 85.54 85.54 0 0 1 3.91-25.64A50.68 50.68 0 0 0 72 102a50 50 0 0 0 0 100h24a6 6 0 0 1 0 12H72A62 62 0 1 1 82.43 90.88 86 86 0 0 1 246 128Zm-89.76-4.24a6 6 0 0 0-8.48 0l-32 32a6 6 0 0 0 8.48 8.48L146 142.49V208a6 6 0 0 0 12 0v-65.51l21.76 21.75a6 6 0 0 0 8.48-8.48Z" />
  </Svg>
);
const Memo = memo(SvgCloudArrowUpLight);
export default Memo;

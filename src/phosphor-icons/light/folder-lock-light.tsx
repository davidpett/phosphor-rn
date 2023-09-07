import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFolderLockLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 162h-10v-6a26 26 0 0 0-52 0v6h-10a6 6 0 0 0-6 6v40a6 6 0 0 0 6 6h72a6 6 0 0 0 6-6v-40a6 6 0 0 0-6-6Zm-50-6a14 14 0 0 1 28 0v6h-28Zm44 46h-60v-28h60Zm-2-128h-85.51l-27.9-27.9a13.94 13.94 0 0 0-9.9-4.1H40a14 14 0 0 0-14 14v144.62A13.39 13.39 0 0 0 39.38 214h73.18a6 6 0 0 0 0-12H39.38a1.4 1.4 0 0 1-1.38-1.38V86h178a2 2 0 0 1 2 2v16a6 6 0 0 0 12 0V88a14 14 0 0 0-14-14ZM40 54h52.69a2 2 0 0 1 1.41.59L113.51 74H38V56a2 2 0 0 1 2-2Z" />
  </Svg>
);
const Memo = memo(SvgFolderLockLight);
export default Memo;

import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgExportLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M214 112v96a14 14 0 0 1-14 14H56a14 14 0 0 1-14-14v-96a14 14 0 0 1 14-14h24a6 6 0 0 1 0 12H56a2 2 0 0 0-2 2v96a2 2 0 0 0 2 2h144a2 2 0 0 0 2-2v-96a2 2 0 0 0-2-2h-24a6 6 0 0 1 0-12h24a14 14 0 0 1 14 14ZM92.24 68.24 122 38.49V136a6 6 0 0 0 12 0V38.49l29.76 29.75a6 6 0 1 0 8.48-8.48l-40-40a6 6 0 0 0-8.48 0l-40 40a6 6 0 1 0 8.48 8.48Z" />
  </Svg>
);
const Memo = memo(SvgExportLight);
export default Memo;

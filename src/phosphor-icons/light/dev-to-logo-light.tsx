import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDevToLogoLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M232 58H24a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h208a14 14 0 0 0 14-14V72a14 14 0 0 0-14-14Zm2 126a2 2 0 0 1-2 2H24a2 2 0 0 1-2-2V72a2 2 0 0 1 2-2h208a2 2 0 0 1 2 2Zm-108-82v20h10a6 6 0 0 1 0 12h-10v20h18a6 6 0 0 1 0 12h-24a6 6 0 0 1-6-6V96a6 6 0 0 1 6-6h24a6 6 0 0 1 0 12Zm87.78-4.38-18 64a6 6 0 0 1-11.56 0l-18-64a6 6 0 0 1 11.56-3.24L190 137.84l12.22-43.46a6 6 0 1 1 11.56 3.24ZM64 90h-8a6 6 0 0 0-6 6v64a6 6 0 0 0 6 6h8a30 30 0 0 0 30-30v-16a30 30 0 0 0-30-30Zm18 46a18 18 0 0 1-18 18h-2v-52h2a18 18 0 0 1 18 18Z" />
  </Svg>
);
const Memo = memo(SvgDevToLogoLight);
export default Memo;

import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCoatHangerLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M240.37 172.8 138 96l25.59-19.2A6 6 0 0 0 166 72a38 38 0 1 0-76 0 6 6 0 0 0 12 0 26 26 0 0 1 51.82-2.88l-29.32 22-.21.16L15.63 172.8A14 14 0 0 0 24 198h208a14 14 0 0 0 8.39-25.2Zm-6.5 11.83A1.85 1.85 0 0 1 232 186H24a2 2 0 0 1-1.19-3.6L128 103.5l105.17 78.9a1.85 1.85 0 0 1 .7 2.23Z" />
  </Svg>
);
const Memo = memo(SvgCoatHangerLight);
export default Memo;

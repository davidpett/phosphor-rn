import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFileVideoLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M147.18 154.91a6 6 0 0 0-5.82-.3l-23.5 11.51A14 14 0 0 0 104 154H48a14 14 0 0 0-14 14v40a14 14 0 0 0 14 14h56a14 14 0 0 0 14-12.92l23.26 12.23A6 6 0 0 0 150 216v-56a6 6 0 0 0-2.82-5.09ZM104 210H48a2 2 0 0 1-2-2v-40a2 2 0 0 1 2-2h56a2 2 0 0 1 2 2v40a2 2 0 0 1-2 2Zm34-3.93-20-10.52v-16.14l20-9.79Zm74.24-122.31-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v88a6 6 0 0 0 12 0V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v122a2 2 0 0 1-2 2h-24a6 6 0 0 0 0 12h24a14 14 0 0 0 14-14V88a6 6 0 0 0-1.76-4.24ZM158 46.48 193.52 82H158Z" />
  </Svg>
);
const Memo = memo(SvgFileVideoLight);
export default Memo;

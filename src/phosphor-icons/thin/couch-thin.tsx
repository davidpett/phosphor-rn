import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCouchThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M236 108.7V72a12 12 0 0 0-12-12H32a12 12 0 0 0-12 12v36.7a12 12 0 0 0-8 11.3v48a12 12 0 0 0 12 12h12v20a4 4 0 0 0 8 0v-20h168v20a4 4 0 0 0 8 0v-20h12a12 12 0 0 0 12-12v-48a12 12 0 0 0-8-11.3ZM228 72v36h-12a12 12 0 0 0-12 12v16a4 4 0 0 1-4 4h-68V68h92a4 4 0 0 1 4 4ZM32 68h92v72H56a4 4 0 0 1-4-4v-16a12 12 0 0 0-12-12H28V72a4 4 0 0 1 4-4Zm204 100a4 4 0 0 1-4 4H24a4 4 0 0 1-4-4v-48a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v16a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12v-16a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4Z" />
  </Svg>
);
const Memo = memo(SvgCouchThin);
export default Memo;

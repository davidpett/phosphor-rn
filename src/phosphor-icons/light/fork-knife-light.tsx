import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgForkKnifeLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M74 88V40a6 6 0 0 1 12 0v48a6 6 0 0 1-12 0Zm140-48v184a6 6 0 0 1-12 0v-50h-50a6 6 0 0 1-6-6c0-4.41.68-108.25 59.64-133.51A6 6 0 0 1 214 40Zm-12 10c-36.79 24.29-42.82 91.48-43.81 112H202Zm-84.08-11a6 6 0 1 0-11.84 2L114 88.48a34 34 0 0 1-68 0L53.92 41a6 6 0 0 0-11.84-2l-8 48a6.61 6.61 0 0 0-.08 1 46.06 46.06 0 0 0 40 45.6V224a6 6 0 0 0 12 0v-90.4A46.06 46.06 0 0 0 126 88a6.61 6.61 0 0 0-.08-1Z" />
  </Svg>
);
const Memo = memo(SvgForkKnifeLight);
export default Memo;

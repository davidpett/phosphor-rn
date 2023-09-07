import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgShieldCheckLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 42H48a14 14 0 0 0-14 14v58.77c0 88.24 74.68 117.52 89.65 122.49a13.5 13.5 0 0 0 8.7 0c15-5 89.65-34.25 89.65-122.49V56a14 14 0 0 0-14-14Zm2 72.79c0 80-67.84 106.59-81.44 111.1a1.55 1.55 0 0 1-1.12 0c-13.6-4.51-81.44-31.1-81.44-111.1V56a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Zm-37.76-15a6 6 0 0 1 0 8.48l-56 56a6 6 0 0 1-8.48 0l-24-24a6 6 0 0 1 8.48-8.48L112 151.51l51.76-51.75a6 6 0 0 1 8.48 0Z" />
  </Svg>
);
const Memo = memo(SvgShieldCheckLight);
export default Memo;
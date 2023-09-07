import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMediumLogoThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M72 68a60 60 0 1 0 60 60 60.07 60.07 0 0 0-60-60Zm0 112a52 52 0 1 1 52-52 52.06 52.06 0 0 1-52 52ZM184 68c-16 0-28 25.79-28 60s12 60 28 60 28-25.79 28-60-12-60-28-60Zm0 112c-9.46 0-20-21.36-20-52s10.54-52 20-52 20 21.36 20 52-10.54 52-20 52Zm60-108v112a4 4 0 0 1-8 0V72a4 4 0 0 1 8 0Z" />
  </Svg>
);
const Memo = memo(SvgMediumLogoThin);
export default Memo;

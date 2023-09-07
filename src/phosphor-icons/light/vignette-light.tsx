import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgVignetteLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 42H40a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14Zm2 158a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2ZM128 74c-38.6 0-70 24.22-70 54s31.4 54 70 54 70-24.22 70-54-31.4-54-70-54Zm0 96c-32 0-58-18.84-58-42s26-42 58-42 58 18.84 58 42-26 42-58 42Z" />
  </Svg>
);
const Memo = memo(SvgVignetteLight);
export default Memo;

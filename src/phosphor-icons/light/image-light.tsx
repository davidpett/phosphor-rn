import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgImageLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 42H40a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14ZM40 54h176a2 2 0 0 1 2 2v107.57l-29.47-29.47a14 14 0 0 0-19.8 0l-21.42 21.42-45.41-45.42a14 14 0 0 0-19.8 0L38 154.2V56a2 2 0 0 1 2-2Zm-2 146v-28.83l52.58-52.58a2 2 0 0 1 2.84 0L176.83 202H40a2 2 0 0 1-2-2Zm178 2h-22.2l-38-38 21.41-21.42a2 2 0 0 1 2.83 0l38 38V200a2 2 0 0 1-2.04 2Zm-70-102a10 10 0 1 1 10 10 10 10 0 0 1-10-10Z" />
  </Svg>
);
const Memo = memo(SvgImageLight);
export default Memo;

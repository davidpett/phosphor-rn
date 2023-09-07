import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSimCardDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M176 120v72H80v-72Z" opacity={0.2} />
    <Path d="m213.66 82.34-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66ZM200 216H56V40h92.69L200 91.31V216Zm-24-104H80a8 8 0 0 0-8 8v72a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8v-72a8 8 0 0 0-8-8Zm-8 72h-16v-32a8 8 0 0 0-16 0v32h-16v-32a8 8 0 0 0-16 0v32H88v-56h80Z" />
  </Svg>
);
const Memo = memo(SvgSimCardDuotone);
export default Memo;

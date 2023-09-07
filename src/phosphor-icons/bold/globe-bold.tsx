import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGlobeBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20Zm-20.93 152h41.86A115.75 115.75 0 0 1 128 209.85 115.75 115.75 0 0 1 107.07 172Zm-5.66-24a142.55 142.55 0 0 1 0-40h53.18a142.55 142.55 0 0 1 0 40ZM44 128a83.49 83.49 0 0 1 2.43-20h30.79a164.54 164.54 0 0 0 0 40H46.43A83.49 83.49 0 0 1 44 128Zm104.93-44h-41.86A115.75 115.75 0 0 1 128 46.15 115.75 115.75 0 0 1 148.93 84Zm29.85 24h30.79a83.52 83.52 0 0 1 0 40h-30.79a164.54 164.54 0 0 0 0-40Zm20.74-24H174a148.59 148.59 0 0 0-13.95-33.63A84.5 84.5 0 0 1 199.52 84ZM96 50.37A148.59 148.59 0 0 0 82 84H56.48A84.5 84.5 0 0 1 96 50.37ZM56.48 172H82a148.59 148.59 0 0 0 14 33.63A84.5 84.5 0 0 1 56.48 172Zm103.57 33.63A148.59 148.59 0 0 0 174 172h25.52a84.5 84.5 0 0 1-39.47 33.63Z" />
  </Svg>
);
const Memo = memo(SvgGlobeBold);
export default Memo;

import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFoldersThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 68h-69.33a4 4 0 0 1-2.4-.8l-27.74-20.8a12.05 12.05 0 0 0-7.2-2.4H72a12 12 0 0 0-12 12v20H40a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h152.89A11.12 11.12 0 0 0 204 200.89V180h20.89A11.12 11.12 0 0 0 236 168.89V80a12 12 0 0 0-12-12Zm-28 132.89a3.12 3.12 0 0 1-3.11 3.11H40a4 4 0 0 1-4-4V88a4 4 0 0 1 4-4h45.33a4 4 0 0 1 2.4.8l27.74 20.8a12.05 12.05 0 0 0 7.2 2.4H192a4 4 0 0 1 4 4Zm32-32a3.12 3.12 0 0 1-3.11 3.11H204v-60a12 12 0 0 0-12-12h-69.33a4 4 0 0 1-2.4-.8L92.53 78.4a12.05 12.05 0 0 0-7.2-2.4H68V56a4 4 0 0 1 4-4h45.33a4 4 0 0 1 2.4.8l27.74 20.8a12.05 12.05 0 0 0 7.2 2.4H224a4 4 0 0 1 4 4Z" />
  </Svg>
);
const Memo = memo(SvgFoldersThin);
export default Memo;

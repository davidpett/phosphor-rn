import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgUserListLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M146 80a6 6 0 0 1 6-6h96a6 6 0 0 1 0 12h-96a6 6 0 0 1-6-6Zm102 42h-96a6 6 0 0 0 0 12h96a6 6 0 0 0 0-12Zm0 48h-72a6 6 0 0 0 0 12h72a6 6 0 0 0 0-12Zm-98.19 20.5a6 6 0 1 1-11.62 3C131.7 168.29 107.23 150 80 150s-51.7 18.29-58.19 43.49a6 6 0 1 1-11.62-3c5.74-22.28 23-40.07 44.67-48a46 46 0 1 1 50.28 0c21.65 7.94 38.94 25.73 44.67 48.01ZM80 138a34 34 0 1 0-34-34 34 34 0 0 0 34 34Z" />
  </Svg>
);
const Memo = memo(SvgUserListLight);
export default Memo;

import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgForkKnifeFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 40v184a8 8 0 0 1-16 0v-48h-48a8 8 0 0 1-8-8 268.75 268.75 0 0 1 7.22-56.88c9.78-40.49 28.32-67.63 53.63-78.47A8 8 0 0 1 216 40Zm-96.11-1.31a8 8 0 1 0-15.78 2.63L111.89 88H88V40a8 8 0 0 0-16 0v48H48.11l7.78-46.68a8 8 0 1 0-15.78-2.63l-8 48A8.17 8.17 0 0 0 32 88a48.07 48.07 0 0 0 40 47.32V224a8 8 0 0 0 16 0v-88.68A48.07 48.07 0 0 0 128 88a8.17 8.17 0 0 0-.11-1.31Z" />
  </Svg>
);
const Memo = memo(SvgForkKnifeFill);
export default Memo;

import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSneakerMoveLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 154a34 34 0 0 1-34-34V95.7a14 14 0 0 0-12.79-13.94c-25.05-2-42-18.58-43.14-42.18a14 14 0 0 0-4.07-9.22l-8.23-8.23a13.92 13.92 0 0 0-19.55-.24 1.14 1.14 0 0 1-.11.11l-64 64.12a14 14 0 0 0 .06 19.88l107.24 103.9a13.94 13.94 0 0 0 9.9 4.1H240a14 14 0 0 0 14-14v-8a38 38 0 0 0-38-38Zm26 46a2 2 0 0 1-2 2h-92.69a2.08 2.08 0 0 1-1.48-.65L38.59 97.43A2 2 0 0 1 38 96a2 2 0 0 1 .59-1.42l63.93-64a2 2 0 0 1 2.76.07l8.22 8.22a2 2 0 0 1 .58 1.33c.73 14.9 6.41 27.86 16.43 37.48 9.68 9.3 22.73 14.85 37.74 16.06a2 2 0 0 1 1.75 2V114h-18a6 6 0 1 0 0 12h18.4a45.78 45.78 0 0 0 7.68 20H160a6 6 0 0 0 0 12h30.11a45.78 45.78 0 0 0 25.89 8 26 26 0 0 1 26 26ZM64 182H32a6 6 0 0 1 0-12h32a6 6 0 0 1 0 12Zm38 26a6 6 0 0 1-6 6H48a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6Z" />
  </Svg>
);
const Memo = memo(SvgSneakerMoveLight);
export default Memo;

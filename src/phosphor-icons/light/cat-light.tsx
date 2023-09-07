import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCatLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M221.36 35.07a14 14 0 0 0-15.26 3l-.29.3-18.39 21.21a109.16 109.16 0 0 0-118.84 0L50.19 38.41l-.29-.3A14 14 0 0 0 26 48v88c0 51.83 45.76 94 102 94s102-42.17 102-94V48a14 14 0 0 0-8.64-12.93ZM218 136c0 43.38-37.16 79-84 81.81v-23.33l14.24-14.24a6 6 0 0 0-8.48-8.49L128 183.51l-11.76-11.76a6 6 0 0 0-8.48 8.49L122 194.48v23.33C75.16 215 38 179.38 38 136V48a1.91 1.91 0 0 1 1.23-1.85 2.28 2.28 0 0 1 .82-.17 1.87 1.87 0 0 1 1.26.5l21.76 25a6 6 0 0 0 8.11.88A91.52 91.52 0 0 1 90 61.68V88a6 6 0 1 0 12 0V57.51a97.85 97.85 0 0 1 20-3.32V88a6 6 0 1 0 12 0V54.19a97.85 97.85 0 0 1 20 3.32V88a6 6 0 1 0 12 0V61.68a91.52 91.52 0 0 1 18.82 10.73 6 6 0 0 0 8.11-.88l21.76-25A2 2 0 0 1 218 48Zm-124 4a10 10 0 1 1-10-10 10 10 0 0 1 10 10Zm88 0a10 10 0 1 1-10-10 10 10 0 0 1 10 10Z" />
  </Svg>
);
const Memo = memo(SvgCatLight);
export default Memo;

import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgUmbrellaSimpleLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M238 126.79A110.43 110.43 0 0 0 53.11 55.22a109.51 109.51 0 0 0-35.06 71.57A14 14 0 0 0 32 142h90v58a30 30 0 0 0 60 0 6 6 0 0 0-12 0 18 18 0 0 1-36 0v-58h90a14 14 0 0 0 14-15.21Zm-12.49 2.56a2 2 0 0 1-1.51.65H32a2 2 0 0 1-1.49-.65 2 2 0 0 1-.53-1.56 98.43 98.43 0 0 1 164.78-63.74A97.5 97.5 0 0 1 226 127.79a2 2 0 0 1-.54 1.56Z" />
  </Svg>
);
const Memo = memo(SvgUmbrellaSimpleLight);
export default Memo;

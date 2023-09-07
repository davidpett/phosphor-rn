import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgUmbrellaSimpleFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M235.76 138.83A16 16 0 0 1 224 144h-88v56a16 16 0 0 0 32 0 8 8 0 0 1 16 0 32 32 0 0 1-64 0v-56H32a16 16 0 0 1-16-17.37 112.44 112.44 0 0 1 188.2-72.88 111.56 111.56 0 0 1 35.8 72.88 16.1 16.1 0 0 1-4.24 12.2Z" />
  </Svg>
);
const Memo = memo(SvgUmbrellaSimpleFill);
export default Memo;

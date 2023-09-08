import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgShrimpThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M140 116a8 8 0 1 1 8 8 8 8 0 0 1-8-8Zm79.93-33.35A76.07 76.07 0 0 1 144 156h-32a16 16 0 0 0 0 32h56a4 4 0 0 1 0 8h-52v24h36a4 4 0 0 1 0 8H96a76 76 0 0 1 0-152h116a16 16 0 0 0 0-32h-84a20 20 0 0 1-20-20 4 4 0 0 1 8 0 12 12 0 0 0 12 12h84a24 24 0 0 1 7.93 46.65ZM50.47 202.46l37.78-27A24.75 24.75 0 0 1 88 172a23.85 23.85 0 0 1 2-9.6l-59.9-27.23a68 68 0 0 0 20.36 67.29Zm40.43-19L57 207.64A67.59 67.59 0 0 0 96 220h12v-24.34a24.07 24.07 0 0 1-17.1-12.24Zm17.1-35.12V84H96a68.1 68.1 0 0 0-63.42 43.51l61.89 28.13a23.94 23.94 0 0 1 13.53-7.3ZM211.88 84H116v64h28a68.08 68.08 0 0 0 67.88-64Z" />
  </Svg>
);
const Memo = memo(SvgShrimpThin);
export default Memo;

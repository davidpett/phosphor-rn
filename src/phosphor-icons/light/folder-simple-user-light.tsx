import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFolderSimpleUserLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M211.28 199a30 30 0 1 0-38.56 0 38.09 38.09 0 0 0-18.52 23.5 6 6 0 0 0 4.26 7.34 6.26 6.26 0 0 0 1.54.2 6 6 0 0 0 5.8-4.46C168.86 214 179.63 206 192 206s23.14 8 26.2 19.54a6 6 0 0 0 11.6-3.08A38.09 38.09 0 0 0 211.28 199ZM192 158a18 18 0 1 1-18 18 18 18 0 0 1 18-18Zm38-70v32a6 6 0 0 1-12 0V88a2 2 0 0 0-2-2h-85.33a14 14 0 0 1-8.4-2.8L94.53 62.4a2 2 0 0 0-1.2-.4H40a2 2 0 0 0-2 2v136a2 2 0 0 0 2 2h80a6 6 0 0 1 0 12H40a14 14 0 0 1-14-14V64a14 14 0 0 1 14-14h53.33a14 14 0 0 1 8.4 2.8l27.74 20.8a2 2 0 0 0 1.2.4H216a14 14 0 0 1 14 14Z" />
  </Svg>
);
const Memo = memo(SvgFolderSimpleUserLight);
export default Memo;

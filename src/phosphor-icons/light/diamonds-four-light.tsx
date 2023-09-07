import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDiamondsFourLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M117.59 105.69a14.75 14.75 0 0 0 20.82 0l31.28-31.28a14.75 14.75 0 0 0 0-20.83L138.41 22.3a14.74 14.74 0 0 0-20.82 0L86.31 53.58a14.75 14.75 0 0 0 0 20.83ZM94.8 62.07l31.27-31.28a2.74 2.74 0 0 1 3.86 0l31.27 31.28a2.71 2.71 0 0 1 0 3.85L129.93 97.2a2.74 2.74 0 0 1-3.86 0L94.8 65.92a2.71 2.71 0 0 1 0-3.85Zm138.89 55.52-31.28-31.28a14.74 14.74 0 0 0-20.82 0l-31.28 31.28a14.74 14.74 0 0 0 0 20.82l31.28 31.28a14.74 14.74 0 0 0 20.83 0l31.27-31.28a14.72 14.72 0 0 0 0-20.82Zm-8.48 12.34-31.28 31.27a2.71 2.71 0 0 1-3.85 0l-31.28-31.27a2.74 2.74 0 0 1 0-3.86l31.28-31.27a2.72 2.72 0 0 1 3.85 0l31.28 31.28a2.74 2.74 0 0 1 0 3.85Zm-119.52-12.34L74.41 86.31a14.75 14.75 0 0 0-20.83 0l-31.27 31.28a14.72 14.72 0 0 0 0 20.82l31.27 31.28a14.73 14.73 0 0 0 20.82 0l31.28-31.28a14.74 14.74 0 0 0 .01-20.82Zm-8.49 12.34L65.92 161.2a2.71 2.71 0 0 1-3.85 0l-31.28-31.27a2.74 2.74 0 0 1 0-3.86L62.07 94.8a2.72 2.72 0 0 1 3.85 0l31.28 31.27a2.74 2.74 0 0 1 0 3.86Zm41.21 20.38a14.74 14.74 0 0 0-20.82 0l-31.28 31.28a14.74 14.74 0 0 0 0 20.82l31.28 31.28a14.74 14.74 0 0 0 20.82 0l31.28-31.28a14.74 14.74 0 0 0 0-20.82Zm22.79 43.62-31.27 31.28a2.74 2.74 0 0 1-3.86 0L94.8 193.93a2.71 2.71 0 0 1 0-3.85l31.27-31.28a2.74 2.74 0 0 1 3.86 0l31.27 31.28a2.71 2.71 0 0 1 0 3.85Z" />
  </Svg>
);
const Memo = memo(SvgDiamondsFourLight);
export default Memo;
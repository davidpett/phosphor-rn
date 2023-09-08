import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGitDiffThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M112 156a4 4 0 0 0-4 4v38.34l-35.11-35.11A43.71 43.71 0 0 1 60 132.12V91.71a28 28 0 1 0-8 0v40.41a51.66 51.66 0 0 0 15.23 36.77L102.34 204H64a4 4 0 0 0 0 8h48a4 4 0 0 0 4-4v-48a4 4 0 0 0-4-4ZM36 64a20 20 0 1 1 20 20 20 20 0 0 1-20-20Zm168 100.29v-40.41a51.66 51.66 0 0 0-15.23-36.77L153.66 52H192a4 4 0 0 0 0-8h-48a4 4 0 0 0-4 4v48a4 4 0 0 0 8 0V57.66l35.11 35.11A43.71 43.71 0 0 1 196 123.88v40.41a28 28 0 1 0 8 0ZM200 212a20 20 0 1 1 20-20 20 20 0 0 1-20 20Z" />
  </Svg>
);
const Memo = memo(SvgGitDiffThin);
export default Memo;

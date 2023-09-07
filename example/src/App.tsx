import {
  View,
  useWindowDimensions,
  FlatList,
  StyleSheet,
  Text,
} from 'react-native';
import {
  PhosphorIcon,
  ALL_PHOSPHOR_ICONS,
  type PhosphorIconWeight,
} from 'phosphor-rn';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { useMemo, useState } from 'react';
import ModalSelect, { type Item } from 'react-native-expo-modal-select';

const FIXED_ITEM_SIZE = 48;

const iconWeights: Item[] = [
  { label: 'bold', value: 'bold' },
  { label: 'duotone', value: 'duotone' },
  { label: 'fill', value: 'fill' },
  { label: 'light', value: 'light' },
  { label: 'regular', value: 'regular' },
  { label: 'thin', value: 'thin' },
];

const App: React.FC = () => {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const [iconWeight, setIconWeight] = useState<PhosphorIconWeight>('regular');

  const numColumns = useMemo(
    () =>
      Math.floor(
        (width - styles.container.paddingHorizontal) / FIXED_ITEM_SIZE
      ),
    [width]
  );

  return (
    <View style={[styles.app, { paddingTop: insets.top }]}>
      <View style={[styles.container, styles.header]}>
        <Text style={styles.title}>phosphor-rn</Text>
        <ModalSelect
          label="Icon Weight"
          placeholder={iconWeight}
          items={iconWeights}
          value={iconWeight}
          labelStyle={styles.label}
          touchableStyle={styles.touchable}
          onChange={(value) => setIconWeight(value as PhosphorIconWeight)}
        />
      </View>
      <FlatList
        style={styles.list}
        contentContainerStyle={[
          styles.container,
          {
            paddingBottom: insets.bottom,
          },
        ]}
        numColumns={numColumns}
        data={ALL_PHOSPHOR_ICONS}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View
            style={[
              styles.itemContainer,
              {
                width: FIXED_ITEM_SIZE,
                height: FIXED_ITEM_SIZE,
              },
            ]}
          >
            <PhosphorIcon variant={item} weight={iconWeight} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#f9f9f9',
  },
  container: {
    paddingHorizontal: 16,
  },
  list: {
    backgroundColor: '#ffffff',
  },
  header: {
    gap: 12,
    paddingBottom: 12,
  },
  itemContainer: { alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 18 },
  label: { letterSpacing: 0, textTransform: 'none' },
  touchable: { paddingHorizontal: 12, paddingVertical: 8, borderRadius: 4 },
});

export default () => (
  <SafeAreaProvider>
    <App />
  </SafeAreaProvider>
);

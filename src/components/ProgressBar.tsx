// components/ProgressBar.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';

interface Props {
  progress: number; // 0.0 to 1.0
}

export default function ProgressBar({ progress }: Props) {
  const pct = Math.max(0, Math.min(1, progress));

  return (
    <View
      style={styles.track}
      accessibilityRole="progressbar"
      accessibilityValue={{ now: Math.round(pct * 100) }}
    >
      <View style={[styles.fill, { width: `${pct * 100}%` }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    height: 8,
    width: '88%',
    alignSelf: 'center',
    borderRadius: 8,
    backgroundColor: 'rgba(255,255,255,0.45)',
    marginTop: 12,
    marginBottom: 8,
  },
  fill: {
    height: '100%',
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.85)',
  },
});

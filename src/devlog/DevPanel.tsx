/**
 * Dev Panel Overlay
 *
 * Semi-transparent overlay panel showing live event logs.
 * Toggle visibility via Settings screen.
 */

import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import * as Sharing from 'expo-sharing';
import { Paths, File } from 'expo-file-system';
import { useDevModeStore, useIsDevPanelVisible, useDevEvents } from './devMode';
import { exportEventsAsJSON, clearAllEvents } from './logger';
import { DevEvent } from './types';

export function DevPanel() {
  const isVisible = useIsDevPanelVisible();
  const events = useDevEvents();
  const { togglePanel, refreshEvents } = useDevModeStore();

  // Auto-refresh events every 2 seconds when panel is visible
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        refreshEvents();
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isVisible, refreshEvents]);

  if (!isVisible) return null;

  const handleExport = async () => {
    try {
      const json = await exportEventsAsJSON();
      const filename = `devlog_${new Date().toISOString().replace(/[:.]/g, '-')}.json`;
      const file = new File(Paths.document, filename);

      await file.write(json);

      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(file.uri);
      } else {
        if (__DEV__) {
          console.log('[DevPanel] Sharing not available');
        }
      }
    } catch (error) {
      if (__DEV__) {
        console.error('[DevPanel] Failed to export:', error);
      }
    }
  };

  const handleClear = async () => {
    await clearAllEvents();
    await refreshEvents();
  };

  // Get recent 50 events (most recent first)
  const recentEvents = events.slice(-50).reverse();

  return (
    <View style={styles.overlay}>
      <View style={styles.panel}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Dev Panel</Text>
          <View style={styles.headerActions}>
            <TouchableOpacity onPress={handleExport} style={styles.headerButton}>
              <Text style={styles.headerButtonText}>Export</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleClear} style={styles.headerButton}>
              <Text style={styles.headerButtonText}>Clear</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={togglePanel} style={styles.headerButton}>
              <Text style={styles.headerButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Stats */}
        <View style={styles.stats}>
          <Text style={styles.statsText}>Total: {events.length} events</Text>
          <Text style={styles.statsText}>Showing: {recentEvents.length} recent</Text>
        </View>

        {/* Event List */}
        <ScrollView style={styles.eventList}>
          {recentEvents.map((event, index) => (
            <EventRow key={`${event.ts}-${index}`} event={event} />
          ))}
          {recentEvents.length === 0 && (
            <Text style={styles.emptyText}>No events logged yet</Text>
          )}
        </ScrollView>
      </View>
    </View>
  );
}

function EventRow({ event }: { event: DevEvent }) {
  const timestamp = new Date(event.ts).toLocaleTimeString();
  const isWarning = event.type.startsWith('WARNING_');

  return (
    <View style={[styles.eventRow, isWarning && styles.eventRowWarning]}>
      <Text style={styles.eventTime}>{timestamp}</Text>
      <Text style={styles.eventType}>{event.type}</Text>
      <Text style={styles.eventGame}>{event.game}</Text>
      {event.cardTerm && (
        <Text style={styles.eventCard} numberOfLines={1}>
          {event.cardTerm}
        </Text>
      )}
      {event.duplicateInfo && (
        <Text style={styles.eventDuplicate}>
          (seen {event.duplicateInfo.daysSince.toFixed(1)}d ago)
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: 9999,
    pointerEvents: 'box-none',
  },
  panel: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '50%',
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingTop: Platform.OS === 'ios' ? 20 : 16,
    pointerEvents: 'auto',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.2)',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerActions: {
    flexDirection: 'row',
    gap: 8,
  },
  headerButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 6,
  },
  headerButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  statsText: {
    color: '#aaa',
    fontSize: 12,
  },
  eventList: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  eventRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
    gap: 8,
  },
  eventRowWarning: {
    backgroundColor: 'rgba(255, 200, 0, 0.1)',
  },
  eventTime: {
    color: '#888',
    fontSize: 11,
    width: 70,
  },
  eventType: {
    color: '#4a9eff',
    fontSize: 11,
    fontWeight: '600',
    flexShrink: 1,
  },
  eventGame: {
    color: '#888',
    fontSize: 11,
  },
  eventCard: {
    color: '#fff',
    fontSize: 11,
    flex: 1,
  },
  eventDuplicate: {
    color: '#ffc800',
    fontSize: 10,
    fontStyle: 'italic',
  },
  emptyText: {
    color: '#888',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 32,
  },
});

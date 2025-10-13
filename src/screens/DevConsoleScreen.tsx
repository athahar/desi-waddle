/**
 * Developer Console Screen (Phase 5)
 *
 * Provides insights into deck manager sessions and allows developers to:
 * - View current session stats
 * - Browse event log
 * - Export session history as CSV
 * - Reset current session
 * - Clear all data (with confirmation)
 *
 * Activated by triple-tapping the app header title
 */

import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import * as Sharing from 'expo-sharing';
import { File, Paths } from 'expo-file-system';
import * as Haptics from 'expo-haptics';
import { NavigationProps } from '../types/game';
import colors from '../styles/colors';
import { fonts } from '../styles/fonts';
import {
  getCurrentSessionStats,
  getSessionEvents,
  getDevHistory,
  exportHistoryCsv,
  resetSession,
  clearAllData,
  SessionEvent,
  DevHistory,
} from '../core/deckManager';

interface Props extends NavigationProps {}

export default function DevConsoleScreen({ navigation }: Props) {
  const [loading, setLoading] = useState(true);
  const [sessionStats, setSessionStats] = useState<any>(null);
  const [events, setEvents] = useState<SessionEvent[]>([]);
  const [history, setHistory] = useState<DevHistory | null>(null);
  const [exporting, setExporting] = useState(false);

  // Default game ID for stats (most recent charades session)
  const defaultGameId = 'charades_bollywood-universe_90s-movies';

  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const [stats, eventLog, devHistory] = await Promise.all([
        getCurrentSessionStats(defaultGameId),
        getSessionEvents(defaultGameId),
        getDevHistory(),
      ]);

      setSessionStats(stats);
      setEvents(eventLog);
      setHistory(devHistory);
    } catch (error) {
      if (__DEV__) {
        console.error('Error loading dev console data:', error);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleExportCsv = useCallback(async () => {
    try {
      setExporting(true);
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

      const csv = await exportHistoryCsv();

      // Write to file using new expo-file-system API
      const fileName = `deck_history_${Date.now()}.csv`;
      const file = new File(Paths.cache, fileName);
      await file.create();
      await file.write(csv);
      const fileUri = file.uri;

      // Share the file
      const canShare = await Sharing.isAvailableAsync();
      if (canShare) {
        await Sharing.shareAsync(fileUri, {
          mimeType: 'text/csv',
          dialogTitle: 'Export Deck History',
        });
      } else {
        Alert.alert('Export Complete', `File saved to cache`);
      }

      await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    } catch (error) {
      if (__DEV__) {
        console.error('Error exporting CSV:', error);
      }
      Alert.alert('Export Failed', 'Could not export history as CSV');
    } finally {
      setExporting(false);
    }
  }, []);

  const handleResetSession = useCallback(() => {
    Alert.alert(
      'Reset Current Session?',
      'This will clear the current session and start fresh. Session history will be preserved.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Reset',
          style: 'destructive',
          onPress: async () => {
            try {
              await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
              await resetSession(defaultGameId);
              await loadData();
              Alert.alert('Session Reset', 'Current session has been cleared');
            } catch (error) {
              if (__DEV__) {
                console.error('Error resetting session:', error);
              }
              Alert.alert('Reset Failed', 'Could not reset session');
            }
          },
        },
      ]
    );
  }, [loadData]);

  const handleClearAll = useCallback(() => {
    Alert.alert(
      '⚠️ Clear All Data?',
      'This will delete ALL sessions, history, and statistics. This action cannot be undone!',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Clear Everything',
          style: 'destructive',
          onPress: async () => {
            try {
              await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
              await clearAllData();
              await loadData();
              Alert.alert('Data Cleared', 'All deck manager data has been deleted');
            } catch (error) {
              if (__DEV__) {
                console.error('Error clearing data:', error);
              }
              Alert.alert('Clear Failed', 'Could not clear data');
            }
          },
        },
      ]
    );
  }, [loadData]);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.primary.teal} />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>🛠️ Developer Console</Text>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.closeButton}
            activeOpacity={0.7}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>

        {/* Current Session Stats */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Current Session</Text>
          {sessionStats ? (
            <View style={styles.statsGrid}>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>Session ID</Text>
                <Text style={styles.statValue} numberOfLines={1}>
                  {sessionStats.sessionId.substring(0, 20)}...
                </Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>Seed</Text>
                <Text style={styles.statValue} numberOfLines={1}>
                  {sessionStats.seed.substring(0, 15)}...
                </Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>Cards Shown</Text>
                <Text style={styles.statValue}>
                  {sessionStats.cardsShown} / {sessionStats.totalCards}
                </Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>% Used</Text>
                <Text style={styles.statValue}>{sessionStats.percentageUsed.toFixed(1)}%</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>Days Active</Text>
                <Text style={styles.statValue}>{sessionStats.daysSinceCreated}</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>Days Until Refresh</Text>
                <Text style={styles.statValue}>{sessionStats.daysUntilRefresh}</Text>
              </View>
            </View>
          ) : (
            <Text style={styles.noDataText}>No active session</Text>
          )}
        </View>

        {/* Event Log */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Event Log (Last 50)</Text>
          {events.length > 0 ? (
            <View style={styles.eventLog}>
              {events.slice(-50).reverse().map((event, index) => (
                <View key={index} style={styles.eventItem}>
                  <View style={styles.eventHeader}>
                    <Text style={styles.eventType}>{event.type}</Text>
                    <Text style={styles.eventTime}>
                      {new Date(event.timestamp).toLocaleTimeString()}
                    </Text>
                  </View>
                  {event.cardId && (
                    <Text style={styles.eventDetail}>Card: {event.cardId}</Text>
                  )}
                  {event.metadata && (
                    <Text style={styles.eventDetail} numberOfLines={1}>
                      {JSON.stringify(event.metadata)}
                    </Text>
                  )}
                </View>
              ))}
            </View>
          ) : (
            <Text style={styles.noDataText}>No events logged</Text>
          )}
        </View>

        {/* History Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Play History</Text>
          {history && history.sessions.length > 0 ? (
            <View style={styles.historyStats}>
              <View style={styles.historyItem}>
                <Text style={styles.historyLabel}>Total Sessions</Text>
                <Text style={styles.historyValue}>{history.sessions.length}</Text>
              </View>
              <View style={styles.historyItem}>
                <Text style={styles.historyLabel}>Total Plays</Text>
                <Text style={styles.historyValue}>{history.totalPlays}</Text>
              </View>
              <View style={styles.historyItem}>
                <Text style={styles.historyLabel}>Total Cards Shown</Text>
                <Text style={styles.historyValue}>{history.totalCardsShown}</Text>
              </View>
            </View>
          ) : (
            <Text style={styles.noDataText}>No history available</Text>
          )}
        </View>

        {/* Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Actions</Text>

          <TouchableOpacity
            style={[styles.actionButton, styles.primaryButton]}
            onPress={handleExportCsv}
            activeOpacity={0.7}
            disabled={exporting}
          >
            {exporting ? (
              <ActivityIndicator color={colors.primary.white} />
            ) : (
              <Text style={styles.actionButtonText}>📤 Export CSV</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.actionButton, styles.secondaryButton]}
            onPress={handleResetSession}
            activeOpacity={0.7}
          >
            <Text style={styles.actionButtonTextSecondary}>🔄 Reset Current Session</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.actionButton, styles.dangerButton]}
            onPress={handleClearAll}
            activeOpacity={0.7}
          >
            <Text style={styles.actionButtonTextDanger}>🗑️ Clear All Data</Text>
          </TouchableOpacity>
        </View>

        {/* Instructions */}
        <View style={styles.instructionsContainer}>
          <Text style={styles.instructionsTitle}>Developer Notes:</Text>
          <Text style={styles.instructionsText}>
            • Sessions auto-refresh after 30 days{'\n'}
            • 50% refresh rule: deck refreshes when ≥50% cards shown{'\n'}
            • Seeded shuffle ensures consistent order within session{'\n'}
            • Triple-tap app header to access this console
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F1E9',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    fontFamily: fonts.inter.regular,
    color: colors.text.secondary,
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 26,
    fontFamily: fonts.sansation.bold,
    color: colors.text.primary,
  },
  closeButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: colors.border.card,
    borderRadius: 8,
  },
  closeButtonText: {
    fontSize: 14,
    fontFamily: fonts.inter.semiBold,
    color: colors.text.primary,
  },
  section: {
    marginBottom: 24,
    backgroundColor: colors.primary.white,
    borderRadius: 12,
    padding: 16,
    borderWidth: 2,
    borderColor: colors.border.card,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: fonts.sansation.bold,
    color: colors.text.primary,
    marginBottom: 12,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  statItem: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: colors.pastel.lightBlue,
    padding: 12,
    borderRadius: 8,
  },
  statLabel: {
    fontSize: 12,
    fontFamily: fonts.inter.regular,
    color: colors.text.secondary,
    marginBottom: 4,
  },
  statValue: {
    fontSize: 16,
    fontFamily: fonts.inter.bold,
    color: colors.text.primary,
  },
  eventLog: {
    maxHeight: 300,
  },
  eventItem: {
    backgroundColor: colors.pastel.cream,
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  eventHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  eventType: {
    fontSize: 14,
    fontFamily: fonts.inter.bold,
    color: colors.primary.teal,
  },
  eventTime: {
    fontSize: 12,
    fontFamily: fonts.inter.regular,
    color: colors.text.secondary,
  },
  eventDetail: {
    fontSize: 12,
    fontFamily: fonts.inter.regular,
    color: colors.text.secondary,
    marginTop: 2,
  },
  historyStats: {
    gap: 12,
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.pastel.lightGreen,
    padding: 12,
    borderRadius: 8,
  },
  historyLabel: {
    fontSize: 14,
    fontFamily: fonts.inter.regular,
    color: colors.text.primary,
  },
  historyValue: {
    fontSize: 16,
    fontFamily: fonts.inter.bold,
    color: colors.text.primary,
  },
  noDataText: {
    fontSize: 14,
    fontFamily: fonts.inter.regular,
    color: colors.text.secondary,
    textAlign: 'center',
    paddingVertical: 16,
  },
  actionButton: {
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 2,
    borderColor: colors.border.black,
  },
  primaryButton: {
    backgroundColor: colors.primary.teal,
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderColor: colors.border.card,
  },
  dangerButton: {
    backgroundColor: colors.error,
  },
  actionButtonText: {
    fontSize: 16,
    fontFamily: fonts.sansation.bold,
    color: colors.primary.white,
  },
  actionButtonTextSecondary: {
    fontSize: 16,
    fontFamily: fonts.sansation.bold,
    color: colors.text.primary,
  },
  actionButtonTextDanger: {
    fontSize: 16,
    fontFamily: fonts.sansation.bold,
    color: colors.primary.white,
  },
  instructionsContainer: {
    marginTop: 16,
    padding: 16,
    backgroundColor: colors.pastel.lavender,
    borderRadius: 12,
  },
  instructionsTitle: {
    fontSize: 14,
    fontFamily: fonts.inter.bold,
    color: colors.text.primary,
    marginBottom: 8,
  },
  instructionsText: {
    fontSize: 13,
    fontFamily: fonts.inter.regular,
    color: colors.text.secondary,
    lineHeight: 20,
  },
});

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Modal,
  Animated,
} from 'react-native';
import * as Haptics from 'expo-haptics';
import { NavigationProps } from '../types/game';
import {
  StoryStarter,
  evergreenStoryStarters,
  getStoriesBySeason,
  storyElements,
  getRandomSteeringPrompt,
  getRandomTurnGuidance,
} from '../data/storyStarterData';
import { getCurrentSeason, mixSeasonalContent } from '../data/seasonalSystem';
import colors from '../styles/colors';
import { fonts } from '../styles/fonts';
import Icon from '../components/Icon';

interface Props extends NavigationProps {}

export default function StoryStarterScreen({ navigation }: Props) {
  const [stories, setStories] = useState<StoryStarter[]>([]);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [activeTab, setActiveTab] = useState<'how-to' | 'ideas' | 'prompts'>('how-to');

  // Animation values
  const fadeAnim = new Animated.Value(1);
  const scaleAnim = new Animated.Value(1);
  const [promptAnimations] = useState(() =>
    Array.from({ length: 14 }, () => new Animated.Value(0))
  );

  // Initialize stories with seasonal content
  useEffect(() => {
    if (__DEV__) {
      console.log('StoryStarterScreen: Initializing stories...');
    }

    const currentSeason = getCurrentSeason();
    const seasonalStories = getStoriesBySeason(currentSeason);
    const mixedStories = mixSeasonalContent(seasonalStories, evergreenStoryStarters);

    setStories(mixedStories);
    setCurrentStoryIndex(0);

    if (__DEV__) {
      console.log(`StoryStarterScreen: Loaded ${mixedStories.length} stories for season ${currentSeason}`);
    }
  }, []);

  const currentStory = stories[currentStoryIndex];

  // Animate prompts when tab changes to 'prompts'
  useEffect(() => {
    if (activeTab === 'prompts') {
      // Reset all animations to 0
      promptAnimations.forEach(anim => anim.setValue(0));

      // Stagger animation for each prompt
      const animations = promptAnimations.map((anim, index) =>
        Animated.timing(anim, {
          toValue: 1,
          duration: 300,
          delay: index * 80, // 80ms delay between each prompt
          useNativeDriver: true,
        })
      );

      Animated.stagger(0, animations).start();
    }
  }, [activeTab, currentStoryIndex]);

  // Handle next story with animation
  const handleNextStory = async () => {
    if (isTransitioning) return;

    if (__DEV__) {
      console.log('StoryStarterScreen: Moving to next story');
    }

    // Light haptic feedback
    try {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch (error) {
      if (__DEV__) {
        console.log('Haptics error (non-critical):', error);
      }
    }

    setIsTransitioning(true);

    // Fade out current story
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 0.95,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Move to next story
      if (currentStoryIndex < stories.length - 1) {
        setCurrentStoryIndex(currentStoryIndex + 1);
      } else {
        // Loop back to start with fresh mix
        const currentSeason = getCurrentSeason();
        const seasonalStories = getStoriesBySeason(currentSeason);
        const mixedStories = mixSeasonalContent(seasonalStories, evergreenStoryStarters);
        setStories(mixedStories);
        setCurrentStoryIndex(0);
      }

      // Fade in new story
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setIsTransitioning(false);
      });
    });
  };

  // Show help modal
  const showHelp = async () => {
    try {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch (error) {
      if (__DEV__) {
        console.log('Haptics error (non-critical):', error);
      }
    }
    setShowHelpModal(true);
  };

  const closeHelp = async () => {
    try {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch (error) {
      if (__DEV__) {
        console.log('Haptics error (non-critical):', error);
      }
    }
    setShowHelpModal(false);
  };

  // Render tab content
  const renderTabContent = () => {
    switch (activeTab) {
      case 'how-to':
        return (
          <View style={styles.tabContent}>
            <Text style={styles.tabContentTitle}>Getting Started</Text>
            <View style={styles.stepsList}>
              <View style={styles.step}>
                <Text style={styles.stepNumber}>1</Text>
                <Text style={styles.stepText}>Read the story opening out loud</Text>
              </View>
              <View style={styles.step}>
                <Text style={styles.stepNumber}>2</Text>
                <Text style={styles.stepText}>Take turns adding to the story</Text>
              </View>
              <View style={styles.step}>
                <Text style={styles.stepNumber}>3</Text>
                <Text style={styles.stepText}>Build on each other's ideas</Text>
              </View>
              <View style={styles.step}>
                <Text style={styles.stepNumber}>4</Text>
                <Text style={styles.stepText}>Have fun and be creative!</Text>
              </View>
            </View>

            <Text style={styles.tabContentTitle}>Family Tips</Text>
            <View style={styles.tipsList}>
              <Text style={styles.tipItem}>🎪 Let everyone contribute</Text>
              <Text style={styles.tipItem}>🌟 Say "Yes, and..." to build ideas</Text>
              <Text style={styles.tipItem}>🎨 Describe sights, sounds, and feelings</Text>
              <Text style={styles.tipItem}>💫 There are no wrong answers!</Text>
            </View>
          </View>
        );

      case 'ideas':
        return (
          <View style={styles.tabContent}>
            <Text style={styles.tabContentTitle}>Story Elements</Text>
            <Text style={styles.tabSubtitle}>Need inspiration? Try adding these:</Text>

            <View style={styles.elementCategory}>
              <Text style={styles.elementCategoryTitle}>Characters</Text>
              <View style={styles.elementGrid}>
                <View style={styles.elementItem}><Text style={styles.elementText}>Wise owl</Text></View>
                <View style={styles.elementItem}><Text style={styles.elementText}>Brave knight</Text></View>
                <View style={styles.elementItem}><Text style={styles.elementText}>Curious cat</Text></View>
                <View style={styles.elementItem}><Text style={styles.elementText}>Kind wizard</Text></View>
                <View style={styles.elementItem}><Text style={styles.elementText}>Talking tree</Text></View>
                <View style={styles.elementItem}><Text style={styles.elementText}>Friendly dragon</Text></View>
              </View>
            </View>

            <View style={styles.elementCategory}>
              <Text style={styles.elementCategoryTitle}>Places</Text>
              <View style={styles.elementGrid}>
                <View style={styles.elementItem}><Text style={styles.elementText}>Enchanted forest</Text></View>
                <View style={styles.elementItem}><Text style={styles.elementText}>Crystal cave</Text></View>
                <View style={styles.elementItem}><Text style={styles.elementText}>Flying castle</Text></View>
                <View style={styles.elementItem}><Text style={styles.elementText}>Secret garden</Text></View>
                <View style={styles.elementItem}><Text style={styles.elementText}>Rainbow bridge</Text></View>
                <View style={styles.elementItem}><Text style={styles.elementText}>Starlit meadow</Text></View>
              </View>
            </View>

            <View style={styles.elementCategory}>
              <Text style={styles.elementCategoryTitle}>Magical Objects</Text>
              <View style={styles.elementGrid}>
                <View style={styles.elementItem}><Text style={styles.elementText}>Golden compass</Text></View>
                <View style={styles.elementItem}><Text style={styles.elementText}>Magic paintbrush</Text></View>
                <View style={styles.elementItem}><Text style={styles.elementText}>Singing flower</Text></View>
                <View style={styles.elementItem}><Text style={styles.elementText}>Invisible cloak</Text></View>
                <View style={styles.elementItem}><Text style={styles.elementText}>Time crystal</Text></View>
                <View style={styles.elementItem}><Text style={styles.elementText}>Wishing stone</Text></View>
              </View>
            </View>
          </View>
        );

      case 'prompts':
        const storyPrompts = [
          "\"What happens next?\"",
          "\"Who else might join the adventure?\"",
          "\"What sounds do you hear?\"",
          "\"How does the character feel?\"",
          "\"What surprise could happen?\"",
          "\"Where should they go next?\"",
          "\"What would you do if you were there?\"",
          "\"What problem needs to be solved?\""
        ];
        const storyTwists = [
          "🌟 A magical object appears",
          "🐾 A friendly animal helper arrives",
          "🌈 The weather suddenly changes",
          "🎭 Someone wears a disguise",
          "🗝️ A secret door is discovered",
          "⚡ Something unexpected happens"
        ];

        return (
          <View style={styles.tabContent}>
            <Text style={styles.tabContentTitle}>Story Prompts</Text>
            <Text style={styles.tabSubtitle}>When you're stuck, try asking:</Text>

            <View style={styles.promptsList}>
              {storyPrompts.map((prompt, index) => (
                <Animated.View
                  key={index}
                  style={{
                    opacity: promptAnimations[index],
                    transform: [
                      {
                        translateX: promptAnimations[index].interpolate({
                          inputRange: [0, 1],
                          outputRange: [-20, 0],
                        }),
                      },
                    ],
                  }}
                >
                  <Text style={styles.promptItem}>{prompt}</Text>
                </Animated.View>
              ))}
            </View>

            <Text style={styles.tabContentTitle}>Story Twists</Text>
            <Text style={styles.tabSubtitle}>Add excitement with these ideas:</Text>

            <View style={styles.promptsList}>
              {storyTwists.map((twist, index) => (
                <Animated.View
                  key={index}
                  style={{
                    opacity: promptAnimations[index + 8],
                    transform: [
                      {
                        translateX: promptAnimations[index + 8].interpolate({
                          inputRange: [0, 1],
                          outputRange: [-20, 0],
                        }),
                      },
                    ],
                  }}
                >
                  <Text style={styles.promptItem}>{twist}</Text>
                </Animated.View>
              ))}
            </View>
          </View>
        );

      default:
        return null;
    }
  };

  if (!currentStory) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading stories...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Custom Header */}
      <View style={styles.customHeader}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
          activeOpacity={0.7}
        >
          <Icon name="back-button" size={48} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Story Starter</Text>
      </View>

      <View style={styles.content}>
        {/* Subtitle */}
        <View style={styles.header}>
          <Text style={styles.subtitle}>Read aloud. Build story. Take turns!</Text>
        </View>

        {/* Hero Story Card */}
        <View style={styles.heroSection}>
          <Animated.View
            style={[
              styles.heroStoryCard,
              {
                opacity: fadeAnim,
                transform: [{ scale: scaleAnim }],
              }
            ]}
          >
            <View style={styles.storyContent}>
              <Text style={styles.storyText}>"{currentStory.openingLine}"</Text>
            </View>
          </Animated.View>
        </View>

        {/* Action Button */}
        <View style={styles.actionsSection}>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={handleNextStory}
            disabled={isTransitioning}
          >
            <Text style={styles.primaryButtonText}>New Story</Text>
          </TouchableOpacity>
        </View>

      </View>

      {/* Help Modal with Tabs */}
      <Modal
        visible={showHelpModal}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={closeHelp}
      >
        <SafeAreaView style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Story Helper</Text>
            <TouchableOpacity style={styles.closeButton} onPress={closeHelp}>
              <Text style={styles.closeButtonText}>Done</Text>
            </TouchableOpacity>
          </View>

          {/* Tab Navigation */}
          <View style={styles.tabBar}>
            <TouchableOpacity
              style={[styles.tab, activeTab === 'how-to' && styles.activeTab]}
              onPress={() => setActiveTab('how-to')}
            >
              <Text style={[styles.tabText, activeTab === 'how-to' && styles.activeTabText]}>How to Play</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, activeTab === 'ideas' && styles.activeTab]}
              onPress={() => setActiveTab('ideas')}
            >
              <Text style={[styles.tabText, activeTab === 'ideas' && styles.activeTabText]}>Story Ideas</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, activeTab === 'prompts' && styles.activeTab]}
              onPress={() => setActiveTab('prompts')}
            >
              <Text style={[styles.tabText, activeTab === 'prompts' && styles.activeTabText]}>Need Help?</Text>
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.modalContent} showsVerticalScrollIndicator={false}>
            {renderTabContent()}
          </ScrollView>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEF5FF',
  },
  customHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    height: 70,
    backgroundColor: '#FEF5FF',
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    left: 16,
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: fonts.sansation.bold,
    color: colors.text.primary,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
    fontFamily: fonts.inter.regular,
    color: '#666666',
  },

  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  titleSection: {
    flex: 1,
    marginRight: 16,
  },
  title: {
    fontSize: 36,
    fontFamily: fonts.sansation.bold,
    color: colors.text.primary,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    fontFamily: fonts.inter.regular,
    color: colors.text.primary,
    marginBottom: 20,
    textAlign: 'center',
  },
  infoButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#4ECDC4',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoIcon: {
    fontSize: 20,
    fontFamily: fonts.inter.bold,
    color: 'white',
  },

  // Hero Section
  heroSection: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 40,
    marginBottom: 30,
  },
  heroStoryCard: {
    backgroundColor: '#FEF5FF', // Same as screen background
    borderRadius: 10,
    padding: 28,
    borderWidth: 2,
    borderColor: colors.border.card,
    borderLeftWidth: 6, // Accent bar like timesheets app
    borderLeftColor: colors.border.black,
    borderBottomWidth: 6, // Bottom accent bar
    borderBottomColor: colors.border.black,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 0,
    elevation: 4,
    position: 'relative',
  },
  storyContent: {
    alignItems: 'center',
  },
  storyText: {
    fontSize: 22,
    lineHeight: 32,
    color: '#333333',
    fontStyle: 'italic',
    textAlign: 'center',
    fontWeight: '500',
  },

  // Actions Section
  actionsSection: {
    marginBottom: 20,
  },
  primaryButton: {
    backgroundColor: colors.border.black,
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 32,
    alignItems: 'center',
    width: '100%',
  },
  primaryButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary.white,
  },


  // Modal styles
  modalContainer: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    backgroundColor: 'white',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
  },
  closeButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  closeButtonText: {
    fontSize: 18,
    color: '#4ECDC4',
    fontWeight: '600',
  },

  // Tab Bar
  tabBar: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: '#4ECDC4',
  },
  tabText: {
    fontSize: 16,
    color: '#666666',
    fontWeight: '600',
  },
  activeTabText: {
    color: '#4ECDC4',
  },

  // Tab Content
  modalContent: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  tabContent: {
    flex: 1,
  },
  tabContentTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 16,
  },
  tabSubtitle: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 20,
  },

  // Steps
  stepsList: {
    marginBottom: 24,
  },
  step: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  stepNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#4ECDC4',
    width: 36,
    height: 36,
    borderRadius: 18,
    textAlign: 'center',
    lineHeight: 36,
    marginRight: 16,
  },
  stepText: {
    fontSize: 16,
    color: '#333333',
    flex: 1,
    lineHeight: 22,
  },

  // Tips
  tipsList: {
    marginBottom: 20,
  },
  tipItem: {
    fontSize: 16,
    color: '#333333',
    lineHeight: 24,
    marginBottom: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },

  // Elements for modal
  elementCategory: {
    marginBottom: 24,
  },
  elementCategoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4ECDC4',
    marginBottom: 12,
  },
  elementGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  elementItem: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 14,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  elementText: {
    fontSize: 14,
    color: '#333333',
    fontWeight: '500',
  },

  // Prompts for modal
  promptsList: {
    gap: 12,
  },
  promptItem: {
    fontSize: 16,
    color: '#333333',
    lineHeight: 24,
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    borderLeftWidth: 4,
    borderLeftColor: '#FFD166',
  },
});
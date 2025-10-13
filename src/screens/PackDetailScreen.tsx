import React, { useEffect, useCallback, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';
import * as Haptics from 'expo-haptics';
import { NavigationProps } from '../types/game';
import { CharadesPack, CharadesCategory, isCharadesPack } from '../types/content';
import { getPackById } from '../data';
import colors from '../styles/colors';
import { fonts } from '../styles/fonts';
import Icon from '../components/Icon';

interface Props extends NavigationProps {}

function PackDetailScreen({ navigation, route }: Props) {
  const packId = route?.params?.packId;

  // Get pack data
  const pack = useMemo(() => {
    if (!packId) return null;
    const foundPack = getPackById(packId);
    if (foundPack && isCharadesPack(foundPack)) {
      return foundPack;
    }
    return null;
  }, [packId]);

  useEffect(() => {
    if (__DEV__) {
      console.log('PackDetailScreen - packId:', packId);
      console.log('Pack loaded:', pack?.name);
    }

    if (!pack) {
      Alert.alert('Error', 'Pack not found');
      navigation.goBack();
    }
  }, [pack, packId, navigation]);

  const handleCategoryPress = useCallback(async (category: CharadesCategory) => {
    try {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch (error) {
      if (__DEV__) {
        console.log('Haptics error (non-critical):', error);
      }
    }

    if (__DEV__) {
      console.log(`Category selected: ${category.name}`);
    }

    // Navigate directly to Charades (instructions shown inside CharadesScreen)
    navigation.navigate('Charades', {
      packId: pack?.id,
      categoryId: category.id,
    });
  }, [navigation, pack]);

  const renderCategoryCard = useCallback((category: CharadesCategory) => {
    return (
      <TouchableOpacity
        key={category.id}
        style={styles.categoryCard}
        onPress={() => handleCategoryPress(category)}
        activeOpacity={0.7}
      >
        <View style={styles.categoryContent}>
          <Text style={styles.categoryName}>{category.name}</Text>
          <Text style={styles.categoryCount}>
            {category.cards.length} {category.cards.length === 1 ? 'card' : 'cards'}
          </Text>
        </View>
        <Text style={styles.arrowIcon}>→</Text>
      </TouchableOpacity>
    );
  }, [handleCategoryPress]);

  if (!pack) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Icon name={pack.icon || 'theater'} size={64} style={styles.packIcon} />
          <Text style={styles.packName}>{pack.name}</Text>
          <Text style={styles.packDescription}>{pack.description}</Text>
        </View>

        <View style={styles.categoriesContainer}>
          <Text style={styles.sectionTitle}>Choose a Category</Text>
          {pack.categories.map(renderCategoryCard)}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default React.memo(PackDetailScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F1E9',
  },
  content: {
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginVertical: 24,
  },
  packIcon: {
    marginBottom: 16,
  },
  packName: {
    fontSize: 28,
    fontFamily: fonts.sansation.bold,
    color: colors.text.primary,
    marginBottom: 8,
    textAlign: 'center',
  },
  packDescription: {
    fontSize: 16,
    fontFamily: fonts.inter.regular,
    color: colors.text.secondary,
    textAlign: 'center',
    lineHeight: 24,
  },
  categoriesContainer: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: fonts.sansation.bold,
    color: colors.text.primary,
    marginBottom: 16,
  },
  categoryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    padding: 20,
    marginBottom: 12,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: colors.border.card,
    borderLeftWidth: 6,
    borderLeftColor: colors.border.black,
    borderBottomWidth: 6,
    borderBottomColor: colors.border.black,
  },
  categoryContent: {
    flex: 1,
  },
  categoryName: {
    fontSize: 20,
    fontFamily: fonts.sansation.bold,
    color: colors.text.primary,
    marginBottom: 4,
  },
  categoryCount: {
    fontSize: 14,
    fontFamily: fonts.inter.regular,
    color: colors.text.secondary,
  },
  arrowIcon: {
    fontSize: 24,
    color: colors.text.secondary,
    marginLeft: 8,
  },
});

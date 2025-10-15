import React, { useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import * as Haptics from 'expo-haptics';
import { NavigationProps } from '../types/game';
import colors from '../styles/colors';
import { fonts } from '../styles/fonts';

interface Props extends NavigationProps {}

interface CharadesCategory {
  id: string;
  name: string;
  image: any;
  type: 'circle' | 'card';
}

const categories: CharadesCategory[] = [
  // Top row - circular icons
  {
    id: 'bollywood',
    name: 'Bollywood',
    image: require('../../assets/DesiGames/category-circle-Bollywood.png'),
    type: 'circle',
  },
  {
    id: 'cricket',
    name: 'Cricket',
    image: require('../../assets/DesiGames/category-circle-Cricket.png'),
    type: 'circle',
  },
  {
    id: 'desi-life',
    name: 'Desi Life',
    image: require('../../assets/DesiGames/category-circle-DesiLife.png'),
    type: 'circle',
  },
  // Card categories
  {
    id: 'bollywood-stars',
    name: 'Bollywood\nStars',
    image: require('../../assets/DesiGames/category-Bollywood-Star.png'),
    type: 'card',
  },
  {
    id: 'iconic-characters',
    name: 'Iconic\nCharacters',
    image: require('../../assets/DesiGames/category-Iconic-Characters.png'),
    type: 'card',
  },
  {
    id: 'song-dance',
    name: 'Song &\nDance',
    image: require('../../assets/DesiGames/category-Song-Dance.png'),
    type: 'card',
  },
  {
    id: 'comedians-villains',
    name: 'Comedians &\nVillains',
    image: require('../../assets/DesiGames/category-Comedians-Villains.png'),
    type: 'card',
  },
  {
    id: 'cricket-players',
    name: 'Cricket\nPlayers',
    image: require('../../assets/DesiGames/category-Cricket-Players.png'),
    type: 'card',
  },
  {
    id: 'famous-matches',
    name: 'Famous\nMatches',
    image: require('../../assets/DesiGames/category-Cricket-Matches.png'),
    type: 'card',
  },
  {
    id: 'ads-moments',
    name: 'Ads &\nMoments',
    image: require('../../assets/DesiGames/category-Ads-Moments.png'),
    type: 'card',
  },
  {
    id: 'desi-street-food',
    name: 'Desi Street\nFood',
    image: require('../../assets/DesiGames/category-Desi-Street-Food.png'),
    type: 'card',
  },
  {
    id: 'indian-landmarks',
    name: 'Indian\nLandmarks',
    image: require('../../assets/DesiGames/category-Landmarks.png'),
    type: 'card',
  },
  {
    id: 'indian-brands',
    name: 'Indian\nBrands',
    image: require('../../assets/DesiGames/category-Brands.png'),
    type: 'card',
  },
];

function PackListScreen({ navigation }: Props) {
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

    // Navigate directly to Charades game with the selected category
    navigation.navigate('CharadesCategory', {
      categoryId: category.id,
      categoryName: category.name.replace('\n', ' '),
    });
  }, [navigation]);

  const circleCategories = categories.filter(cat => cat.type === 'circle');
  const cardCategories = categories.filter(cat => cat.type === 'card');

  const renderCircleCategory = useCallback((category: CharadesCategory) => {
    return (
      <TouchableOpacity
        key={category.id}
        style={styles.circleCategory}
        onPress={() => handleCategoryPress(category)}
        activeOpacity={0.7}
      >
        <Image
          source={category.image}
          style={styles.circleImage}
          resizeMode="contain"
        />
        <Text style={styles.circleCategoryName}>{category.name}</Text>
      </TouchableOpacity>
    );
  }, [handleCategoryPress]);

  const renderCardCategory = useCallback((category: CharadesCategory) => {
    return (
      <TouchableOpacity
        key={category.id}
        style={styles.cardCategory}
        onPress={() => handleCategoryPress(category)}
        activeOpacity={0.7}
      >
        <Image
          source={category.image}
          style={styles.cardImage}
          resizeMode="contain"
        />
        <Text style={styles.cardCategoryName}>{category.name}</Text>
      </TouchableOpacity>
    );
  }, [handleCategoryPress]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Circle categories row */}
        <View style={styles.circleRow}>
          {circleCategories.map(renderCircleCategory)}
        </View>

        {/* Card categories grid */}
        <View style={styles.cardGrid}>
          {cardCategories.map(renderCardCategory)}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default React.memo(PackListScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F1E9',
  },
  content: {
    padding: 16,
    paddingBottom: 24,
  },
  circleRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    paddingHorizontal: 8,
  },
  circleCategory: {
    alignItems: 'center',
    width: 90,
  },
  circleImage: {
    width: 70,
    height: 70,
    marginBottom: 3,
  },
  circleCategoryName: {
    fontSize: 14,
    fontFamily: fonts.inter.semiBold,
    color: colors.text.primary,
    textAlign: 'center',
  },
  cardGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardCategory: {
    width: '48%',
    marginBottom: 16,
    alignItems: 'center',
  },
  cardImage: {
    width: '100%',
    height: 140,
    borderRadius: 12,
  },
  cardCategoryName: {
    fontSize: 15,
    fontFamily: fonts.sansation.bold,
    color: colors.text.primary,
    textAlign: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
    lineHeight: 20,
  },
});

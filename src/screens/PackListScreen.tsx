import React, { useCallback, useRef, useState } from 'react';
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
  parentCategory?: 'bollywood' | 'cricket' | 'desi-life';
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
  // Bollywood card categories
  {
    id: 'bollywood-stars',
    name: 'Bollywood\nStars',
    image: require('../../assets/DesiGames/category-Bollywood-Star.png'),
    type: 'card',
    parentCategory: 'bollywood',
  },
  {
    id: 'iconic-characters',
    name: 'Iconic\nCharacters',
    image: require('../../assets/DesiGames/category-Iconic-Characters.png'),
    type: 'card',
    parentCategory: 'bollywood',
  },
  {
    id: 'song-dance',
    name: 'Song &\nDance',
    image: require('../../assets/DesiGames/category-Song-Dance.png'),
    type: 'card',
    parentCategory: 'bollywood',
  },
  {
    id: 'comedians-villains',
    name: 'Comedians &\nVillains',
    image: require('../../assets/DesiGames/category-Comedians-Villains.png'),
    type: 'card',
    parentCategory: 'bollywood',
  },
  // Cricket card categories
  {
    id: 'cricket-players',
    name: 'Cricket\nPlayers',
    image: require('../../assets/DesiGames/category-Cricket-Players.png'),
    type: 'card',
    parentCategory: 'cricket',
  },
  {
    id: 'famous-matches',
    name: 'Famous\nMatches',
    image: require('../../assets/DesiGames/category-Cricket-Matches.png'),
    type: 'card',
    parentCategory: 'cricket',
  },
  // Desi Life card categories
  {
    id: 'ads-moments',
    name: 'Ads &\nMoments',
    image: require('../../assets/DesiGames/category-Ads-Moments.png'),
    type: 'card',
    parentCategory: 'desi-life',
  },
  {
    id: 'desi-street-food',
    name: 'Desi Street\nFood',
    image: require('../../assets/DesiGames/category-Desi-Street-Food.png'),
    type: 'card',
    parentCategory: 'desi-life',
  },
  {
    id: 'indian-landmarks',
    name: 'Indian\nLandmarks',
    image: require('../../assets/DesiGames/category-Landmarks.png'),
    type: 'card',
    parentCategory: 'desi-life',
  },
  {
    id: 'indian-brands',
    name: 'Indian\nBrands',
    image: require('../../assets/DesiGames/category-Brands.png'),
    type: 'card',
    parentCategory: 'desi-life',
  },
];

function PackListScreen({ navigation }: Props) {
  const scrollViewRef = useRef<ScrollView>(null);
  const sectionRefs = useRef<{ [key: string]: number }>({});
  const [selectedCategory, setSelectedCategory] = useState<string>('bollywood');
  const isUserScrolling = useRef<boolean>(true);

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

    // If it's a circle category, scroll to that section
    if (category.type === 'circle') {
      isUserScrolling.current = false;
      setSelectedCategory(category.id);
      const sectionY = sectionRefs.current[category.id];
      if (sectionY !== undefined && scrollViewRef.current) {
        scrollViewRef.current.scrollTo({ y: sectionY, animated: true });
      }
      // Re-enable user scroll tracking after animation completes
      setTimeout(() => {
        isUserScrolling.current = true;
      }, 500);
    } else {
      // If it's a card category, navigate to Charades game
      navigation.navigate('CharadesCategory', {
        categoryId: category.id,
        categoryName: category.name.replace('\n', ' '),
      });
    }
  }, [navigation]);

  const handleSectionLayout = useCallback((sectionId: string, event: any) => {
    const { y } = event.nativeEvent.layout;
    // Subtract a small offset to hide previous section margins
    sectionRefs.current[sectionId] = Math.max(0, y - 20);
  }, []);

  const handleScroll = useCallback((event: any) => {
    if (!isUserScrolling.current) return;

    const scrollY = event.nativeEvent.contentOffset.y;
    const sections = sectionRefs.current;

    // Determine which section is currently visible based on scroll position
    if (scrollY < sections['cricket'] - 50) {
      setSelectedCategory('bollywood');
    } else if (scrollY >= sections['cricket'] - 50 && scrollY < sections['desi-life'] - 50) {
      setSelectedCategory('cricket');
    } else if (scrollY >= sections['desi-life'] - 50) {
      setSelectedCategory('desi-life');
    }
  }, []);

  const circleCategories = categories.filter(cat => cat.type === 'circle');
  const bollywoodCategories = categories.filter(cat => cat.parentCategory === 'bollywood');
  const cricketCategories = categories.filter(cat => cat.parentCategory === 'cricket');
  const desiLifeCategories = categories.filter(cat => cat.parentCategory === 'desi-life');

  const renderCircleCategory = useCallback((category: CharadesCategory) => {
    const isSelected = selectedCategory === category.id;
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
        {isSelected && <View style={styles.selectedUnderline} />}
      </TouchableOpacity>
    );
  }, [handleCategoryPress, selectedCategory]);

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

  const renderSection = useCallback((
    sectionId: string,
    sectionCategories: CharadesCategory[]
  ) => {
    if (sectionCategories.length === 0) return null;

    return (
      <View
        key={sectionId}
        onLayout={(event) => handleSectionLayout(sectionId, event)}
      >
        <View style={styles.cardGrid}>
          {sectionCategories.map(renderCardCategory)}
        </View>
      </View>
    );
  }, [handleSectionLayout, renderCardCategory]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Circle categories row - sticky at top */}
      <View style={styles.circleRow}>
        {circleCategories.map(renderCircleCategory)}
      </View>

      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {/* Bollywood section */}
        {renderSection('bollywood', bollywoodCategories)}

        {/* Cricket section */}
        {renderSection('cricket', cricketCategories)}

        {/* Desi Life section */}
        {renderSection('desi-life', desiLifeCategories)}
      </ScrollView>
    </SafeAreaView>
  );
}

export default React.memo(PackListScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2EDD3',
  },
  content: {
    padding: 16,
    paddingTop: 28,
    paddingBottom: 400,
  },
  circleRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: '#F2EDD3',
    borderBottomWidth: 1,
    borderBottomColor: '#E8DCC9',
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
  selectedUnderline: {
    width: 60,
    height: 3,
    backgroundColor: '#000000',
    marginTop: 4,
    borderRadius: 1.5,
  },
  cardGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  cardCategory: {
    width: 198,
    marginBottom: 16,
    alignItems: 'center',
  },
  cardImage: {
    width: 198,
    height: 210,
    borderRadius: 12,
  },
  cardCategoryName: {
    fontSize: 15,
    fontFamily: fonts.sansation.bold,
    color: colors.text.primary,
    textAlign: 'center',
    paddingTop: 0,
    paddingBottom: 6,
    paddingHorizontal: 8,
    lineHeight: 20,
  },
});

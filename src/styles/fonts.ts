// Font families for the app
export const fonts = {
  // Sansation - for headers and card titles
  sansation: {
    regular: 'Sansation_400Regular',
    bold: 'Sansation_700Bold',
  },
  // Inter - for all other text
  inter: {
    regular: 'Inter_400Regular',
    semiBold: 'Inter_600SemiBold',
    bold: 'Inter_700Bold',
  },
  // Lato - for dialogue text in Guess the Movie
  lato: {
    regular: 'Lato_400Regular',
    bold: 'Lato_700Bold',
  },
};

// Helper functions for consistent font usage
export const headerFont = {
  fontFamily: fonts.sansation.bold,
};

export const cardTitleFont = {
  fontFamily: fonts.sansation.bold,
};

export const bodyFont = {
  fontFamily: fonts.inter.regular,
};

export const bodyFontSemiBold = {
  fontFamily: fonts.inter.semiBold,
};

export const bodyFontBold = {
  fontFamily: fonts.inter.bold,
};

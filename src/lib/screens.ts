/**
 * Central map of app screenshots (current design) → keyed by the place they
 * appear. Imported as ImageMetadata so `astro:assets` can emit optimized,
 * responsive AVIF/WebP. Source PNGs are frameless full-screen captures; they are
 * wrapped in a CSS device bezel by <PhoneFrame>.
 */
import home from '@/assets/screens/home.png';
import sahifa from '@/assets/screens/sahifa.png';
import heritage from '@/assets/screens/heritage.png';
import literature from '@/assets/screens/literature.png';
import ziyarat from '@/assets/screens/ziyarat.png';

export const SCREENS = {
  hero: home, // home screen
  sahifa, // Sahifa reading + word explanation
  rights: heritage, // "Imam's heritage" hub (lists Risalat al-Huquq, Musnad…)
  masnad: literature, // a text reading page
  ziyarat, // Ziyarat list
} as const;

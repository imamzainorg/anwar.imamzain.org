/**
 * Central map of app screenshots → keyed by the place they appear. Imported as
 * ImageMetadata so `astro:assets` can emit optimized, responsive AVIF/WebP.
 * All source PNGs already include a rendered device frame.
 */
import hero from '@/assets/screens/03.png';
import sahifa from '@/assets/screens/05.png';
import rights from '@/assets/screens/06.png';
import masnad from '@/assets/screens/04.png';
import ziyarat from '@/assets/screens/07.png';

export const SCREENS = { hero, sahifa, rights, masnad, ziyarat } as const;

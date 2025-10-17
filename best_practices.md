# 📘 Project Best Practices

## 1. Project Purpose
TravelloAppRN is a React Native mobile application (TypeScript) for browsing travel destinations. It provides an onboarding experience, a home screen listing popular destinations, and a detailed destination screen showing activities, pricing, and a booking CTA. The current data is local (utils/destinationData.ts) and typed via src/types.

## 2. Project Structure
- Entry points and config
  - index.js: Registers the root component.
  - src/App.tsx: Navigation container and stack navigator setup.
  - app.json: App metadata used by AppRegistry.
  - metro.config.js: Default Metro configuration.
  - jest.config.js: Jest preset for React Native.
  - tsconfig.json: TypeScript config extending RN preset.
  - .eslintrc.js / .prettierrc.js: Code style and formatting rules.
- Source layout (src/)
  - assets/: Images and fonts used by the app.
    - fonts/: PlusJakartaSans variable fonts are present.
  - components/: Reusable UI components.
    - DetailDestination/: Feature-scoped subcomponents for Detail screen.
  - screens/: App screens (Onboarding, Home, DetailDestination).
  - types/: TypeScript interfaces (e.g., Destination, Activity, Review).
  - utils/: Static data and generic helpers (e.g., destinationData.ts).
- Separation of concerns
  - Screens orchestrate data and render composite components.
  - Components are presentational and receive typed props.
  - Types centralize domain models.
  - Utilities hold data and non-UI helpers.

## 3. Test Strategy
- Framework: Jest with preset 'react-native'; react-test-renderer present for component rendering.
- Current tests
  - __tests__/App.test.tsx: Smoke test ensuring App renders.
- Recommended conventions
  - Place tests alongside files (ComponentName.test.tsx) or under __tests__/ mirroring src structure.
  - Use React Native Testing Library for user-centric tests (interactions, accessibility labels, navigation expectations).
  - Snapshot tests only for stable presentational components; avoid for dynamic content.
  - Mock external modules (e.g., @react-navigation/native, react-native-vector-icons) and platform APIs as needed.
  - Unit tests for utils and pure functions in src/utils.
  - Integration tests for navigation (e.g., navigating from Home to Detail with params) using a test NavigationContainer.
  - Aim for practical coverage (e.g., 70–80% lines/branches on UI-heavy code) while prioritizing critical paths.

## 4. Code Style
- Language rules
  - Use TypeScript interfaces/types for all props and domain models.
  - Avoid `any` and `@ts-ignore`; instead, add proper types (e.g., typed navigation params).
  - Prefer function components; type props via interfaces rather than relying on implicit `any`.
  - Keep functions pure where feasible; avoid side-effects during render.
- Naming
  - Components and Screens: PascalCase (e.g., HomeScreen.tsx, DestinationCard.tsx).
  - Variables, functions, props: camelCase.
  - Types and Interfaces: PascalCase (Destination, Activity, Review).
  - Files: Components/Screens in PascalCase; utilities/types in camelCase or descriptive names (consistent per folder).
- Styling
  - Use `StyleSheet.create` for performance and organization.
  - Centralize theme primitives (colors, spacing, typography) in a theme module to reduce duplication.
  - Prefer semantic style names (e.g., header, card, container).
- Comments & docs
  - Keep comments short and purposeful. For shared utilities and complex logic, add JSDoc/TSDoc summaries.
- Error handling
  - Guard against missing route params (e.g., undefined destination) and provide reasonable fallbacks (placeholder images, text).
  - For future API calls, handle loading, error, and empty states explicitly.

## 5. Common Patterns
- Navigation
  - Use React Navigation Native Stack; define a RootStackParamList and type `useNavigation` and `useRoute` to remove `@ts-ignore` and ensure safe param usage.
- Lists & rendering
  - Use FlatList for collections with stable `keyExtractor` (avoid array index keys).
  - Extract list items to memoized components to reduce re-renders when appropriate.
- Media & overlays
  - ImageBackground overlays via absolute View for contrast and readability.
  - Use SafeAreaView for bottom bars and notches (already used in BottomBar).
- Data and types
  - Centralize domain interfaces in src/types and reuse across components.
  - Keep mock/static data in src/utils for easy swap with real APIs later.

## 6. Do's and Don'ts
- Do
  - ✅ Define and use typed navigation param lists to avoid `@ts-ignore` when navigating with params.
  - ✅ Keep components small, focused, and reusable; colocate feature-specific components (as with DetailDestination/).
  - ✅ Extract constants (colors, spacing, fonts) and strings to avoid duplication and enable future i18n.
  - ✅ Use accessibility props (accessible, accessibilityLabel, importantForAccessibility) on interactive elements.
  - ✅ Use SafeAreaView for top/bottom insets and test on devices with notches.
  - ✅ Validate remote images and provide placeholders/fallbacks.
  - ✅ Run `npm run lint` and `npm run test` in CI to keep code quality consistent.
- Don't
  - ❌ Avoid `@ts-ignore` to bypass type errors; type navigation and route params correctly.
  - ❌ Avoid inline anonymous functions in render for heavily re-rendered lists; memoize handlers where necessary.
  - ❌ Don’t hardcode user data (e.g., temperature, usernames) directly in UI for production; abstract into state/services.
  - ❌ Avoid using array index as React key; use stable IDs.
  - ❌ Don’t introduce new native dependencies without updating iOS Pods and validating Android configs.

## 7. Tools & Dependencies
- Key libraries
  - react, react-native (0.81.4): Core framework.
  - @react-navigation/native, @react-navigation/native-stack: Navigation.
  - react-native-screens, react-native-safe-area-context: Navigation and insets integration.
  - react-native-vector-icons: Icons used across UI.
  - react-native-svg: SVG support (to render via components). Note: importing `.svg` files as components requires a Metro transformer.
- Testing
  - jest (preset: react-native), react-test-renderer. Consider adding `@testing-library/react-native` for interaction tests.
- Code style
  - ESLint extends `@react-native`; Prettier enforces single quotes, trailing commas (all), and arrowParens avoid.
- Project setup
  - Node >= 20.
  - Scripts: `start`, `android`, `ios`, `lint`, `test`.
  - iOS: Use Bundler and CocoaPods as described in README (bundle install; bundle exec pod install).
- Assets & fonts
  - Custom fonts exist under src/assets/fonts. To use custom fonts app-wide:
    - Add a `react-native.config.js` to link fonts (RN autolinking requires explicit assets config) and run `npx react-native-asset` (or `npx react-native-asset` post-install script), then reference `fontFamily` in styles.
  - SVG files: If you want to import `.svg` as React components (e.g., `import Logo from './logo.svg'`), configure `react-native-svg-transformer` and adjust `metro.config.js` (assetExts/sourceExts) accordingly.

## 8. Other Notes
- Navigation typing pattern
  - Create a `navigation.ts` (e.g., src/types/navigation.ts) with `RootStackParamList` including `Onboarding`, `Home`, `DetailDestination: { destination: Destination }`.
  - Use `createNativeStackNavigator<RootStackParamList>()`, `useNavigation<NativeStackNavigationProp<RootStackParamList>>()`, and `useRoute<RouteProp<RootStackParamList, 'DetailDestination'>>()`.
- Theming & design system
  - Consider creating a theme module (src/theme/) to centralize colors, spacing, radii, font sizes, and shadows to standardize UI.
- Performance
  - Prefer `memo`/`useCallback` for frequently re-rendered list items.
  - Avoid overly large images; specify appropriate sizes and consider caching strategies.
- Internationalization and content
  - Extract user-facing strings for potential i18n.
- Accessibility
  - Ensure touch targets are at least 44x44 and controls have accessible labels.
- Platform specifics
  - Validate StatusBar overlays and edge-to-edge layouts across iOS/Android.
- CI/CD
  - Add basic CI to run `lint` and `test` on PRs; consider adding type-check step `tsc --noEmit`.

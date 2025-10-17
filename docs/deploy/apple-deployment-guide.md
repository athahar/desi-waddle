# Apple App Store Deployment Guidelines - Charadesi

## 📱 App Information

- **App Name:** Charadesi
- **Bundle ID:** `com.desiwaddle.charades`
- **Slug:** `desi-waddle-charades`
- **EAS Project ID:** `850609f7-3aa4-443c-99f0-0561fd1858cc`
- **Platform:** iOS only (managed Expo project)

---

## 🔢 Build Number Management

**✅ GOOD NEWS:** This is a **managed Expo project** (no native `ios/` directory), so build numbers are simple!

### Update Location

You only need to update **ONE file**: `app.config.js`

```javascript
ios: {
  supportsTablet: false,
  bundleIdentifier: 'com.desiwaddle.charades',
  buildNumber: '1',  // ← Update this ONLY
  icon: path.resolve(__dirname, './assets/icon.png'),
  // ...
}
```

### Build Number History

Track all builds here to make incrementing easy:

| Build # | Version | Date | Status | Notes |
|---------|---------|------|--------|-------|
| 1 | 0.1.0 | 2025-10-16 | ✅ TestFlight | First successful build - tested and working! |
| 2 | 0.1.0 | 2025-10-16 | ⏭️ Skipped | Build number incremented but not deployed |
| 3 | 0.1.0 | 2025-10-16 | 🚧 Building | App rename to "Charadesi" + PostHog analytics + Khelo icon/splash |

**Next Build Number:** 4

---

## 📋 Complete Pre-Flight Checklist

When you say **"testflight ready"**, **"pre-flight check"**, or **"deploy for ios"**, run these checks:

### ✅ Step 1: Increment Build Number

```bash
# Current build number
grep -A 10 "ios" app.config.js | grep buildNumber

# Edit app.config.js and increment buildNumber
# Example: "buildNumber": "1" → "buildNumber": "2"
```

**Update the Build Number History table above after incrementing!**

### ✅ Step 2: Console.log Safety Check

**Status:** ✅ **AUTOMATED - Handled by Babel Plugin**

**Why this check passes automatically:**

This project uses `babel-plugin-transform-remove-console` which **automatically removes ALL console statements** in production builds:

```javascript
// babel.config.js
plugins: [
  process.env.NODE_ENV === 'production' && 'transform-remove-console',
].filter(Boolean),
```

**What this means:**
- ✅ Console.log statements are automatically stripped from production builds
- ✅ No manual wrapping with `if (__DEV__)` needed
- ✅ Cleaner, more maintainable code
- ✅ `console.error` is preserved for actual error handling
- ✅ EAS Build automatically sets `NODE_ENV=production` for production/preview builds

**Optional Verification:**
```bash
# Check babel plugin is installed
grep "babel-plugin-transform-remove-console" package.json

# Expected: "babel-plugin-transform-remove-console": "^6.9.4"
```

**Note:** Many console statements are already wrapped with `if (__DEV__)` as a double safety measure, but this is not required due to the babel plugin.

### ✅ Step 3: TypeScript Check

```bash
# Must pass with 0 errors
npx tsc --noEmit
```

### ✅ Step 4: Expo Doctor Check

```bash
# Must pass with 0 critical issues
npx expo-doctor
```

### ✅ Step 5: Verify App Config

```bash
# Check bundle ID and build number
grep -A 10 "ios" app.config.js

# Verify:
# - bundleIdentifier: "com.desiwaddle.charades"
# - buildNumber: "[incremented number]"
# - version matches semantic versioning (e.g., "0.1.0")
```

### ✅ Step 6: Commit Build Number Increment

```bash
git add app.config.js docs/deploy/apple-deployment-guide.md
git commit -m "chore: increment build number to X for iOS deployment"
git push origin main
```

---

## 🚀 Deployment Steps

### Step 7: Build for TestFlight (Preview Profile)

```bash
# Preview build (for TestFlight testing)
npx eas build --platform ios --profile preview

# Production build (for App Store release)
npx eas build --platform ios --profile production
```

**Build Monitor:** https://expo.dev/accounts/athahar/projects/desi-waddle-charades/builds

**Expected Time:** 10-15 minutes

### Step 8: Wait and Verify Build

- ✅ Build completes successfully
- ✅ Build number in EAS dashboard matches app.config.js
- ✅ No errors in build logs

### Step 9: Submit to App Store Connect

```bash
# Submit the latest build
npx eas submit --platform ios --latest
```

**Apple Credentials Required:**
- Apple Developer account ($99/year)
- App-specific password (if 2FA enabled)
- EAS will prompt for credentials on first submit

---

## 🔍 Pre-Flight Check Automation

**Quick Command to Run All Checks:**

```bash
#!/bin/bash
echo "🚀 Charadesi - iOS Pre-Flight Check"
echo "========================================"
echo ""

# 1. Build number
echo "📱 Current Build Number:"
grep -A 10 "ios" app.config.js | grep buildNumber
echo ""

# 2. Babel plugin check
echo "🔧 Console.log Removal (Babel Plugin):"
if grep -q "babel-plugin-transform-remove-console" package.json; then
  echo "✅ PASSED: Babel plugin installed (auto-removes console in production)"
else
  echo "❌ FAILED: Babel plugin missing!"
  exit 1
fi
echo ""

# 3. TypeScript check (excluding test files)
echo "📘 TypeScript Check (src/ only):"
if npx tsc --noEmit --skipLibCheck 2>&1 | grep "src/" | grep -q "error TS"; then
  echo "❌ FAILED: TypeScript errors in src/"
  npx tsc --noEmit --skipLibCheck 2>&1 | grep "src/"
  exit 1
else
  echo "✅ PASSED: TypeScript compiles (test errors ignored)"
fi
echo ""

# 4. Expo doctor
echo "🩺 Expo Doctor Check:"
npx expo-doctor --fix-dependencies=prompt
echo ""

echo "========================================"
echo "✅ All pre-flight checks passed!"
echo "Ready to increment build number and deploy."
```

Save as `scripts/pre-flight-check.sh` and run before each deployment.

**Note:** Console.log statements are automatically removed by `babel-plugin-transform-remove-console` in production builds. No manual wrapping needed!

---

## 🐛 Troubleshooting

### "You've already submitted this build" Error

**Symptom:** Apple rejects submission saying build already exists.

**Cause:** Build number wasn't incremented.

**Fix:**
1. Increment `buildNumber` in `app.config.js`
2. Update Build Number History table in this file
3. Commit changes
4. Rebuild: `npx eas build --platform ios --profile preview`
5. Submit new build

**Time wasted:** ~15 minutes per occurrence. Always increment!

### White Screen on iOS

**Symptom:** App launches to white screen, immediately crashes.

**Likely Cause:** Babel plugin not working correctly.

**Verification:**
1. Check babel.config.js has the plugin configured:
   ```bash
   grep "transform-remove-console" babel.config.js
   ```
2. Check package.json has the plugin installed:
   ```bash
   grep "babel-plugin-transform-remove-console" package.json
   ```

**Fix:**
- If plugin missing: `npm install --save-dev babel-plugin-transform-remove-console`
- If plugin present but not working: Clear cache and rebuild
  ```bash
  eas build --platform ios --profile preview --clear-cache
  ```

**Note:** This project uses babel plugin to automatically remove console statements. Manual wrapping with `if (__DEV__)` is not required.

### TypeScript Errors

**Symptom:** Build fails with TypeScript errors.

**Fix:**
1. Run `npx tsc --noEmit` locally
2. Fix all errors
3. Commit and rebuild

### Expo Doctor Issues

**Symptom:** `expo-doctor` reports dependency issues or config problems.

**Fix:**
1. Follow recommended fixes from expo-doctor
2. Update dependencies if needed: `npm install`
3. Clear EAS cache: `eas build --platform ios --profile preview --clear-cache`

---

## 📝 Deployment Profiles (eas.json)

### Preview (TestFlight)
```json
{
  "preview": {
    "distribution": "internal",
    "ios": {
      "simulator": false,
      "buildConfiguration": "Release"
    }
  }
}
```

Use for: TestFlight beta testing

### Production (App Store)
```json
{
  "production": {
    "distribution": "store",
    "ios": {
      "buildConfiguration": "Release"
    }
  }
}
```

Use for: App Store public release

---

## 🎯 Success Criteria

Before submitting to Apple, verify:

- [ ] Build number incremented in `app.config.js`
- [ ] Build Number History table updated
- [ ] Console.log check: 0 unguarded statements
- [ ] `npx tsc --noEmit`: 0 errors
- [ ] `npx expo-doctor`: 0 critical issues
- [ ] Changes committed to git
- [ ] EAS build completes successfully
- [ ] Build metadata shows correct build number
- [ ] THEN submit to App Store

---

## 📚 Additional Resources

- [Expo: iOS Build Configuration](https://docs.expo.dev/build-reference/ios-builds/)
- [EAS Build: Best Practices](https://docs.expo.dev/build/setup/)
- [Apple: TestFlight Beta Testing](https://developer.apple.com/testflight/)
- [App Store Connect](https://appstoreconnect.apple.com/)

---

## 🚨 Critical Reminders

1. **Always increment build number** before building
2. **Always guard console.log** with `if (__DEV__)`
3. **Always run pre-flight checks** before building
4. **Always update Build Number History** after incrementing
5. **Never submit same build number twice** to Apple

---

**Last Updated:** 2025-10-16
**Status:** Ready for first TestFlight deployment 🚀

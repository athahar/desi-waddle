# Apple App Store Deployment Guidelines - Desi Charades

## 📱 App Information

- **App Name:** Desi Waddle (working title) / Desi Charades
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
| 1 | 0.1.0 | 2025-10-16 | Ready | Initial setup - not yet deployed |

**Next Build Number:** 2

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

### ✅ Step 2: Console.log Safety Check (CRITICAL!)

**Why:** Unguarded console statements crash iOS production builds!

```bash
# Must return 0 results (or only __DEV__ guarded console.error)
grep -r "console\." src/ --include="*.ts" --include="*.tsx" | grep -v "__DEV__" | grep -v "console.error"
```

**Expected:** No results (or only guarded console.error for legitimate error handling)

**If violations found:** Guard with `if (__DEV__)`:
```typescript
// ❌ WRONG
console.log('Debug info');

// ✅ CORRECT
if (__DEV__) {
  console.log('Debug info');
}
```

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
echo "🚀 Desi Charades - iOS Pre-Flight Check"
echo "========================================"
echo ""

# 1. Build number
echo "📱 Current Build Number:"
grep -A 10 "ios" app.config.js | grep buildNumber
echo ""

# 2. Console.log check
echo "🔍 Console.log Safety Check:"
CONSOLE_COUNT=$(grep -r "console\." src/ --include="*.ts" --include="*.tsx" | grep -v "__DEV__" | grep -v "console.error" | wc -l | tr -d ' ')
if [ "$CONSOLE_COUNT" = "0" ]; then
  echo "✅ PASSED: No unguarded console statements"
else
  echo "❌ FAILED: Found $CONSOLE_COUNT unguarded console statements"
  grep -r "console\." src/ --include="*.ts" --include="*.tsx" | grep -v "__DEV__" | grep -v "console.error"
  exit 1
fi
echo ""

# 3. TypeScript check
echo "📘 TypeScript Check:"
if npx tsc --noEmit 2>&1 | grep -q "Found 0 errors"; then
  echo "✅ PASSED: TypeScript compiles with 0 errors"
else
  echo "❌ FAILED: TypeScript errors found"
  npx tsc --noEmit
  exit 1
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

**Cause:** Unguarded `console.log()` statements in production build.

**Fix:**
1. Run console.log audit: `grep -r "console\." src/ --include="*.ts" --include="*.tsx" | grep -v "__DEV__"`
2. Guard all console statements with `if (__DEV__)`
3. Rebuild and resubmit

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

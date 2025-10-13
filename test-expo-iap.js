// Quick test of expo-iap API to understand the structure
const ExpoIap = require('expo-iap');

console.log('Available expo-iap methods:');
console.log(Object.keys(ExpoIap));

// Test if functions exist
console.log('\nChecking key functions:');
console.log('initConnection:', typeof ExpoIap.initConnection);
console.log('getItems:', typeof ExpoIap.getItems);
console.log('requestPurchase:', typeof ExpoIap.requestPurchase);
console.log('clearTransaction:', typeof ExpoIap.clearTransaction);
console.log('getAvailablePurchases:', typeof ExpoIap.getAvailablePurchases);
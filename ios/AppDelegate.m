package main

#import <UIKit/UIKit.h>
#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import <React/RCTLog.h>
#import <React/RCTAppDelegate.h>

@interface AppDelegate : RCTAppDelegate
@end

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
  [self initializeReactNative];
  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (void)initializeReactNative {
  RCTBridge *bridge = [[RCTBridge alloc] initWithBundleURL:[[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil]
                                            moduleProvider:nil
                                             launchOptions:nil];
  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge
                                                moduleName:@"YourAppName"
                                         initialProperties:nil];
  rootView.backgroundColor = [UIColor whiteColor];
  
  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
}

@end

// In your React Native configuration (e.g., in your package.json or other config file), ensure to set fabric: true
// "react-native": {
//   "fabric": true
// }
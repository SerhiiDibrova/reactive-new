package Documentation

# FlipperModule and ReactNativeFlipper Documentation

## FlipperModule

The `FlipperModule` class is designed to facilitate the integration of Flipper, a debugging tool for mobile applications, into React Native projects. It provides a set of functionalities that allow developers to interact with Flipper's features, enabling enhanced debugging and performance monitoring.

### Usage

To use the `FlipperModule`, follow these steps:

1. Import the FlipperModule in your React Native project.
2. Initialize the FlipperModule in your application’s entry point.
3. Use the provided methods to log messages, track performance, and inspect network requests.

## ReactNativeFlipper

The `ReactNativeFlipper` class serves as the main entry point for integrating Flipper with React Native applications. It manages the connection between the React Native app and the Flipper desktop application, allowing for real-time debugging and inspection.

### Usage

To integrate `ReactNativeFlipper` into your project:

1. Ensure that Flipper is installed on your development machine.
2. Add the necessary dependencies to your React Native project.
3. Initialize `ReactNativeFlipper` in your application’s main component.
4. Launch the Flipper desktop application to start debugging.

## Integration Instructions

1. Install Flipper on your development machine.
2. Add the Flipper dependencies to your `Podfile`:
   ```
   pod 'FlipperKit', '~> 0.54.0'
   pod 'FlipperKit/FlipperKitLayoutComponentKitSupport', '~> 0.54.0'
   pod 'FlipperKit/FlipperKitUserDefaultsPlugin', '~> 0.54.0'
   pod 'FlipperKit/FlipperKitNetworkPlugin', '~> 0.54.0'
   ```
3. Run `pod install` to install the dependencies.
4. In your `AppDelegate.m`, import and initialize Flipper:
   ```objc
   #import <FlipperKit/FlipperKit.h>
   #import <React/RCTBridge.h>
   #import <React/RCTBundleURLProvider.h>
   #import <React/RCTRootView.h>

   - (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
       FlipperClient *client = [FlipperClient sharedClient];
       [client addPlugin:[[FlipperKitNetworkPlugin alloc] init]];
       [client start];
       return YES;
   }
   ```
5. Start the Flipper desktop application and connect to your React Native app to begin debugging.

## Error Handling and Troubleshooting

- If you encounter issues with Flipper not connecting, ensure that your development machine and mobile device are on the same network.
- Check the Flipper logs for any error messages that may indicate what went wrong during the connection process.
- If the Flipper desktop application does not recognize your app, try restarting both the app and the Flipper application.
- Ensure that the versions of Flipper dependencies in your `Podfile` are compatible with your React Native version.

## Verification

To verify that Flipper is working correctly after setup:

1. Launch your React Native application.
2. Open the Flipper desktop application.
3. Check the Flipper interface for your app's connection.
4. Use the available plugins to inspect network requests, view logs, and monitor performance metrics.
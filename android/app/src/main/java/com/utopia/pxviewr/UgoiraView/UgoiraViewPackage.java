```javascript
// JavaScript/TypeScript Code
import React from 'react';
import { View, Text } from 'react-native';

const App = () => {
  return (
    <View>
      <Text>Hello, World!</Text>
    </View>
  );
};

export default App;
```

```gradle
// android/app/build.gradle
android {
    ...
    buildFeatures {
        fabric true
    }
    ...
}

dependencies {
    implementation 'com.facebook.react:react-native:0.75.0'
    ...
}
```

```xml
<!-- android/app/src/main/AndroidManifest.xml -->
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.yourapp">
    <application
        ...
        android:usesCleartextTraffic="true">
        ...
    </application>
</manifest>
```

```swift
// ios/YourApp/AppDelegate.swift
import UIKit
import React

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {
    var window: UIWindow?

    override func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        let rootView = RCTRootView(bridge: self.bridge, moduleName: "YourApp", initialProperties: nil)
        self.window = UIWindow(frame: UIScreen.main.bounds)
        self.window?.rootViewController = UIViewController()
        self.window?.rootViewController?.view = rootView
        self.window?.makeKeyAndVisible()
        return true
    }
}
```

```ruby
# ios/Podfile
platform :ios, '11.0'

target 'YourApp' do
  use_frameworks!
  pod 'React', :path => '../node_modules/react-native', :subspecs => [
    'Core',
    'CxxBridge', # Include this for Fabric
    'DevSupport', # Include this for Fabric
    'RCTImage',
    'RCTNetwork',
    'RCTText',
    'RCTWebSocket',
    'RCTAnimation',
    'RCTLinking',
    'RCTModal',
    'RCTView',
    'RCTScrollView',
    'RCTTextInput',
    'RCTWebView',
  ]
end
```

```json
// package.json
{
  "name": "YourApp",
  "version": "0.0.1",
  "private": true,
  "dependencies": {
    "react": "18.0.0",
    "react-native": "0.75.0"
  },
  "devDependencies": {
    "@babel/core": "^7.0.0",
    "@babel/runtime": "^7.0.0"
  },
  "scripts": {
    "start": "react-native start",
    "android": "react-native run-android",
    "ios": "react-native run-ios"
  }
}
```
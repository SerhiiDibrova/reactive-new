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
    implementation 'com.facebook.react:react-native-fabric:0.75.0'
}
```

```xml
<!-- android/app/src/main/AndroidManifest.xml -->
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.yourapp">

    <application
        ...
        android:usesCleartextTraffic="true">
        <meta-data
            android:name="react-native:Fabric"
            android:value="true" />
    </application>
</manifest>
```

```ruby
# ios/Podfile
platform :ios, '11.0'

target 'YourApp' do
  use_frameworks!
  pod 'React', :path => '../node_modules/react-native', :subspecs => [
    'Core',
    'CxxBridge', 
    'DevSupport', 
    'Fabric', 
    'RCTImage', 
    'RCTNetwork', 
    'RCTText', 
    'RCTWebSocket', 
    'RCTAnimation'
  ]
  pod 'Yoga', :path => '../node_modules/react-native/ReactCommon/yoga'
end
```

```swift
// ios/YourApp/AppDelegate.swift
import UIKit
import React

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {
    var window: UIWindow?

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        let jsCodeLocation: URL

        #if DEBUG
            jsCodeLocation = URL(string: "http://localhost:8081/index.bundle?platform=ios")!
        #else
            jsCodeLocation = Bundle.main.url(forResource: "main", withExtension: "jsbundle")!
        #endif

        let rootView = RCTRootView(bundleURL: jsCodeLocation, moduleName: "YourApp", initialProperties: nil, launchOptions: launchOptions)
        self.window = UIWindow(frame: UIScreen.main.bounds)
        self.window?.rootViewController = UIViewController()
        self.window?.rootViewController?.view = rootView
        self.window?.makeKeyAndVisible()

        return true
    }
}
```
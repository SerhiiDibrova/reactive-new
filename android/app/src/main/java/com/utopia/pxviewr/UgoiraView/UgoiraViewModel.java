package com.utopia.pxviewr.UgoiraView;

import android.graphics.Bitmap;

public class UgoiraViewModel {
    private String uri;
    private Integer delay;
    private Bitmap bitmap;

    public UgoiraViewModel(String uri, Integer delay, Bitmap bitmap) {
        this.uri = uri;
        this.delay = delay;
        this.bitmap = bitmap;
    }

    public String getUri() {
        return uri;
    }

    public void setUri(String uri) {
        this.uri = uri;
    }

    public Integer getDelay() {
        return delay;
    }

    public void setDelay(Integer delay) {
        this.delay = delay;
    }

    public Bitmap getBitmap() {
        return bitmap;
    }

    public void setBitmap(Bitmap bitmap) {
        this.bitmap = bitmap;
    }
}
```

```gradle
android {
    ...
    defaultConfig {
        ...
        buildConfigField "boolean", "IS_NEW_ARCHITECTURE_ENABLED", "BuildConfig.IS_NEW_ARCHITECTURE_ENABLED"
    }
    ...
    buildTypes {
        release {
            ...
            isMinifyEnabled = false
        }
    }
    ...
    project.ext.react = [
        enableNewArchitecture: BuildConfig.IS_NEW_ARCHITECTURE_ENABLED
    ]
    ...
    dependencies {
        implementation 'com.facebook.react:react-native:+'
        implementation 'com.facebook.react:react-native-fabric:+'
    }
}
```

```ruby
platform :ios, '10.0'
require_relative '../node_modules/@react-native-community/cli-platform-ios/native_modules'

target 'YourApp' do
  config = use_native_modules!

  use_frameworks! :linkage => :static

  pod 'React-Core', :path => '../node_modules/react-native/'
  pod 'React-RCTImage', :path => '../node_modules/react-native/Libraries/Image'
  pod 'React-RCTText', :path => '../node_modules/react-native/Libraries/Text'
  pod 'React-RCTView', :path => '../node_modules/react-native/Libraries/Components'
  pod 'React-RCTAnimation', :path => '../node_modules/react-native/Libraries/NativeAnimation'
  
  pod 'React-Core/DevSupport', :path => '../node_modules/react-native/'
  pod 'React-Core/Modules', :path => '../node_modules/react-native/'
  
  pod 'React-Fabric', :path => '../node_modules/react-native/React/React-Fabric.podspec'

  use_native_modules!
end
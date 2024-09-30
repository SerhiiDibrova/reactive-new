package com.utopia.pxviewr;

import android.os.Bundle;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.facebook.react.fabric.Fabric;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactInstanceManager;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
import org.devio.rn.splashscreen.SplashScreen;

public class MainActivity extends ReactActivity {

    @Override
    protected String getMainComponentName() {
        return "PxViewR";
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(null);
        SplashScreen.show(this);
    }

    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new ReactActivityDelegate(this, getMainComponentName()) {
            @Override
            protected ReactRootView createRootView() {
                return new RNGestureHandlerEnabledRootView(MainActivity.this);
            }
        };
    }

    @Override
    protected ReactNativeHost getReactNativeHost() {
        return new ReactNativeHost(this) {
            @Override
            public boolean getUseDeveloperSupport() {
                return BuildConfig.DEBUG;
            }

            @Override
            protected ReactInstanceManager getReactInstanceManager() {
                return ReactInstanceManager.builder()
                        .setApplication(getApplication())
                        .setBundleAssetName("index.android.bundle")
                        .setJSMainModulePath("index")
                        .addPackage(new MainReactPackage())
                        .setUseFabric(true)
                        .build();
            }
        };
    }
}
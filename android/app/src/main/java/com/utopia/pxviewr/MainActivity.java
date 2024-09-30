package com.utopia.pxviewr;

import android.os.Bundle;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.facebook.react.fabric.Fabric;
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
        Fabric.with(this, new ReactInstanceManager(this));
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
}
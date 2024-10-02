package com.yourapp;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactRootView;

public class SplashScreen extends Activity {
    private static final int SPLASH_DISPLAY_LENGTH = 2000;
    private ReactRootView mReactRootView;
    private ReactInstanceManager mReactInstanceManager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        mReactRootView = new ReactRootView(this);
        mReactInstanceManager = ((YourApp) getApplication()).getReactNativeHost().getReactInstanceManager();
        mReactRootView.startReactApplication(mReactInstanceManager, "YourAppName", null);
        setContentView(mReactRootView);
        showSplashScreen();
    }

    public void showSplashScreen() {
        mReactRootView.setVisibility(View.VISIBLE);
        new android.os.Handler().postDelayed(this::hideSplashScreen, SPLASH_DISPLAY_LENGTH);
    }

    private void hideSplashScreen() {
        mReactRootView.setVisibility(View.GONE);
        finish();
    }

    @Override
    protected void onPause() {
        super.onPause();
        if (!isFinishing()) {
            mReactRootView.setVisibility(View.GONE);
        }
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (!isFinishing()) {
            mReactRootView.setVisibility(View.VISIBLE);
        }
    }
}
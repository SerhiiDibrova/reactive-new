package com.yourapp;

import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
import com.yourapp.MainActivity;

public class CustomReactActivityDelegate extends ReactActivityDelegate {
    public CustomReactActivityDelegate(MainActivity activity, String mainComponentName) {
        super(activity, mainComponentName);
    }

    @Override
    protected ReactRootView createRootView() {
        return new RNGestureHandlerEnabledRootView(getContext());
    }
}
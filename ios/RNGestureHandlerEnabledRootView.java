package com.example;

import android.content.Context;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerRootView;

public class RNGestureHandlerEnabledRootView extends RNGestureHandlerRootView {

    public RNGestureHandlerEnabledRootView(Context context) {
        super(context);
    }

    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new ReactActivityDelegate(this, getMainComponentName()) {
            @Override
            protected ReactRootView createRootView() {
                return new RNGestureHandlerRootView(RNGestureHandlerEnabledRootView.this);
            }
        };
    }

    @Override
    protected String getMainComponentName() {
        return "YourComponentName"; // Replace with the specific component name
    }
}
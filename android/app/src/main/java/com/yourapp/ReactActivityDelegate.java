package com.yourapp;

import com.facebook.react.ReactActivityDelegate;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
import android.app.Activity;

public class ReactActivityDelegate extends ReactActivityDelegate {
    public ReactActivityDelegate(Activity activity, String mainComponentName) {
        super(activity, mainComponentName);
    }

    @Override
    protected RNGestureHandlerEnabledRootView createRootView() {
        return new RNGestureHandlerEnabledRootView(getActivity());
    }
}
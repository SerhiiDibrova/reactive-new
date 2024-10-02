package com.yourapp;

import androidx.lifecycle.ViewModelProvider;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class MainActivityDelegate extends ReactActivityDelegate {
    private final MainActivity activity;
    private final MyViewModel viewModel;

    public MainActivityDelegate(MainActivity activity, String mainComponentName) {
        super(activity, mainComponentName);
        this.activity = activity;
        this.viewModel = new ViewModelProvider(activity).get(MyViewModel.class);
    }

    @Override
    protected ReactRootView createRootView() {
        return new RNGestureHandlerEnabledRootView(activity);
    }

    @Override
    protected String getMainComponentName() {
        return "YourActualAppName";
    }
}
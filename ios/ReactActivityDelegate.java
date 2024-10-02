package com.example.react;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;

public class ReactActivityDelegate extends ReactActivityDelegate {

    public ReactActivityDelegate(ReactActivity activity, String mainComponentName) {
        super(activity, mainComponentName);
    }

    @Override
    protected ReactRootView createRootView() {
        return new ReactRootView(getActivity());
    }
}
package com.yourapp;

import android.util.Log;

public class UgoiraViewManager extends SimpleViewManager<UgoiraView> {
    private static final String TAG = "UgoiraViewManager";

    @Override
    public String getName() {
        return "UgoiraView";
    }

    @Override
    protected UgoiraView createViewInstance(ThemedReactContext reactContext) {
        return new UgoiraView(reactContext);
    }

    public void setPaused(UgoiraView view, boolean paused) {
        try {
            if (paused) {
                view.pauseAnimation();
            } else {
                view.resumeAnimation();
            }
        } catch (Exception e) {
            Log.e(TAG, "Error changing animation state: " + e.getMessage());
        }
    }
}
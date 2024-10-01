package com.myfabricapp;

import android.graphics.drawable.AnimationDrawable;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

public class UgoiraViewManager extends SimpleViewManager<UgoiraView> {
    public static final String REACT_CLASS = "UgoiraView";
    private AnimationDrawable animationDrawable;

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected UgoiraView createViewInstance(ThemedReactContext reactContext) {
        UgoiraView ugoiraView = new UgoiraView(reactContext);
        animationDrawable = new AnimationDrawable();
        // Initialize animationDrawable with frames here
        return ugoiraView;
    }

    public void pauseAnimation() {
        if (animationDrawable.isRunning()) {
            this.post(new Runnable() {
                @Override
                public void run() {
                    animationDrawable.stop();
                }
            });
        }
    }

    public void resumeAnimation() {
        if (!animationDrawable.isRunning()) {
            this.post(new Runnable() {
                @Override
                public void run() {
                    animationDrawable.start();
                }
            });
        }
    }
}
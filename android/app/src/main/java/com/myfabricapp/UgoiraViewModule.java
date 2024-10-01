package com.myfabricapp;

import android.graphics.drawable.AnimationDrawable;
import android.os.Handler;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactModule;

@ReactModule(name = "UgoiraViewModule")
public class UgoiraViewModule extends ReactContextBaseJavaModule {
    private AnimationDrawable animationDrawable;
    private final Handler handler = new Handler();
    private boolean isPaused = false;

    public UgoiraViewModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "UgoiraViewModule";
    }

    @ReactMethod
    public void pauseAnimation(Promise promise) {
        if (animationDrawable == null) {
            promise.reject("ERROR", "Animation is not initialized.");
            return;
        }
        if (!isPaused) {
            isPaused = true;
            handler.post(new Runnable() {
                @Override
                public void run() {
                    animationDrawable.stop();
                    promise.resolve(null);
                }
            });
        } else {
            promise.reject("ERROR", "Animation is already paused.");
        }
    }

    @ReactMethod
    public void resumeAnimation(Promise promise) {
        if (animationDrawable == null) {
            promise.reject("ERROR", "Animation is not initialized.");
            return;
        }
        if (isPaused) {
            isPaused = false;
            handler.post(new Runnable() {
                @Override
                public void run() {
                    animationDrawable.start();
                    promise.resolve(null);
                }
            });
        } else {
            promise.reject("ERROR", "Animation is already running.");
        }
    }

    public void setAnimationDrawable(AnimationDrawable animationDrawable) {
        this.animationDrawable = animationDrawable;
    }
}
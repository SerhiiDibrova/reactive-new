package com.yourapp;

import android.content.Context;
import android.graphics.drawable.AnimationDrawable;
import android.util.AttributeSet;
import androidx.annotation.Nullable;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.views.image.ImageView;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.annotations.ReactProp;

public class UgoiraView extends ImageView {
    private AnimationDrawable animationDrawable;
    private boolean isRunning;

    public UgoiraView(Context context) {
        super(context);
        init();
    }

    public UgoiraView(Context context, @Nullable AttributeSet attrs) {
        super(context, attrs);
        init();
    }

    public UgoiraView(Context context, @Nullable AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        init();
    }

    private void init() {
        animationDrawable = new AnimationDrawable();
        isRunning = false;
    }

    public void resumeAnimation() {
        synchronized (this) {
            if (!isRunning) {
                isRunning = true;
                this.post(new Runnable() {
                    @Override
                    public void run() {
                        animationDrawable.start();
                    }
                });
            }
        }
    }

    public void setAnimationFrames(int[] frames) {
        animationDrawable = new AnimationDrawable();
        for (int frame : frames) {
            animationDrawable.addFrame(getResources().getDrawable(frame), 100);
        }
        animationDrawable.setOneShot(false);
    }

    public boolean isAnimationRunning() {
        synchronized (this) {
            return isRunning;
        }
    }

    public void stopAnimation() {
        synchronized (this) {
            if (isRunning) {
                isRunning = false;
                animationDrawable.stop();
            }
        }
    }
}

class UgoiraViewManager extends SimpleViewManager<UgoiraView> {
    public static final String REACT_CLASS = "UgoiraView";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected UgoiraView createViewInstance(ThemedReactContext reactContext) {
        return new UgoiraView(reactContext);
    }

    @ReactProp(name = "animationFrames")
    public void setAnimationFrames(UgoiraView view, int[] frames) {
        view.setAnimationFrames(frames);
    }
}
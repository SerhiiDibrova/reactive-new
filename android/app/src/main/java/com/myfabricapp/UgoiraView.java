package com.myfabricapp;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.drawable.BitmapDrawable;
import android.graphics.drawable.Drawable;
import android.util.AttributeSet;
import android.view.View;
import android.widget.ImageView;

public class UgoiraView extends ImageView {
    private boolean paused;
    private Bitmap[] frames;
    private int currentFrame;
    private long frameDuration;
    private long lastFrameChangeTime;

    public UgoiraView(Context context) {
        super(context);
        init();
    }

    public UgoiraView(Context context, AttributeSet attrs) {
        super(context, attrs);
        init();
    }

    public UgoiraView(Context context, AttributeSet attrs, int defStyle) {
        super(context, attrs, defStyle);
        init();
    }

    private void init() {
        paused = false;
        currentFrame = 0;
        frameDuration = 100; // Default frame duration
    }

    public void setImages(Bitmap[] frames, long frameDuration) {
        this.frames = frames;
        this.frameDuration = frameDuration;
        currentFrame = 0;
        lastFrameChangeTime = System.currentTimeMillis();
        if (!paused) {
            startAnimation();
        }
    }

    private void startAnimation() {
        post(animationRunnable);
    }

    private final Runnable animationRunnable = new Runnable() {
        @Override
        public void run() {
            if (!paused && frames != null && frames.length > 0) {
                long currentTime = System.currentTimeMillis();
                if (currentTime - lastFrameChangeTime >= frameDuration) {
                    currentFrame = (currentFrame + 1) % frames.length;
                    setImageDrawable(new BitmapDrawable(getResources(), frames[currentFrame]));
                    lastFrameChangeTime = currentTime;
                }
                postDelayed(this, frameDuration);
            }
        }
    };

    public void pauseAnimation() {
        paused = true;
    }

    public void resumeAnimation() {
        if (paused) {
            paused = false;
            startAnimation();
        }
    }

    public void setPaused(boolean paused) {
        this.paused = paused;
        if (paused) {
            pauseAnimation();
        } else {
            resumeAnimation();
        }
    }
}
package com.myfabricapp;

import android.content.Context;
import android.graphics.Canvas;
import android.util.AttributeSet;
import android.view.View;

public class UgoiraView extends View {
    private boolean isPaused;
    private long lastFrameTime;
    private int frameIndex;
    private int totalFrames;
    private Runnable animationRunnable;

    public UgoiraView(Context context) {
        super(context);
        init();
    }

    public UgoiraView(Context context, AttributeSet attrs) {
        super(context, attrs);
        init();
    }

    public UgoiraView(Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        init();
    }

    private void init() {
        isPaused = false;
        frameIndex = 0;
        totalFrames = 100; // Example total frames
        animationRunnable = new Runnable() {
            @Override
            public void run() {
                if (!isPaused) {
                    long currentTime = System.currentTimeMillis();
                    if (currentTime - lastFrameTime >= 100) { // Example frame duration
                        frameIndex = (frameIndex + 1) % totalFrames;
                        lastFrameTime = currentTime;
                        invalidate();
                    }
                    post(animationRunnable);
                }
            }
        };
        startAnimation();
    }

    public void pauseAnimation() {
        isPaused = true;
    }

    public void resumeAnimation() {
        if (isPaused) {
            isPaused = false;
            lastFrameTime = System.currentTimeMillis();
            post(animationRunnable);
        }
    }

    @Override
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);
        // Draw the current frame based on frameIndex
    }

    private void startAnimation() {
        isPaused = false;
        lastFrameTime = System.currentTimeMillis();
        post(animationRunnable);
    }
}
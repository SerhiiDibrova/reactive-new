package com.myfabricapp;

import android.content.Context;
import android.graphics.Canvas;
import android.util.AttributeSet;
import android.view.View;

public class UgoiraView extends View {
    private boolean isPaused;
    private long lastFrameTime;
    private int currentFrame;

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
        currentFrame = 0;
        lastFrameTime = System.currentTimeMillis();
        postInvalidate();
    }

    @Override
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);
        if (!isPaused) {
            long currentTime = System.currentTimeMillis();
            if (currentTime - lastFrameTime >= 100) {
                currentFrame++;
                lastFrameTime = currentTime;
                // Draw the current frame here
                // canvas.drawBitmap(frames[currentFrame], 0, 0, null);
                if (currentFrame >= getTotalFrames()) {
                    currentFrame = 0;
                }
            }
        }
        if (!isPaused) {
            postInvalidateDelayed(16); // Approx. 60 FPS
        }
    }

    public void pauseAnimation() {
        isPaused = true;
    }

    public void resumeAnimation() {
        if (isPaused) {
            isPaused = false;
            lastFrameTime = System.currentTimeMillis();
            postInvalidate();
        }
    }

    private int getTotalFrames() {
        return 10; // Example value
    }
}
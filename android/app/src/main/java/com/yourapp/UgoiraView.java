package com.yourapp;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.drawable.Drawable;
import android.util.AttributeSet;
import android.view.View;

public class UgoiraView extends View {
    private boolean paused;
    private Drawable[] frames;
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

    public UgoiraView(Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        init();
    }

    private void init() {
        paused = false;
        currentFrame = 0;
        frameDuration = 100; 
        lastFrameChangeTime = System.currentTimeMillis();
    }

    public void setFrames(Drawable[] frames) {
        this.frames = frames;
        currentFrame = 0;
        invalidate();
    }

    public void setFrameDuration(long duration) {
        this.frameDuration = duration;
    }

    public void setPaused(boolean paused) {
        this.paused = paused;
        invalidate();
    }

    public void pauseAnimation() {
        setPaused(true);
    }

    public void resumeAnimation() {
        setPaused(false);
    }

    @Override
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);
        if (frames != null && frames.length > 0) {
            if (!paused) {
                long currentTime = System.currentTimeMillis();
                if (currentTime - lastFrameChangeTime >= frameDuration) {
                    currentFrame = (currentFrame + 1) % frames.length;
                    lastFrameChangeTime = currentTime;
                }
            }
            frames[currentFrame].setBounds(0, 0, getWidth(), getHeight());
            frames[currentFrame].draw(canvas);
            invalidate();
        }
    }
}
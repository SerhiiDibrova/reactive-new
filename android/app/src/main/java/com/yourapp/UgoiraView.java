package com.yourapp;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.drawable.Drawable;
import android.util.AttributeSet;
import android.view.View;
import android.os.Handler;

public class UgoiraView extends View {
    private boolean isPaused;
    private Drawable animationDrawable;
    private Handler handler;
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
        handler = new Handler();
        animationRunnable = new Runnable() {
            @Override
            public void run() {
                if (!isPaused && animationDrawable != null) {
                    invalidate();
                    handler.postDelayed(this, 100);
                }
            }
        };
        startAnimation();
    }

    @Override
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);
        if (animationDrawable != null) {
            animationDrawable.draw(canvas);
        }
    }

    public void setPaused(boolean paused) {
        if (paused) {
            pauseAnimation();
        } else {
            resumeAnimation();
        }
    }

    private void pauseAnimation() {
        isPaused = true;
        handler.removeCallbacks(animationRunnable);
    }

    private void resumeAnimation() {
        isPaused = false;
        handler.post(animationRunnable);
    }

    public void setAnimationDrawable(Drawable drawable) {
        this.animationDrawable = drawable;
        invalidate();
    }

    private void startAnimation() {
        handler.post(animationRunnable);
    }

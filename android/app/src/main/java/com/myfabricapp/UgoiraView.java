package com.myfabricapp;

import android.content.Context;
import android.graphics.drawable.AnimationDrawable;
import android.util.AttributeSet;
import android.view.View;
import android.widget.ImageView;

public class UgoiraView extends ImageView {
    private final AnimationDrawable animationDrawable;

    public UgoiraView(Context context, AttributeSet attrs) {
        super(context, attrs);
        animationDrawable = new AnimationDrawable();
        initializeAnimationDrawable();
    }

    private void initializeAnimationDrawable() {
        animationDrawable.addFrame(getResources().getDrawable(R.drawable.frame1), 100);
        animationDrawable.addFrame(getResources().getDrawable(R.drawable.frame2), 100);
        animationDrawable.addFrame(getResources().getDrawable(R.drawable.frame3), 100);
        setBackground(animationDrawable);
    }

    public synchronized void pauseAnimation() {
        if (animationDrawable.isRunning()) {
            animationDrawable.stop();
        }
    }

    public synchronized void resumeAnimation() {
        if (!animationDrawable.isRunning()) {
            animationDrawable.start();
        }
    }

    public void pauseAnimationFromJS() {
        pauseAnimation();
    }

    public void resumeAnimationFromJS() {
        resumeAnimation();
    }
}
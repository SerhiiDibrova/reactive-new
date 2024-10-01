package com.myfabricapp.ugoiraview;

import android.content.Context;
import android.graphics.drawable.AnimationDrawable;
import android.util.AttributeSet;
import android.view.View;
import android.widget.FrameLayout;

public class UgoiraView extends FrameLayout {
    private AnimationDrawable animationDrawable;

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
        if (getBackground() instanceof AnimationDrawable) {
            animationDrawable = (AnimationDrawable) getBackground();
        }
    }

    public void resumeAnimation() {
        if (animationDrawable != null && !animationDrawable.isRunning()) {
            post(new Runnable() {
                @Override
                public void run() {
                    animationDrawable.start();
                }
            });
        }
    }
}
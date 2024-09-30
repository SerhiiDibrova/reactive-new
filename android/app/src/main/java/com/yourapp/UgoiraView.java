package com.yourapp;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.view.View;

public class UgoiraView extends View {
    private boolean isPaused;
    private Paint paint;

    public UgoiraView(Context context) {
        super(context);
        isPaused = false;
        paint = new Paint();
    }

    public void pauseAnimation() {
        isPaused = true;
        invalidate();
    }

    public void resumeAnimation() {
        isPaused = false;
        invalidate();
    }

    @Override
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);
        if (!isPaused) {
            // Drawing logic for animated content
            // Example: draw a simple rectangle
            paint.setColor(0xFF0000FF); // Blue color
            canvas.drawRect(0, 0, getWidth(), getHeight(), paint);
        }
    }

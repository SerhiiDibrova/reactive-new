package com.myfabricapp

import android.content.Context
import android.util.AttributeSet
import android.view.View
import android.animation.ValueAnimator

class UgoiraView @JvmOverloads constructor(
    context: Context, attrs: AttributeSet? = null
) : View(context, attrs) {
    
    private var paused: Boolean = false
    private var animator: ValueAnimator? = null

    init {
        animator = ValueAnimator.ofFloat(0f, 1f).apply {
            duration = 1000
            addUpdateListener {
                // Update animation frame
            }
        }
    }

    fun pauseAnimation() {
        if (!paused) {
            animator?.pause()
            paused = true
        }
    }

    fun resumeAnimation() {
        if (paused) {
            animator?.start()
            paused = false
        }
    }

    fun setPaused(paused: Boolean) {
        if (paused) {
            pauseAnimation()
        } else {
            resumeAnimation()
        }
    }
}
package com.myfabricapp

import android.content.Context
import android.util.AttributeSet
import android.view.View
import android.animation.ValueAnimator

class UgoiraView @JvmOverloads constructor(
    context: Context, attrs: AttributeSet? = null
) : View(context, attrs) {

    private var isPaused: Boolean = false
    private var animator: ValueAnimator? = null

    init {
        animator = ValueAnimator.ofFloat(0f, 1f)
        animator?.duration = 1000
        animator?.repeatCount = ValueAnimator.INFINITE
        animator?.addUpdateListener {
            // Update animation frame
        }
        animator?.start()
    }

    fun pauseAnimation() {
        if (!isPaused) {
            isPaused = true
            animator?.pause()
        }
    }

    fun resumeAnimation() {
        if (isPaused) {
            isPaused = false
            animator?.resume()
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
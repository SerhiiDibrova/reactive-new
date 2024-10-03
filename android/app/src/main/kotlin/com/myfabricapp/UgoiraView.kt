package com.myfabricapp

import android.content.Context
import android.util.AttributeSet
import android.view.View

class UgoiraView @JvmOverloads constructor(
    context: Context, attrs: AttributeSet? = null
) : View(context, attrs) {

    private var isPaused: Boolean = false
    private var isAnimating: Boolean = false

    fun pauseAnimation() {
        setPaused(true)
    }

    fun resumeAnimation() {
        setPaused(false)
    }

    private fun setPaused(paused: Boolean) {
        if (isPaused != paused) {
            isPaused = paused
            if (isPaused) {
                stopAnimation()
            } else {
                startAnimation()
            }
        }
    }

    private fun startAnimation() {
        if (!isAnimating && !isPaused) {
            isAnimating = true
            // Start animation logic
        }
    }

    private fun stopAnimation() {
        if (isAnimating) {
            isAnimating = false
            // Stop animation logic
        }
    }
}
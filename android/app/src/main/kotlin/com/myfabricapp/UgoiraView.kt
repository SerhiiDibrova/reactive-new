package com.myfabricapp

import android.content.Context
import android.util.AttributeSet
import android.view.View
import android.animation.ValueAnimator
import android.util.Log

class UgoiraView @JvmOverloads constructor(
    context: Context,
    attrs: AttributeSet? = null
) : View(context, attrs) {

    private var isPaused: Boolean = false
    private var animator: ValueAnimator? = null

    init {
        setupAnimator()
    }

    private fun setupAnimator() {
        animator = ValueAnimator.ofFloat(0f, 1f).apply {
            duration = 1000
            repeatMode = ValueAnimator.RESTART
            repeatCount = ValueAnimator.INFINITE
            addUpdateListener { valueAnimator ->
                // Update animation frame based on valueAnimator.animatedValue
            }
        }
    }

    fun pauseAnimation() {
        try {
            if (!isPaused && animator?.isRunning == true) {
                animator?.pause()
                isPaused = true
            }
        } catch (e: Exception) {
            Log.e("UgoiraView", "Error pausing animation: ${e.message}")
        }
    }

    fun resumeAnimation() {
        try {
            if (isPaused && animator?.isPaused == true) {
                animator?.resume()
                isPaused = false
            }
        } catch (e: Exception) {
            Log.e("UgoiraView", "Error resuming animation: ${e.message}")
        }
    }

    fun startAnimation() {
        try {
            if (animator?.isRunning == false) {
                animator?.start()
            }
        } catch (e: Exception) {
            Log.e("UgoiraView", "Error starting animation: ${e.message}")
        }
    }

    fun stopAnimation() {
        try {
            if (animator?.isRunning == true) {
                animator?.cancel()
                isPaused = false
            }
        } catch (e: Exception) {
            Log.e("UgoiraView", "Error stopping animation: ${e.message}")
        }
    }
}
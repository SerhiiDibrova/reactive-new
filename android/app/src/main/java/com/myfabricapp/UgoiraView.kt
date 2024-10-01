package com.myfabricapp

import android.content.Context
import android.graphics.Canvas
import android.graphics.Paint
import android.util.AttributeSet
import android.view.SurfaceHolder
import android.view.SurfaceView
import kotlin.concurrent.thread

class UgoiraView(context: Context, attrs: AttributeSet) : SurfaceView(context, attrs) {
    private var isPaused: Boolean = false
    private val paint: Paint = Paint()
    private val surfaceHolder: SurfaceHolder = holder
    private var animationThread: Thread? = null

    init {
        setWillNotDraw(false)
    }

    fun setPaused(paused: Boolean) {
        isPaused = paused
    }

    fun pauseAnimation() {
        isPaused = true
        animationThread?.interrupt()
        animationThread = null
    }

    fun resumeAnimation() {
        if (animationThread == null || !animationThread!!.isAlive) {
            isPaused = false
            startAnimation()
        }
    }

    private fun startAnimation() {
        animationThread = thread(start = true) {
            while (!isPaused) {
                try {
                    drawFrame()
                    Thread.sleep(16) // Approx 60 FPS
                } catch (e: InterruptedException) {
                    Thread.currentThread().interrupt()
                } catch (e: Exception) {
                    // Handle specific exceptions
                }
            }
        }
    }

    private fun drawFrame() {
        val canvas: Canvas? = surfaceHolder.lockCanvas()
        if (canvas != null) {
            try {
                canvas.drawColor(0, android.graphics.PorterDuff.Mode.CLEAR)
                // Draw Ugoira images here
            } finally {
                surfaceHolder.unlockCanvasAndPost(canvas)
            }
        }
    }

    override fun onDraw(canvas: Canvas) {
        super.onDraw(canvas)
        if (!isPaused) {
            drawFrame()
        }
    }
}
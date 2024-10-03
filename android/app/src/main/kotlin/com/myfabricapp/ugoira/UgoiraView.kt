package com.myfabricapp.ugoira

import android.content.Context
import android.graphics.Bitmap
import android.graphics.Canvas
import android.util.AttributeSet
import android.view.View

class UgoiraView @JvmOverloads constructor(
    context: Context,
    attrs: AttributeSet? = null,
    defStyleAttr: Int = 0
) : View(context, attrs, defStyleAttr) {

    private var images: List<Bitmap> = emptyList()
    private var viewWidth: Int = 0
    private var viewHeight: Int = 0
    private var resizeMode: ResizeMode = ResizeMode.FIT
    private var paused: Boolean = false
    private var currentFrame: Int = 0
    private var frameDelay: Long = 100

    enum class ResizeMode {
        FIT, FILL, CENTER
    }

    fun createViewInstance(): UgoiraView {
        return this
    }

    fun setImages(images: List<Bitmap>?) {
        if (images.isNullOrEmpty()) {
            throw IllegalArgumentException("Images list cannot be null or empty")
        }
        this.images = images
        invalidate()
    }

    fun setWidth(width: Int) {
        if (width > 0) {
            this.viewWidth = width
            requestLayout()
        } else {
            throw IllegalArgumentException("Width must be greater than zero")
        }
    }

    fun setHeight(height: Int) {
        if (height > 0) {
            this.viewHeight = height
            requestLayout()
        } else {
            throw IllegalArgumentException("Height must be greater than zero")
        }
    }

    fun setResizeMode(mode: ResizeMode?) {
        if (mode == null || mode !in ResizeMode.values()) {
            throw IllegalArgumentException("Invalid resize mode")
        }
        this.resizeMode = mode
    }

    fun setPaused(paused: Boolean) {
        this.paused = paused
        if (!paused) {
            postInvalidateOnAnimation()
        }
    }

    fun startAnimation() {
        paused = false
        postInvalidateOnAnimation()
    }

    fun stopAnimation() {
        paused = true
    }

    fun setFrameDelay(delay: Long) {
        if (delay > 0 && delay <= 1000) {
            this.frameDelay = delay
        } else {
            throw IllegalArgumentException("Frame delay must be greater than zero and reasonable")
        }
    }

    override fun onDraw(canvas: Canvas) {
        super.onDraw(canvas)
        if (images.isNotEmpty() && !paused) {
            val bitmap = images[currentFrame]
            val left = 0
            val top = 0
            val right = viewWidth
            val bottom = viewHeight
            canvas.drawBitmap(bitmap, null, android.graphics.Rect(left, top, right, bottom), null)
            currentFrame = (currentFrame + 1) % images.size
            postInvalidateOnAnimation(System.currentTimeMillis() + frameDelay)
        }
    }
}
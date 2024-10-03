package com.myfabricapp

import android.content.Context
import android.graphics.Bitmap
import android.graphics.BitmapFactory
import android.util.AttributeSet
import android.view.View
import com.facebook.react.bridge.ReadableArray
import java.util.*

class UgoiraView @JvmOverloads constructor(
    context: Context,
    attrs: AttributeSet? = null
) : View(context, attrs) {

    private var images: List<Bitmap> = ArrayList()
    private var width: Int = 0
    private var height: Int = 0
    private var resizeMode: String = "contain"
    private var isAnimating: Boolean = false
    private var currentFrame: Int = 0
    private var animationTimer: Timer? = null

    fun setImages(images: ReadableArray) {
        this.images = List(images.size()) { index ->
            BitmapFactory.decodeFile(images.getString(index)) ?: Bitmap.createBitmap(1, 1, Bitmap.Config.ARGB_8888)
        }
        if (isAnimating) {
            startAnimation()
        }
    }

    fun setWidth(width: Int) {
        this.width = width
        requestLayout()
    }

    fun setHeight(height: Int) {
        this.height = height
        requestLayout()
    }

    fun setImageScaleType(resizeMode: String) {
        this.resizeMode = resizeMode
        requestLayout()
    }

    fun pauseAnimation() {
        isAnimating = false
        animationTimer?.cancel()
    }

    fun resumeAnimation() {
        isAnimating = true
        startAnimation()
    }

    private fun startAnimation() {
        if (images.isNotEmpty()) {
            animationTimer = Timer()
            animationTimer?.scheduleAtFixedRate(object : TimerTask() {
                override fun run() {
                    if (isAnimating) {
                        currentFrame = (currentFrame + 1) % images.size
                        postInvalidate()
                    }
                }
            }, 0, 100) // Adjust the delay for frame rate
        }
    }

    override fun onDraw(canvas: android.graphics.Canvas) {
        super.onDraw(canvas)
        if (isAnimating && images.isNotEmpty()) {
            val bitmap = images[currentFrame]
            val scaledBitmap = Bitmap.createScaledBitmap(bitmap, width, height, true)
            canvas.drawBitmap(scaledBitmap, 0f, 0f, null)
        }
    }
}
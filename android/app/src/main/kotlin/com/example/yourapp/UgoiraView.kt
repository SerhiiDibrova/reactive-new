package com.example.yourapp

import android.content.Context
import android.graphics.Bitmap
import android.graphics.BitmapFactory
import android.graphics.Canvas
import android.util.AttributeSet
import android.view.View
import com.facebook.react.bridge.ReadableArray
import java.util.Timer
import java.util.TimerTask

class UgoiraView(context: Context, attrs: AttributeSet? = null) : View(context, attrs) {
    private var images: List<Bitmap> = emptyList()
    private var currentIndex: Int = 0
    private var timer: Timer? = null
    private var isAnimating: Boolean = false
    var scaleType: ScaleType = ScaleType.CENTER_CROP

    enum class ScaleType {
        CENTER_CROP, FIT_CENTER
    }

    fun setImages(imageArray: ReadableArray) {
        images = List(imageArray.size()) { index ->
            val imagePath = imageArray.getString(index)
            try {
                BitmapFactory.decodeFile(imagePath) ?: Bitmap.createBitmap(1, 1, Bitmap.Config.ARGB_8888)
            } catch (e: Exception) {
                Bitmap.createBitmap(1, 1, Bitmap.Config.ARGB_8888)
            }
        }
        currentIndex = 0
        invalidate()
    }

    fun setScaleType(newScaleType: ScaleType) {
        scaleType = newScaleType
        invalidate()
    }

    fun pauseAnimation() {
        isAnimating = false
        timer?.cancel()
    }

    fun resumeAnimation() {
        if (!isAnimating && images.isNotEmpty()) {
            isAnimating = true
            startAnimation()
        }
    }

    private fun startAnimation() {
        timer = Timer()
        timer?.scheduleAtFixedRate(object : TimerTask() {
            override fun run() {
                if (isAnimating && images.isNotEmpty()) {
                    currentIndex = (currentIndex + 1) % images.size
                    postInvalidate()
                }
            }
        }, 0, 100)
    }

    override fun onDraw(canvas: Canvas) {
        super.onDraw(canvas)
        if (images.isNotEmpty()) {
            val bitmap = images[currentIndex]
            val scaledBitmap = Bitmap.createScaledBitmap(bitmap, measuredWidth, measuredHeight, true)
            when (scaleType) {
                ScaleType.CENTER_CROP -> {
                    val scale = Math.max(measuredWidth.toFloat() / scaledBitmap.width, measuredHeight.toFloat() / scaledBitmap.height)
                    val scaledWidth = (scaledBitmap.width * scale).toInt()
                    val scaledHeight = (scaledBitmap.height * scale).toInt()
                    val left = (measuredWidth - scaledWidth) / 2
                    val top = (measuredHeight - scaledHeight) / 2
                    canvas.drawBitmap(Bitmap.createScaledBitmap(scaledBitmap, scaledWidth, scaledHeight, true), left.toFloat(), top.toFloat(), null)
                }
                ScaleType.FIT_CENTER -> {
                    val scale = Math.min(measuredWidth.toFloat() / scaledBitmap.width, measuredHeight.toFloat() / scaledBitmap.height)
                    val scaledWidth = (scaledBitmap.width * scale).toInt()
                    val scaledHeight = (scaledBitmap.height * scale).toInt()
                    val left = (measuredWidth - scaledWidth) / 2
                    val top = (measuredHeight - scaledHeight) / 2
                    canvas.drawBitmap(Bitmap.createScaledBitmap(scaledBitmap, scaledWidth, scaledHeight, true), left.toFloat(), top.toFloat(), null)
                }
            }
        }
    }
}
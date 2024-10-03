package com.myfabricapp.ugoiraview

import android.content.Context
import android.graphics.Bitmap
import android.util.AttributeSet
import android.view.View
import android.widget.ImageView
import androidx.annotation.NonNull
import androidx.core.content.ContextCompat
import android.widget.ImageView.ScaleType
import java.util.*

class UgoiraView @JvmOverloads constructor(
    context: Context,
    attrs: AttributeSet? = null,
    defStyleAttr: Int = 0
) : ImageView(context, attrs, defStyleAttr) {

    private var images: List<Bitmap> = emptyList()
    private var currentIndex: Int = 0
    private var isPaused: Boolean = true
    private var animationTimer: Timer? = null

    fun setImages(imageList: List<Bitmap>?) {
        if (!imageList.isNullOrEmpty()) {
            images = imageList
            currentIndex = 0
            startAnimation()
        }
    }

    fun setWidth(width: Int) {
        if (width > 0) {
            layoutParams.width = width
            requestLayout()
        }
    }

    fun setHeight(height: Int) {
        if (height > 0) {
            layoutParams.height = height
            requestLayout()
        }
    }

    fun setResizeMode(mode: Int) {
        if (mode in 0..2) {
            scaleType = when (mode) {
                0 -> ScaleType.CENTER_CROP
                1 -> ScaleType.FIT_CENTER
                else -> ScaleType.CENTER
            }
        }
    }

    fun pauseAnimation() {
        isPaused = true
        animationTimer?.cancel()
    }

    fun resumeAnimation() {
        if (images.isNotEmpty()) {
            isPaused = false
            startAnimation()
        }
    }

    private fun startAnimation() {
        if (!isPaused && images.isNotEmpty()) {
            animationTimer?.cancel()
            animationTimer = Timer()
            animationTimer?.scheduleAtFixedRate(object : TimerTask() {
                override fun run() {
                    if (!isPaused) {
                        post {
                            setImageBitmap(images[currentIndex])
                            currentIndex = (currentIndex + 1) % images.size
                        }
                    }
                }
            }, 0, 100)
        }
    }
}
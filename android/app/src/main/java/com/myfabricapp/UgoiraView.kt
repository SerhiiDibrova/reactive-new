package com.myfabricapp

import android.content.Context
import android.graphics.Canvas
import android.util.AttributeSet
import android.view.View
import android.graphics.drawable.AnimationDrawable
import com.myfabricapp.R

class UgoiraView @JvmOverloads constructor(
    context: Context,
    attrs: AttributeSet? = null,
    defStyleAttr: Int = 0
) : View(context, attrs, defStyleAttr) {

    private var animationDrawable: AnimationDrawable? = null
    private var isPaused: Boolean = false

    init {
        setBackgroundResource(R.drawable.ugoira_animation)
        animationDrawable = background as? AnimationDrawable
    }

    override fun onDraw(canvas: Canvas) {
        super.onDraw(canvas)
        if (!isPaused && animationDrawable != null && !animationDrawable!!.isRunning) {
            animationDrawable?.start()
        }
    }

    fun pauseAnimation() {
        if (!isPaused) {
            isPaused = true
            animationDrawable?.stop()
        }
    }

    fun resumeAnimation() {
        if (isPaused) {
            isPaused = false
            animationDrawable?.let {
                if (!it.isRunning) {
                    it.start()
                }
            }
        }
    }
}
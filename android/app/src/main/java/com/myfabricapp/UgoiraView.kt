package com.myfabricapp

import android.content.Context
import android.graphics.drawable.AnimationDrawable
import android.util.AttributeSet
import android.view.View
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.uimanager.annotations.ReactProp

class UgoiraView : SimpleViewManager<View>() {
    private var isAnimationRunning = false
    private lateinit var animationDrawable: AnimationDrawable

    override fun createViewInstance(reactContext: ThemedReactContext): View {
        val view = View(reactContext)
        init(reactContext)
        view.background = animationDrawable
        return view
    }

    private fun init(context: Context) {
        animationDrawable = AnimationDrawable()
        try {
            animationDrawable.addFrame(context.getDrawable(R.drawable.frame1), 100)
            animationDrawable.addFrame(context.getDrawable(R.drawable.frame2), 100)
            animationDrawable.addFrame(context.getDrawable(R.drawable.frame3), 100)
            animationDrawable.addFrame(context.getDrawable(R.drawable.frame4), 100)
            animationDrawable.addFrame(context.getDrawable(R.drawable.frame5), 100)
            animationDrawable.isOneShot = false
        } catch (e: Exception) {
            throw RuntimeException("Error initializing animation frames: ${e.message}")
        }
    }

    override fun getName(): String {
        return "UgoiraView"
    }

    @ReactMethod
    fun resumeAnimation() {
        if (!isAnimationRunning) {
            post {
                try {
                    animationDrawable.start()
                    isAnimationRunning = true
                } catch (e: Exception) {
                    throw RuntimeException("Error starting animation: ${e.message}")
                }
            }
        }
    }

    @ReactMethod
    fun stopAnimation() {
        if (isAnimationRunning) {
            animationDrawable.stop()
            isAnimationRunning = false
        }
    }
}
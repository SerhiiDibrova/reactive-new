package com.myfabricapp

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactModule

@ReactModule(name = UgoiraViewModule.NAME)
class UgoiraViewModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    companion object {
        const val NAME = "UgoiraView"
        const val DEFAULT_SCALE_TYPE = "CENTER_CROP"
    }

    private var height: Int = 0
    private var scaleType: String = DEFAULT_SCALE_TYPE
    private var isAnimationPaused: Boolean = false

    override fun getName(): String {
        return NAME
    }

    @ReactMethod
    fun setHeight(height: Int, promise: Promise) {
        if (height < 0) {
            promise.reject("INVALID_HEIGHT", "Height must be a non-negative integer.")
            return
        }
        this.height = height
        // Trigger image loading processes here
        promise.resolve(null)
    }

    @ReactMethod
    fun setImageScaleType(resizeMode: String, promise: Promise) {
        val validScaleTypes = listOf("CENTER_CROP", "FIT_CENTER", "FIT_XY", "FIT_START", "FIT_END")
        if (resizeMode in validScaleTypes) {
            this.scaleType = resizeMode
        } else {
            this.scaleType = DEFAULT_SCALE_TYPE
            promise.reject("INVALID_SCALE_TYPE", "Invalid scale type provided. Defaulting to CENTER_CROP.")
            return
        }
        promise.resolve(null)
    }

    @ReactMethod
    fun pauseAnimation(promise: Promise) {
        if (!isAnimationPaused) {
            isAnimationPaused = true
            // Pause the animation here
        }
        promise.resolve(null)
    }

    @ReactMethod
    fun resumeAnimation(promise: Promise) {
        if (isAnimationPaused) {
            isAnimationPaused = false
            // Resume the animation here
        }
        promise.resolve(null)
    }
}
package com.myfabricapp

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.modules.core.DeviceEventManagerModule
import android.os.Bundle
import androidx.lifecycle.LifecycleObserver
import androidx.lifecycle.OnLifecycleEvent
import androidx.lifecycle.Lifecycle
import androidx.lifecycle.LifecycleOwner

class UgoiraViewModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext), LifecycleObserver {

    private var isAnimationPaused: Boolean = false

    init {
        reactContext.addLifecycleEventListener(object : LifecycleOwner {
            override fun getLifecycle() = reactContext.lifecycle
        })
    }

    override fun getName(): String {
        return "UgoiraView"
    }

    @ReactMethod
    fun pauseAnimation(promise: Promise) {
        isAnimationPaused = true
        promise.resolve(null)
    }

    @ReactMethod
    fun resumeAnimation(promise: Promise) {
        isAnimationPaused = false
        promise.resolve(null)
    }

    @ReactMethod
    fun isAnimationPaused(promise: Promise) {
        promise.resolve(isAnimationPaused)
    }

    @OnLifecycleEvent(Lifecycle.Event.ON_DESTROY)
    fun onDestroy() {
        isAnimationPaused = false
        // Implement additional resource management here
    }
}
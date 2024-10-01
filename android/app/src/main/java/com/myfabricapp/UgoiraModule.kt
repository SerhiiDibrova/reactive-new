package com.myfabricapp

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class UgoiraModule(private val reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    private var ugoiraView: UgoiraView? = null

    fun setUgoiraView(view: UgoiraView) {
        this.ugoiraView = view
    }

    override fun getName(): String {
        return "UgoiraModule"
    }

    @ReactMethod
    fun pauseAnimation() {
        ugoiraView?.pauseAnimation()
    }

    @ReactMethod
    fun resumeAnimation() {
        ugoiraView?.resumeAnimation()
    }
}
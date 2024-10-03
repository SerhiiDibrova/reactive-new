package com.myfabricapp

import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.annotations.ReactProp
import com.facebook.react.bridge.ThemedReactContext

class UgoiraViewManager : SimpleViewManager<UgoiraView>() {
    private var isPaused: Boolean = false

    override fun getName(): String {
        return "UgoiraView"
    }

    override fun createViewInstance(reactContext: ThemedReactContext): UgoiraView {
        return UgoiraView(reactContext)
    }

    @ReactProp(name = "paused", defaultBoolean = false)
    fun setPaused(view: UgoiraView, paused: Boolean) {
        if (isPaused != paused) {
            isPaused = paused
            if (paused) {
                view.pauseAnimation()
            } else {
                view.resumeAnimation()
            }
        }
    }
}
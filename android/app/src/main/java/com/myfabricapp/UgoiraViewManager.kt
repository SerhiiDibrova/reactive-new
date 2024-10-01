package com.myfabricapp

import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext

class UgoiraViewManager : SimpleViewManager<UgoiraView>() {
    override fun getName(): String {
        return "UgoiraView"
    }

    override fun createViewInstance(reactContext: ThemedReactContext): UgoiraView {
        return UgoiraView(reactContext)
    }

    override fun setPaused(view: UgoiraView, paused: Boolean) {
        if (paused) {
            view.pauseAnimation()
        } else {
            view.resumeAnimation()
        }
    }
}
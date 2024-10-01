package com.myfabricapp

import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.myfabricapp.UgoiraView

class UgoiraViewManager : SimpleViewManager<UgoiraView>() {
    companion object {
        const val REACT_CLASS = "UgoiraView"
    }

    override fun getName(): String {
        return REACT_CLASS
    }

    override fun createViewInstance(reactContext: ThemedReactContext): UgoiraView {
        return UgoiraView(reactContext)
    }

    fun setPaused(view: UgoiraView, paused: Boolean) {
        try {
            if (paused) {
                view.pauseAnimation()
            } else {
                view.resumeAnimation()
            }
        } catch (e: Exception) {
            // Log the error or provide feedback
            e.printStackTrace()
        }
    }
}
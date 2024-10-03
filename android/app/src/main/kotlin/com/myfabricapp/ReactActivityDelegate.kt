package com.myfabricapp

import com.facebook.react.ReactActivityDelegate
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView

class MyReactActivityDelegate(activity: MainActivity) : ReactActivityDelegate(activity, activity.getMainComponentName()) {
    override fun createRootView(): RNGestureHandlerEnabledRootView {
        return RNGestureHandlerEnabledRootView(activity)
    }

    override fun getMainComponentName(): String {
        return activity.getString(R.string.app_name)
    }
}
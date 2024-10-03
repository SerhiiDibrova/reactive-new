package com.myfabricapp

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.ReactRootView
import com.myfabricapp.UgoiraViewManager

class MainActivity : ReactActivity() {
    override fun getMainComponentName(): String? {
        return "MyFabricApp"
    }

    override fun createReactActivityDelegate(): ReactActivityDelegate {
        return object : ReactActivityDelegate(this, mainComponentName) {
            override fun createRootView(): ReactRootView {
                return ReactRootView(this@MainActivity)
            }
        }
    }

    override fun onPause() {
        super.onPause()
        UgoiraViewManager.setPaused(true)
    }

    override fun onResume() {
        super.onResume()
        UgoiraViewManager.setPaused(false)
    }
}
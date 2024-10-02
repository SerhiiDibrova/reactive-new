package com.yourapp

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.ReactRootView
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactApplication
import com.facebook.splashscreen.SplashScreen
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView

class MainActivity: ReactActivity() {
    override fun getMainComponentName(): String {
        return "PxViewR"
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        SplashScreen.show(this)
        super.onCreate(null)
    }

    override fun createReactActivityDelegate(): ReactActivityDelegate {
        return object : ReactActivityDelegate(this, mainComponentName) {
            override fun createRootView(): ReactRootView {
                return RNGestureHandlerEnabledRootView(this@MainActivity)
            }
        }
    }
}
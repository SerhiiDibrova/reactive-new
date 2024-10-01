package com.myfabricapp

import android.app.Activity
import android.os.Bundle
import android.view.View
import android.widget.ImageView

class SplashScreen {
    companion object {
        fun show(activity: Activity) {
            activity.setContentView(R.layout.splash_screen)
            val splashImage: ImageView = activity.findViewById(R.id.splash_image)
            splashImage.postDelayed({
                activity.setContentView(R.layout.activity_main)
                activity.window.decorView.systemUiVisibility = View.SYSTEM_UI_FLAG_VISIBLE
            }, 3000)
        }
    }
}
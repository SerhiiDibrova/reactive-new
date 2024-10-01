package com.myfabricapp

import android.app.Activity
import android.content.Intent
import android.os.Bundle
import android.os.Handler
import android.view.WindowManager

class SplashScreen {
    companion object {
        fun show(activity: Activity) {
            activity.window.setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN)
            activity.setContentView(R.layout.splash_screen)

            Handler().postDelayed({
                val intent = Intent(activity, MainActivity::class.java)
                activity.startActivity(intent)
                activity.finish()
            }, 3000)
        }
    }
}
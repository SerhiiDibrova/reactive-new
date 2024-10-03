package com.myfabricapp

import android.app.Application
import com.google.firebase.FirebaseApp
import com.crashlytics.android.Crashlytics
import com.fabric.sdk.android.Fabric

class MainApplication : Application() {
    override fun onCreate() {
        super.onCreate()
        FirebaseApp.initializeApp(this)
        Fabric.with(this, Crashlytics())
    }

    fun getGifList(): List<String> {
        // Implementation for fetching GIF list
        return listOf("gif1.gif", "gif2.gif", "gif3.gif")
    }
}
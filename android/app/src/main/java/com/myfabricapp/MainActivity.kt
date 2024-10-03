package com.myfabricapp

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.myfabricapp.navigation.AppNavigator

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(AppNavigator())
    }
}
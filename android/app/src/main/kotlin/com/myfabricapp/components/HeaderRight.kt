package com.myfabricapp.components

import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.widget.ImageButton
import android.widget.LinearLayout
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.layout.Row
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Settings
import androidx.compose.material3.Icon
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.compose.ui.viewinterop.AndroidView
import com.myfabricapp.R

@Composable
fun HeaderRight(context: Context, onSettingsClick: () -> Unit, onProfileClick: () -> Unit) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(16.dp),
        horizontalArrangement = Arrangement.End
    ) {
        AndroidView(factory = {
            LinearLayout(context).apply {
                orientation = LinearLayout.HORIZONTAL
                
                val settingsButton = ImageButton(context).apply {
                    setImageResource(Settings.defaultResourceId)
                    setOnClickListener { onSettingsClick() }
                }
                addView(settingsButton)

                val profileButton = ImageButton(context).apply {
                    setImageResource(R.drawable.ic_user_profile)
                    setOnClickListener { onProfileClick() }
                }
                addView(profileButton)
            }
        })
    }
}
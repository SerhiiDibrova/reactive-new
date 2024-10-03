package com.myfabricapp.components

import android.content.Context
import android.util.AttributeSet
import android.view.LayoutInflater
import android.widget.Button
import android.widget.LinearLayout
import androidx.core.content.ContextCompat
import com.myfabricapp.R

class HeaderRight @JvmOverloads constructor(
    context: Context,
    attrs: AttributeSet? = null,
    defStyleAttr: Int = 0
) : LinearLayout(context, attrs, defStyleAttr) {

    private val settingsButton: Button
    private val profileButton: Button

    init {
        LayoutInflater.from(context).inflate(R.layout.header_right, this, true)
        settingsButton = findViewById(R.id.settings_button)
        profileButton = findViewById(R.id.profile_button)
        validateButtons()
        setButtonStyles()
        setButtonListeners()
    }

    private fun validateButtons() {
        if (settingsButton == null || profileButton == null) {
            throw IllegalStateException("Required buttons are not present in the layout.")
        }
    }

    private fun setButtonStyles() {
        val buttonBackground = ContextCompat.getColor(context, R.color.button_background)
        val buttonTextColor = ContextCompat.getColor(context, R.color.button_text)
        
        settingsButton.setBackgroundColor(buttonBackground)
        profileButton.setBackgroundColor(buttonBackground)
        settingsButton.setTextColor(buttonTextColor)
        profileButton.setTextColor(buttonTextColor)
    }

    private fun setButtonListeners() {
        settingsButton.setOnClickListener {
            // Handle settings button click
        }
        profileButton.setOnClickListener {
            // Handle profile button click
        }
    }
}
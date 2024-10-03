package com.myfabricapp.components

import android.content.Context
import android.util.AttributeSet
import android.view.LayoutInflater
import android.view.View
import android.widget.Button
import android.widget.LinearLayout
import androidx.core.content.ContextCompat
import com.myfabricapp.R

class HeaderLeft @JvmOverloads constructor(
    context: Context,
    attrs: AttributeSet? = null,
    defStyleAttr: Int = 0
) : LinearLayout(context, attrs, defStyleAttr) {

    private val backButton: Button

    init {
        val view = LayoutInflater.from(context).inflate(R.layout.header_left, this, true)
        backButton = view.findViewById(R.id.back_button)
        validateLayout()
        styleBackButton()
        validateStyling()
    }

    private fun validateLayout() {
        if (backButton == null) {
            throw IllegalStateException("Back button not found in layout")
        }
    }

    private fun styleBackButton() {
        backButton.setBackgroundColor(ContextCompat.getColor(context, R.color.button_background))
        backButton.setTextColor(ContextCompat.getColor(context, R.color.button_text))
    }

    private fun validateStyling() {
        val backgroundColor = backButton.background
        val expectedBackground = ContextCompat.getDrawable(context, R.color.button_background)
        val textColor = backButton.currentTextColor
        val expectedTextColor = ContextCompat.getColor(context, R.color.button_text)

        if (!isDrawableEqual(backgroundColor, expectedBackground) || textColor != expectedTextColor) {
            throw IllegalStateException("Back button styling does not match design requirements")
        }
    }

    private fun isDrawableEqual(drawable1: Drawable?, drawable2: Drawable?): Boolean {
        return drawable1?.constantState == drawable2?.constantState
    }

    fun setOnBackButtonClickListener(listener: OnClickListener) {
        backButton.setOnClickListener(listener)
    }
}
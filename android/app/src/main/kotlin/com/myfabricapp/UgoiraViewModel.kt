package com.myfabricapp

import android.graphics.Bitmap

data class ImageModel(
    val uri: String,
    var bitmap: Bitmap? = null,
    val delay: Int
)
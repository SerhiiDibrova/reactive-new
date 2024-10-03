package com.myfabricapp

import android.graphics.Bitmap
import android.graphics.BitmapFactory
import androidx.lifecycle.ViewModel
import java.io.File

class UgoiraViewModel(var uri: String, var delay: Int, private var _bitmap: Bitmap? = null) : ViewModel() {

    val bitmap: Bitmap?
        get() {
            if (_bitmap == null) {
                val file = File(uri)
                if (file.exists()) {
                    try {
                        _bitmap = BitmapFactory.decodeFile(uri)
                    } catch (e: Exception) {
                        // Handle exception (e.g., log it)
                    }
                }
            }
            return _bitmap
        }

    fun setImages(uri: String, delay: Int) {
        if (uri.isBlank() || delay < 0) {
            throw IllegalArgumentException("Invalid input parameters")
        }
        this.uri = uri
        this.delay = delay
        _bitmap?.let {
            if (!it.isRecycled) {
                it.recycle()
            }
        }
        _bitmap = null
    }

    override fun onCleared() {
        super.onCleared()
        _bitmap?.let {
            if (!it.isRecycled) {
                it.recycle()
            }
        }
        _bitmap = null
    }
}
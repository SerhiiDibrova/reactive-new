package com.myfabricapp

import android.graphics.Bitmap
import android.graphics.drawable.Drawable
import com.bumptech.glide.Glide
import com.bumptech.glide.request.target.CustomTarget
import com.bumptech.glide.request.transition.Transition
import io.reactivex.Observable
import io.reactivex.android.schedulers.AndroidSchedulers
import io.reactivex.schedulers.Schedulers
import android.util.Log

data class UgoiraViewModel(var bitmap: Bitmap?)

class ImageLoader {

    fun loadImages(models: List<UgoiraViewModel>, width: Int, height: Int) {
        if (width <= 0 || height <= 0) return

        Observable.fromIterable(models)
            .flatMap { model ->
                Observable.create<Bitmap> { emitter ->
                    Glide.with(App.context)
                        .asBitmap()
                        .load(model.bitmap)
                        .override(width, height)
                        .into(object : CustomTarget<Bitmap>() {
                            override fun onResourceReady(resource: Bitmap, transition: Transition<in Bitmap>?) {
                                if (models.contains(model)) {
                                    model.bitmap = resource
                                    emitter.onNext(resource)
                                }
                                emitter.onComplete()
                            }

                            override fun onLoadCleared(placeholder: Drawable?) {}

                            override fun onLoadFailed(errorDrawable: Drawable?) {
                                model.bitmap = null
                                Log.e("ImageLoader", "Image load failed for model: $model")
                                emitter.onComplete()
                            }
                        })
                }.onErrorResumeNext(Observable.empty())
            }
            .subscribeOn(Schedulers.io())
            .observeOn(AndroidSchedulers.mainThread())
            .subscribe({ bitmap ->
                // Successfully loaded bitmap
            }, { error ->
                Log.e("ImageLoader", "Error loading image: ${error.message}", error)
            })
    }
}
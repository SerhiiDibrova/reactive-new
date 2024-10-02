package com.yourapp;

import androidx.lifecycle.LiveData;
import androidx.lifecycle.MutableLiveData;
import androidx.lifecycle.ViewModel;
import io.reactivex.rxjava3.core.Observable;
import io.reactivex.rxjava3.schedulers.Schedulers;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

public class UgoiraViewModel extends ViewModel {
    private final MutableLiveData<byte[]> imageData = new MutableLiveData<>();
    private final MutableLiveData<Throwable> errorData = new MutableLiveData<>();

    public LiveData<byte[]> getImageData() {
        return imageData;
    }

    public LiveData<Throwable> getErrorData() {
        return errorData;
    }

    public void loadImage(String imageUrl) {
        if (!isValidUrl(imageUrl)) {
            errorData.postValue(new IllegalArgumentException("Invalid URL"));
            return;
        }
        Observable.fromCallable(() -> fetchImage(imageUrl))
                .subscribeOn(Schedulers.io())
                .subscribe(imageData::postValue, errorData::postValue);
    }

    private byte[] fetchImage(String imageUrl) throws IOException {
        HttpURLConnection connection = null;
        try {
            URL url = new URL(imageUrl);
            connection = (HttpURLConnection) url.openConnection();
            connection.setDoInput(true);
            connection.connect();
            return connection.getInputStream().readAllBytes();
        } finally {
            if (connection != null) {
                connection.disconnect();
            }
        }
    }

    private boolean isValidUrl(String imageUrl) {
        try {
            new URL(imageUrl);
            return true;
        } catch (MalformedURLException e) {
            return false;
        }
    }
}
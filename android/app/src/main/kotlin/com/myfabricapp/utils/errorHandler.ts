package com.myfabricapp.utils

import android.content.Context
import android.widget.Toast
import androidx.appcompat.app.AlertDialog

fun handleError(context: Context, error: Throwable) {
    val errorMessage = when (error) {
        is NetworkException -> "Network error. Please check your connection."
        is ApiException -> "API error: ${error.message}"
        else -> "An unexpected error occurred."
    }
    showToast(context, errorMessage)
    showErrorDialog(context, errorMessage)
}

fun handleNavigationError(context: Context, error: Throwable) {
    val errorMessage = "Navigation error: ${error.message}"
    showToast(context, errorMessage)
    showErrorDialog(context, errorMessage)
}

fun showToast(context: Context, message: String) {
    Toast.makeText(context, message, Toast.LENGTH_LONG).show()
}

fun showErrorDialog(context: Context, message: String) {
    AlertDialog.Builder(context)
        .setTitle("Error")
        .setMessage(message)
        .setPositiveButton("OK", null)
        .show()
}

suspend fun <T> safeApiCall(context: Context, apiCall: suspend () -> T): T? {
    return try {
        apiCall()
    } catch (e: Throwable) {
        handleError(context, e)
        null
    }
}

suspend fun <T> safeNavigationCall(context: Context, navigationCall: suspend () -> T): T? {
    return try {
        navigationCall()
    } catch (e: Throwable) {
        handleNavigationError(context, e)
        null
    }
}
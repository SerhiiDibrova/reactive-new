package com.myfabricapp.utils

import android.util.Log
import androidx.navigation.NavController
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.launch
import kotlin.coroutines.CoroutineContext

class ErrorHandler(private val navController: NavController) {

    fun handleApiError(
        error: Throwable,
        onError: () -> Unit = {},
        onSuccess: () -> Unit = {}
    ) {
        Log.e("ErrorHandler", "API Error: ${error.message}")
        when (error) {
            is NetworkException -> {
                onError()
            }
            is ApiException -> {
                onError()
            }
            else -> {
                onError()
            }
        }
    }

    fun navigateSafely(destination: String, onFailure: () -> Unit = {}) {
        try {
            navController.navigate(destination)
        } catch (e: Exception) {
            Log.e("ErrorHandler", "Navigation Error: ${e.message}")
            onFailure()
        }
    }
}

fun CoroutineScope.launchWithErrorHandling(
    context: CoroutineContext,
    block: suspend () -> Unit,
    errorHandler: ErrorHandler
) {
    launch(context) {
        try {
            block()
        } catch (e: Throwable) {
            errorHandler.handleApiError(e)
        }
    }
}

fun <P> withErrorHandling(
    apiCall: suspend (P) -> Unit,
    errorHandler: ErrorHandler,
    params: P,
    onError: () -> Unit = {},
    onSuccess: () -> Unit = {}
) {
    try {
        apiCall(params)
        onSuccess()
    } catch (e: Throwable) {
        errorHandler.handleApiError(e, onError)
    }
}

fun <P> createApiCallWrapper(
    apiCall: suspend (P) -> Unit,
    errorHandler: ErrorHandler
): suspend (P, () -> Unit, () -> Unit) -> Unit {
    return { params, onError, onSuccess ->
        withErrorHandling(apiCall, errorHandler, params, onError, onSuccess)
    }
}

fun <P> useApiCallWithErrorHandling(
    apiCall: suspend (P) -> Unit,
    errorHandler: ErrorHandler,
    params: P,
    onError: () -> Unit = {},
    onSuccess: () -> Unit = {}
) {
    createApiCallWrapper(apiCall, errorHandler)(params, onError, onSuccess)
}
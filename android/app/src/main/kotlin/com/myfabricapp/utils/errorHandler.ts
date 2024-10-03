package com.myfabricapp.utils

import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.tooling.preview.Preview
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.launch

@Composable
fun ErrorBoundary(
    error: Throwable?,
    onErrorDismissed: () -> Unit,
    onNavigationFailure: () -> Unit,
    content: @Composable () -> Unit
) {
    val snackbarHostState = remember { SnackbarHostState() }
    val context = LocalContext.current
    val coroutineScope = remember { CoroutineScope(context) }

    LaunchedEffect(error) {
        error?.let {
            snackbarHostState.showSnackbar(it.message ?: "An error occurred")
            onErrorDismissed()
            onNavigationFailure()
        }
    }

    Box(modifier = Modifier
        .fillMaxSize()
        .padding(16.dp)
        .wrapContentSize(Alignment.Center)) {
        content()
        SnackbarHost(hostState = snackbarHostState, modifier = Modifier.align(Alignment.BottomCenter))
    }
}

@Composable
@Preview
fun PreviewErrorBoundary() {
    Surface(color = MaterialTheme.colorScheme.background) {
        ErrorBoundary(error = Exception("Sample error"), onErrorDismissed = {}, onNavigationFailure = {}) {
            Column(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(16.dp)
                    .wrapContentSize(Alignment.Center),
                verticalArrangement = Arrangement.Center,
                horizontalAlignment = Alignment.CenterHorizontally
            ) {
                Text("Content goes here", style = MaterialTheme.typography.bodyLarge)
            }
        }
    }
}
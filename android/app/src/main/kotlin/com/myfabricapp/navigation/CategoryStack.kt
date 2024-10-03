package com.myfabricapp.navigation

import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import com.myfabricapp.screens.CategoryScreen
import com.myfabricapp.screens.FreshScreen
import androidx.navigation.NavType
import androidx.navigation.compose.navArgument
import androidx.navigation.compose.createMaterialTopTabNavigator

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun CategoryTabNav(props: Map<String, Any>) {
    val tabNavigator = createMaterialTopTabNavigator()
    TabNavigator(tabNavigator) {
        TabScreen("Hot") {
            CategoryScreen(props)
        }
        TabScreen("Fresh") {
            FreshScreen()
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun CategoryStack() {
    val navController = rememberNavController()
    NavHost(navController = navController, startDestination = "categoryTabNav") {
        composable("categoryTabNav") { 
            CategoryTabNav(props = mapOf()) 
        }
    }
}

@Composable
fun HeaderLeft() {
    // Implementation for HeaderLeft
}

@Composable
fun HeaderRight() {
    // Implementation for HeaderRight
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun CategoryStack() {
    val navController = rememberNavController()
    NavHost(navController = navController, startDestination = "categoryTabNav") {
        composable("categoryTabNav") { 
            TopAppBar(
                title = { Text("Categories") },
                navigationIcon = { HeaderLeft() },
                actions = { HeaderRight() }
            )
            CategoryTabNav(props = mapOf()) 
        }
    }
}
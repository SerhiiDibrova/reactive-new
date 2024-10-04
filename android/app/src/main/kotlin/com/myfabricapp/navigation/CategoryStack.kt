package com.myfabricapp.navigation

import androidx.compose.runtime.Composable
import com.myfabricapp.ui.CategoryTabNav
import com.myfabricapp.ui.HeaderLeft
import com.myfabricapp.ui.HeaderRight
import com.reactnavigation.stack.createStackNavigator
import androidx.navigation.compose.rememberNavController

data class PropsType(val route: RouteType)
data class RouteType(val name: String)

@Composable
fun CategoryStack(props: PropsType) {
    val navController = rememberNavController()
    val Stack = createStackNavigator()
    Stack.Navigator {
        Stack.Screen(
            name = props.route.name,
            content = { CategoryTabNav() },
            options = {
                headerLeft = { HeaderLeft() }
                headerRight = { HeaderRight() }
                headerTitleAlign = "left"
                headerTitleStyle = {
                    fontWeight = "bold"
                    fontSize = 18
                }
            }
        )
    }
}
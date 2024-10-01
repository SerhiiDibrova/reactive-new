package PxViewR

import UIKit
import Firebase

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

    var window: UIWindow?

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        window = UIWindow(frame: UIScreen.main.bounds)
        let rootViewController = YourInitialViewController() // Replace with your initial view controller
        window?.rootViewController = rootViewController
        window?.makeKeyAndVisible()
        
        if FirebaseApp.app() == nil {
            FirebaseApp.configure()
        }
        
        SplashScreenManager.showSplashScreen()
        
        return true
    }

    func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey : Any] = [:]) -> Bool {
        return DeepLinkingManager.handleDeepLink(url: url)
    }
}
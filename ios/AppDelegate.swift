package AppDelegate

import UIKit
import Firebase
import React

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

    var window: UIWindow?

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        window = UIWindow(frame: UIScreen.main.bounds)
        window?.rootViewController = MainViewController()
        window?.makeKeyAndVisible()

        if FirebaseApp.app() == nil {
            FirebaseApp.configure()
        }

        SplashScreenManager.showSplashScreen()
        return true
    }

    func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey : Any] = [:]) -> Bool {
        return RCTLinkingManager.application(app, open: url, options: options)
    }
}
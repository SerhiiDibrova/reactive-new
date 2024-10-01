import UIKit
import Firebase

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

    var window: UIWindow?

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        if FirebaseApp.app() == nil {
            FirebaseApp.configure()
        }
        
        window = UIWindow(frame: UIScreen.main.bounds)
        let rootViewController = MainViewController()
        window?.rootViewController = rootViewController
        window?.makeKeyAndVisible()
        
        SplashScreenManager.showSplashScreen()
        
        return true
    }

    func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey : Any] = [:]) -> Bool {
        return DeepLinkingManager.handleDeepLink(url: url)
    }
}
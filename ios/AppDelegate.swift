package AppDelegate

import UIKit
import React

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

    var window: UIWindow?

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        let jsCodeLocation: URL

        #if DEBUG
            jsCodeLocation = URL(string: "http://localhost:8081/index.bundle?platform=ios")!
        #else
            jsCodeLocation = Bundle.main.url(forResource: "main", withExtension: "jsbundle")!
        #endif

        let rootView = RCTRootView(bundleURL: jsCodeLocation, 
                                    moduleName: getMainComponentName(), 
                                    initialProperties: nil, 
                                    launchOptions: launchOptions)

        self.window = UIWindow(frame: UIScreen.main.bounds)
        self.window?.rootViewController = UIViewController()
        self.window?.rootViewController?.view = rootView
        self.window?.makeKeyAndVisible()

        return true
    }

    func getMainComponentName() -> String {
        return "YourAppName"
    }
}
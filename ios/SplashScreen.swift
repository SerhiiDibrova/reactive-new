package SplashScreen

import UIKit
import RNSplashScreen

class SplashScreenManager {
    static let shared = SplashScreenManager()
    
    private var isLoading: Bool = false
    
    private init() {}
    
    func showSplashScreen() {
        RNSplashScreen.show()
    }
    
    func hideSplashScreen() {
        RNSplashScreen.hide()
    }
    
    func manageSplashScreen(isLoading: Bool) {
        self.isLoading = isLoading
        if isLoading {
            showSplashScreen()
        } else {
            DispatchQueue.main.async {
                self.hideSplashScreen()
            }
        }
    }
    
    func mainViewIsReady() {
        manageSplashScreen(isLoading: false)
    }
}
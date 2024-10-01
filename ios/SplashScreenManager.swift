package ios

import UIKit
import React

class SplashScreenManager {
    static func showSplashScreen(completion: @escaping () -> Void) {
        guard let window = UIApplication.shared.windows.first(where: { $0.isKeyWindow }) else { return }
        
        let splashScreenView = UIView(frame: window.bounds)
        splashScreenView.backgroundColor = UIColor.white
        
        let splashImageView = UIImageView(frame: window.bounds)
        splashImageView.image = UIImage(named: "splash_image")
        splashImageView.contentMode = .scaleAspectFill
        splashScreenView.addSubview(splashImageView)
        
        window.addSubview(splashScreenView)
        
        DispatchQueue.main.asyncAfter(deadline: .now() + 2.0) {
            splashScreenView.removeFromSuperview()
            completion()
        }
    }
}
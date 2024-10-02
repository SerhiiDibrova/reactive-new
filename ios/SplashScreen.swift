package ios

import UIKit

class SplashScreen {
    static func show(_ viewController: UIViewController) {
        let splashView = UIView(frame: viewController.view.bounds)
        splashView.backgroundColor = UIColor.white
        
        guard let splashImage = UIImage(named: "splashImage") else {
            print("Error: Splash image not found.")
            return
        }
        
        let imageView = UIImageView(image: splashImage)
        imageView.contentMode = .scaleAspectFill
        imageView.translatesAutoresizingMaskIntoConstraints = false
        
        splashView.addSubview(imageView)
        NSLayoutConstraint.activate([
            imageView.centerXAnchor.constraint(equalTo: splashView.centerXAnchor),
            imageView.centerYAnchor.constraint(equalTo: splashView.centerYAnchor),
            imageView.widthAnchor.constraint(equalTo: splashView.widthAnchor),
            imageView.heightAnchor.constraint(equalTo: splashView.heightAnchor)
        ])
        
        viewController.view.addSubview(splashView)
        
        DispatchQueue.main.asyncAfter(deadline: .now() + 2.0) {
            splashView.removeFromSuperview()
        }
    }
    
    static func getMainComponentName() -> String {
        return "MainComponent"
    }
}
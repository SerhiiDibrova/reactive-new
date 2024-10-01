package ios

import UIKit

class WelcomeScreenViewController: UIViewController {
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setupUI()
    }
    
    private func setupUI() {
        view.accessibilityLabel = "WelcomeScreenAccessibilityLabel"
        view.backgroundColor = .white
        
        let welcomeLabel = UILabel()
        welcomeLabel.text = "Welcome to the App"
        welcomeLabel.translatesAutoresizingMaskIntoConstraints = false
        view.addSubview(welcomeLabel)
        
        NSLayoutConstraint.activate([
            welcomeLabel.centerXAnchor.constraint(equalTo: view.centerXAnchor),
            welcomeLabel.centerYAnchor.constraint(equalTo: view.centerYAnchor)
        ])
    }
}
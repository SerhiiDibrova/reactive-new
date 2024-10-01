package ios

import UIKit
import React

class MainViewController: UIViewController {
    var bridge: RCTBridge!

    override func viewDidLoad() {
        super.viewDidLoad()
        bridge = RCTBridge(delegate: self, launchOptions: nil)
        let rootView = RCTRootView(bridge: bridge, moduleName: "YourModuleName", initialProperties: nil)
        self.view = rootView
    }
}

extension MainViewController: RCTBridgeDelegate {
    func sourceURL(for bridge: RCTBridge) -> URL? {
        #if DEBUG
        return URL(string: "http://localhost:8081/index.bundle?platform=ios&dev=true")
        #else
        return Bundle.main.url(forResource: "main", withExtension: "jsbundle")
        #endif
    }
}
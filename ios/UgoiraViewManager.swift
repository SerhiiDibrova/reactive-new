package com.yourpackage

import React
import UIKit

class UgoiraViewManager: RCTViewManager {
    
    override func getName() -> String {
        return "UgoiraView"
    }
    
    override func createViewInstance(_ context: RCTContext) -> UgoiraView {
        return UgoiraView()
    }
    
    @objc func setResizeMode(_ view: UgoiraView, resizeMode: String) {
        let acceptedValues = ["fitCenter", "centerCrop", "centerInside", "contain", "cover", "stretch"]
        if acceptedValues.contains(resizeMode) {
            view.resizeMode = resizeMode
        } else {
            view.resizeMode = "fitCenter"
        }
        DispatchQueue.main.async {
            view.setNeedsLayout()
        }
    }
}
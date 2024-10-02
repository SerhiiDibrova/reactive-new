package ios

import UIKit

class UgoiraView: UIView {
    private var images: [UIImage] = []
    private var currentImageIndex: Int = 0
    private var resizeMode: String = "fitCenter"
    private var animationTimer: Timer?

    func setImages(_ images: [UIImage]) {
        guard !images.isEmpty else { return }
        self.images = images
        currentImageIndex = 0
        startAnimation()
    }

    func setResizeMode(_ mode: String) {
        let acceptedModes = ["fitCenter", "centerCrop", "centerInside", "contain", "cover", "stretch"]
        if acceptedModes.contains(mode) {
            resizeMode = mode
            setNeedsDisplay()
        } else {
            resizeMode = "fitCenter"
        }
    }

    private func startAnimation() {
        animationTimer?.invalidate()
        animationTimer = Timer.scheduledTimer(timeInterval: 0.1, target: self, selector: #selector(animateImages), userInfo: nil, repeats: true)
    }

    @objc private func animateImages() {
        currentImageIndex = (currentImageIndex + 1) % images.count
        DispatchQueue.main.async {
            self.setNeedsDisplay()
        }
    }

    override func draw(_ rect: CGRect) {
        guard !images.isEmpty else { return }
        let image = images[currentImageIndex]
        let resizedImage = resizeImage(image, in: rect)
        resizedImage.draw(in: rect)
    }

    private func resizeImage(_ image: UIImage, in rect: CGRect) -> UIImage {
        let size: CGSize
        switch resizeMode {
        case "fitCenter":
            size = aspectFitSize(for: image.size, in: rect.size)
        case "centerCrop":
            size = aspectFillSize(for: image.size, in: rect.size)
        case "centerInside":
            size = aspectFitSize(for: image.size, in: rect.size)
        case "contain":
            size = aspectFitSize(for: image.size, in: rect.size)
        case "cover":
            size = aspectFillSize(for: image.size, in: rect.size)
        case "stretch":
            size = rect.size
        default:
            size = rect.size
        }
        UIGraphicsBeginImageContextWithOptions(size, false, 0.0)
        image.draw(in: CGRect(origin: .zero, size: size))
        let resizedImage = UIGraphicsGetImageFromCurrentImageContext()
        UIGraphicsEndImageContext()
        return resizedImage ?? image
    }

    private func aspectFitSize(for imageSize: CGSize, in rectSize: CGSize) -> CGSize {
        let widthRatio = rectSize.width / imageSize.width
        let heightRatio = rectSize.height / imageSize.height
        let ratio = min(widthRatio, heightRatio)
        return CGSize(width: imageSize.width * ratio, height: imageSize.height * ratio)
    }

    private func aspectFillSize(for imageSize: CGSize, in rectSize: CGSize) -> CGSize {
        let widthRatio = rectSize.width / imageSize.width
        let heightRatio = rectSize.height / imageSize.height
        let ratio = max(widthRatio, heightRatio)
        return CGSize(width: imageSize.width * ratio, height: imageSize.height * ratio)
    }
}
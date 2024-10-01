package ios

import Firebase

class FirebaseManager {
    static let shared = FirebaseManager()

    private init() {
        initializeFirebase()
    }

    func initializeFirebase() {
        if FirebaseApp.app() == nil {
            FirebaseApp.configure()
        }
    }
}
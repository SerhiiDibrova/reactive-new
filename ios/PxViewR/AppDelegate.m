#import <UIKit/UIKit.h>
#import <Firebase.h>
#import "SplashScreenManager.h"
#import "DeepLinkingManager.h"
#import "MainViewController.h"

@interface AppDelegate : UIResponder <UIApplicationDelegate>

@property (strong, nonatomic) UIWindow *window;

@end

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    if ([FIRApp appNamed:@"__FIRAPP_DEFAULT__"] == nil) {
        [FIRApp configure];
    }
    
    self.window = [[UIWindow alloc] initWithFrame:[[UIScreen mainScreen] bounds]];
    UIViewController *mainViewController = [[MainViewController alloc] init];
    self.window.rootViewController = mainViewController;
    [self.window makeKeyAndVisible];
    
    [[SplashScreenManager sharedInstance] showSplashScreen];
    
    NSString *sourceURL;
#ifdef DEBUG
    sourceURL = @"http://localhost:8081/index.bundle?platform=ios&dev=true";
#else
    sourceURL = @"https://your-production-url.com/index.bundle?platform=ios";
#endif
    
    [self setJavaScriptBundleURL:sourceURL];
    
    return YES;
}

- (void)setJavaScriptBundleURL:(NSString *)url {
    // Implementation for setting the JavaScript bundle URL
    // Assuming a method to set the URL in a JavaScript bridge or similar
    // Example: [JavaScriptBridge setBundleURL:url];
}

- (BOOL)application:(UIApplication *)app openURL:(NSURL *)url options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options {
    return [[DeepLinkingManager sharedInstance] handleURL:url];
}

@end
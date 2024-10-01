#import <React/RCTBridgeModule.h>
#import <React/RCTLog.h>
#import <React/RCTRootView.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTBridge.h>
#import <UIKit/UIKit.h>

@interface ReactNativeBridge : NSObject <RCTBridgeModule>
@end

@implementation ReactNativeBridge

RCT_EXPORT_MODULE();

- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url sourceApplication:(NSString *)sourceApplication annotation:(id)annotation {
    RCTLogInfo(@"Received URL: %@", url.absoluteString);
    RCTLogInfo(@"Source Application: %@", sourceApplication);
    RCTLogInfo(@"Annotation: %@", annotation);
    
    if ([url.scheme isEqualToString:@"myapp"]) {
        if ([url.host isEqualToString:@"action1"]) {
            // Handle action1
        } else if ([url.host isEqualToString:@"action2"]) {
            // Handle action2
        } else {
            // Handle unknown action
        }
    }
    return YES;
}

@end
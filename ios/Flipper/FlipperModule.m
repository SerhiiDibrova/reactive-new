#import "FlipperModule.h"
#import <React/RCTBridge.h>
#import <React/RCTLog.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTRootView.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTDevSettings.h>
#import <React/RCTView.h>
#import "ReactNativeFlipper.h"

@implementation FlipperModule

RCT_EXPORT_MODULE();

- (void)initializeFlipper:(RCTBridge *)bridge {
    @try {
        #if DEBUG
            Class flipperClass = NSClassFromString(@"ReactNativeFlipper");
            if (flipperClass) {
                SEL selector = NSSelectorFromString(@"initializeFlipper:reactInstanceManager:");
                if ([flipperClass respondsToSelector:selector]) {
                    [flipperClass performSelector:selector withObject:bridge withObject:nil];
                } else {
                    RCTLogError(@"Flipper method not found");
                }
            } else {
                RCTLogError(@"Flipper class not found");
            }
        #endif
    } @catch (NSException *exception) {
        if ([exception.name isEqualToString:@"NSClassNotFoundException"]) {
            RCTLogError(@"Flipper initialization failed: Class not found");
        } else if ([exception.name isEqualToString:@"NSInvalidArgumentException"]) {
            RCTLogError(@"Flipper initialization failed: Invalid argument");
        } else if ([exception.name isEqualToString:@"NSInternalInconsistencyException"]) {
            RCTLogError(@"Flipper initialization failed: Internal inconsistency");
        } else if ([exception.name isEqualToString:@"NSAccessControlException"]) {
            RCTLogError(@"Flipper initialization failed: Illegal access");
        } else if ([exception.name isEqualToString:@"NSInvocationException"]) {
            RCTLogError(@"Flipper initialization failed: Invocation target exception");
        } else {
            RCTLogError(@"Flipper initialization failed: %@", exception.reason);
        }
    }
}

@end
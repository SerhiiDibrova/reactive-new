#import "ReactNativeFlipper.h"
#import <FlipperKit/FlipperKit.h>
#import <FlipperKit/FlipperKitLayoutComponent.h>
#import <FlipperKit/SKIOSNetworkAdapter.h>
#import <FlipperKit/FlipperKitUserDefaultsPlugin.h>

@implementation ReactNativeFlipper

+ (void)initializeFlipper:(RCTBridge *)bridge reactInstanceManager:(id)reactInstanceManager {
    FlipperClient *client = [FlipperClient sharedClient];
    [client addPlugin:[[FlipperKitLayoutPlugin alloc] initWithRootNode:bridge]];
    [client start];
}

@end
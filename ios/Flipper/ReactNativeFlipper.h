#import <Foundation/Foundation.h>
#import <React/RCTBridge.h>
#import <FlipperKit/FlipperClient.h>
#import <FlipperKit/FlipperKitLayoutComponent.h>
#import <FlipperKit/SKDescriptorMapper.h>

@interface ReactNativeFlipper : NSObject

+ (void)initializeFlipper:(RCTBridge *)bridge reactInstanceManager:(id)reactInstanceManager;

@end

@implementation ReactNativeFlipper

+ (void)initializeFlipper:(RCTBridge *)bridge reactInstanceManager:(id)reactInstanceManager {
    FlipperClient *client = [FlipperClient sharedClient];
    [client addPlugin:[[FlipperKitLayoutComponent alloc] init]];
    [client start];
    
    [bridge setFlipperClient:client];
}

@end
#import <React/RCTBridgeModule.h>
#import <FlipperKit/FlipperClient.h>
#import <FlipperKit/SKDescriptorMapper.h>
#import <FlipperKit/FlipperKitLayoutComponent.h>
#import <FlipperKit/FlipperKitNetworkPlugin.h>
#import <FlipperKit/FlipperKitUserDefaultsPlugin.h>
#import <FlipperKit/FlipperKitReactPlugin.h>

@interface FlipperModule : NSObject <RCTBridgeModule>
@end

@implementation FlipperModule

RCT_EXPORT_MODULE();

- (void)initializeFlipper:(id)app {
    FlipperClient *client = [FlipperClient sharedClient];
    [client addPlugin:[[FlipperKitNetworkPlugin alloc] initWithNetworkAdapter:[SKDescriptorMapper new]]];
    [client addPlugin:[[FlipperKitUserDefaultsPlugin alloc] initWithUserDefaults:[NSUserDefaults standardUserDefaults]]];
    [client addPlugin:[[FlipperKitReactPlugin alloc] init]];
    [client start];
}

@end
#import "AppDelegate.h"
#import <React/RCTBridge.h>
#import "FlipperModule.h"

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:launchOptions];
    
    FlipperModule *flipperModule = [[FlipperModule alloc] init];
    [flipperModule initializeFlipper:bridge];

    return YES;
}

@end
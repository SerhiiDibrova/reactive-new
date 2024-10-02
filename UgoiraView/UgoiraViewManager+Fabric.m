package UgoiraView;

#import <React/RCTViewManager.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTFabricComponents.h>

@interface UgoiraViewManager : RCTViewManager
@end

@implementation UgoiraViewManager

RCT_EXPORT_MODULE(UgoiraViewManager)

- (UIView *)view {
    return [[UIView alloc] init];
}

+ (BOOL)requiresMainQueueSetup {
    return YES;
}

- (NSDictionary *)constantsToExport {
    return @{};
}

@end

@implementation UgoiraViewManager (Fabric)

+ (BOOL)fabric {
    return YES;
}

+ (void)registerWithFabric {
    [self registerViewManager:self];
}

@end
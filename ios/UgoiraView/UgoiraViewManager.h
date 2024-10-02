#import <React/RCTViewManager.h>

@interface UgoiraViewManager : RCTViewManager {
    UIView *_view;
}

- (void)setHeight:(CGFloat)height;

@end

@implementation UgoiraViewManager

RCT_EXPORT_MODULE()

- (UIView *)view {
    if (!_view) {
        _view = [[UIView alloc] init];
    }
    return _view;
}

RCT_EXPORT_METHOD(setHeight:(CGFloat)height) {
    CGRect frame = _view.frame;
    frame.size.height = height;
    _view.frame = frame;
}

@end